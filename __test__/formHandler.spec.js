import { analyseLanguage } from "../src/client/js/formHandler";

const testSuite = () => {
    test("Testing the analyseLanguage function", () => {
        expect(analyseLanguage).toBeDefined();
    })
}

describe("Testing the submit functionality", () => {
    testSuite();
});