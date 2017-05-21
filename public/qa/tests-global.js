// tests-global.js

suite('Global tests', function() {
  test('page has a valid title', function() {
    assert(document.title.length > 1, 'too short title')
  })
  test('page title is not default:' + document.title, function() {
    assert(document.title.toLowerCase() !== 'document', 'invalid title')
  })

})
