import { By2 } from 'selenium-appium'
import TestEnvironment from '../TestEnvironment'

const oneButton = By2.nativeName('One');
const plusButton = By2.nativeName('Plus');
const sevenButton = By2.nativeName('Seven');
const equalButton = By2.nativeName('Equals');
const calculatorResult = By2.nativeAccessibilityId('CalculatorResults');

beforeAll(() => {
    return TestEnvironment.setup();;
})

afterAll(() => {
    return TestEnvironment.teardown();
})

describe('Calculator Test', () => {
    test('Plus', async () => {
        await oneButton.click();
        await plusButton.click();
        await sevenButton.click();
        await equalButton.click();
        expect(await calculatorResult.getText()).toBe('Display is 8');
    })
});
