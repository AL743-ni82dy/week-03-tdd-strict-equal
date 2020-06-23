
const assert = require('assert')
const expect = require('chai').expect
const strictEqual = require('../stricteq').strictEqual

describe('strictEqual', () => {
  it('returns true if two values have the same data type and value otherwise false', () => {
    // set-up test data
    const first = 'd'
    const second = 'd'
    const result = first === second

    // call function with test data
    const strictEqualValue = strictEqual(first, second)

    // asserts what should be true
    expect(strictEqualValue).to.equal(result)
  })
})
