const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync(__dirname+'/app.py','utf8');
const loader=source.slice(source.indexOf('async function loadUsersAdmin(){'),source.indexOf('function filterUsers(value){'));
const renderer=source.slice(source.indexOf('function renderUsersAdmin(){'),source.indexOf('function initUsersTableUX(){'));
const constants=source.slice(source.indexOf('let _usersUsagePeriod='),source.indexOf('\n',source.indexOf('const USER_USAGE_OPTIONS=')));
function fixture(){
 const content={innerHTML:''};const calls=[];
 const c=vm.createContext({document:{getElementById:()=>content},BASE:'',esc:String,content,calls,_usersCache:[],_groupsCache:[],_usersSearch:'',_currentUser:null,_userColumns:{},visibleUsers:()=>[],_groupOpts:()=>'',userColumnStyle:()=>'',initUsersTableUX:()=>{},fetch:(url)=>new Promise(resolve=>calls.push({url,resolve}))});
 vm.runInContext(constants+'\n'+loader+'\n'+renderer,c);return c;
}
function reply(call,data){call.resolve({ok:true,json:async()=>data});}
test('all requested periods render and selection survives rendering',async()=>{
 const c=fixture();vm.runInContext('renderUsersAdmin()',c);
 for(const label of ['Today','Last 2 days','Last 5 days','Last 7 days','All time'])assert.ok(c.content.innerHTML.includes(label));
 assert.match(c.content.innerHTML,/value="all" selected/);
 const done=vm.runInContext("setUsersUsagePeriod('2')",c);
 assert.equal(c.calls[0].url,'/api/admin/users?usage_period=2');
 reply(c.calls[0],{users:[]});reply(c.calls[1],{groups:[]});await done;
 assert.match(c.content.innerHTML,/value="2" selected/);
 assert.match(c.content.innerHTML,/midnight UTC/);
 vm.runInContext("setUsersUsagePeriod('invalid')",c);assert.equal(c.calls.length,2);
});
test('a stale request cannot overwrite the latest usage selection',async()=>{
 const c=fixture();const first=vm.runInContext("setUsersUsagePeriod('today')",c);
 const second=vm.runInContext("setUsersUsagePeriod('7')",c);
 reply(c.calls[2],{users:[{id:'new'}]});reply(c.calls[3],{groups:[]});await second;
 reply(c.calls[0],{users:[{id:'old'}]});reply(c.calls[1],{groups:[]});await first;
 assert.equal(c._usersCache[0].id,'new');assert.match(c.content.innerHTML,/value="7" selected/);
});
