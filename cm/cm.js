let cm = window.CodeMirror(document.getElementById('left'), {
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
  lineNumbers: true,
  mode: {
    name: 'xml',
    htmlMode: true
  },
  tabSize: 2
})

cm.on('change', function () {
  updatePreview(cm.doc.getValue())
})

updatePreview(cm.doc.getValue())

function updatePreview (html) {
  document.getElementById('right').innerHTML = html
}
