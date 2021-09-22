const analyseLanguage = require('../src/client/js/formHandler');

describe("Testing the submit functionality", () => {
    test("Testing the analyseLanguage function", () => {
        expect(analyseLanguage).toBeDefined();
    })
})