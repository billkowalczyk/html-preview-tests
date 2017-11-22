let editor = window.ace.edit('left')
editor.getSession().setMode('ace/mode/html')
editor.getSession().on('change', function () {
  document.getElementById('right').innerHTML = editor.getValue()
})
editor.setValue([
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
].join('\n'))
