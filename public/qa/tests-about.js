// tests-global.js

suite('"About" page tests', function() {
  test('page should contain a link to the contact page', function() {
    assert($('a[href="/contact"]').length)
  })
})
