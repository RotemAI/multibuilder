// Sublime Text's Monokai, as a Monaco theme.
export const monokai = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: '', foreground: 'f8f8f2', background: '272822' },
    { token: 'comment', foreground: '75715e', fontStyle: 'italic' },
    { token: 'string', foreground: 'e6db74' },
    { token: 'constant', foreground: 'ae81ff' },
    { token: 'number', foreground: 'ae81ff' },
    { token: 'keyword', foreground: 'f92672' },
    { token: 'operator', foreground: 'f92672' },
    { token: 'delimiter', foreground: 'f8f8f2' },
    { token: 'type', foreground: '66d9ef', fontStyle: 'italic' },
    { token: 'function', foreground: 'a6e22e' },
    { token: 'variable', foreground: 'f8f8f2' },
    { token: 'variable.parameter', foreground: 'fd971f', fontStyle: 'italic' },
    { token: 'tag', foreground: 'f92672' },
    { token: 'attribute.name', foreground: 'a6e22e' },
    { token: 'attribute.value', foreground: 'e6db74' },
    { token: 'regexp', foreground: 'e6db74' },
  ],
  colors: {
    'editor.background': '#272822',
    'editor.foreground': '#f8f8f2',
    'editor.lineHighlightBackground': '#3e3d32',
    'editor.selectionBackground': '#49483e',
    'editorCursor.foreground': '#f8f8f0',
    'editorWhitespace.foreground': '#3b3a32',
    'editorLineNumber.foreground': '#90908a',
    'editorLineNumber.activeForeground': '#f8f8f2',
    'editorIndentGuide.background': '#3b3a32',
    'editorGutter.background': '#272822',
  },
}

const EXTENSIONS = {
  py: 'python', js: 'javascript', mjs: 'javascript', cjs: 'javascript',
  ts: 'typescript', tsx: 'typescript', jsx: 'javascript',
  json: 'json', md: 'markdown', html: 'html', htm: 'html',
  css: 'css', scss: 'scss', less: 'less',
  sh: 'shell', bash: 'shell', zsh: 'shell',
  yml: 'yaml', yaml: 'yaml', toml: 'ini', ini: 'ini', cfg: 'ini',
  sql: 'sql', go: 'go', rs: 'rust', rb: 'ruby', php: 'php',
  java: 'java', c: 'c', h: 'c', cpp: 'cpp', hpp: 'cpp', cs: 'csharp',
  svelte: 'html', vue: 'html', xml: 'xml', dockerfile: 'dockerfile',
}

export function languageFor(path) {
  const name = (path || '').split('/').pop() || ''
  if (name.toLowerCase() === 'dockerfile') return 'dockerfile'
  if (name.toLowerCase() === 'makefile') return 'shell'
  return EXTENSIONS[name.split('.').pop()?.toLowerCase()] || 'plaintext'
}
