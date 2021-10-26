const app = require('./app')
const { expect } = require('chai')

describe('App', () => {
    it('Test-1 / should work when using sample1.json', () => {
        const expected_text = 'you are watching this is a title'
        const text_1 = app('./data/formatted_text.txt', './data/sample1.json', 'result1.json')
        expect(text_1.processed).to.be.eq(expected_text)
    })

    it('Test-2 / should work when using sample2.json', () => {
        const expected_text = "you are watching 'chef recommendation' must try!"
        const text_2 = app('./data/formatted_text.txt', './data/sample2.json', 'result2.json')
        expect(text_2.processed).to.be.eq(expected_text)
    })
})