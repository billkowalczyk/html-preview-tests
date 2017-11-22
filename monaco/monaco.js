require.config({ paths: { 'vs': 'monaco/monaco-editor/min/vs' } })

require(['vs/editor/editor.main'], function () {
  var editor = window.monaco.editor.create(document.getElementById('left'), {
    value: [
      '<html>',
      '\t<body>',
      '\t\t<style type="text/css">',
      '\t\t\th2 {',
      '\t\t\t\tcolor: green;',
      '\t\t\t\tfont-size: 1em;',
      '\t\t\t}',
      '\t\t</style>',
      '\t\t<h2>Thank you for your purchase!</h2>',
      '\t\t{{MESSAGE}}',
      '\t</body>',
      '</html>'
    ].join('\n'),
    formatOnType: true,
    formatOnPaste: true,
    language: 'html',
    tabSize: 2,
    minimap: {
      enabled: false
    }
  })
  editor.onDidChangeModelContent(function () {
    updatePreview(editor.model.getValue())
  })
  updatePreview(editor.model.getValue())
})

function updatePreview (html) {
  document.getElementById('right').innerHTML = html
}
