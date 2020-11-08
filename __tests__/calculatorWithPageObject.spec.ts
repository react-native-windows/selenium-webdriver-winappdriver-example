import TestEnvironment from "../TestEnvironment";
import CalculatorPage from '../Pages/CalculatorPage'

beforeAll(() => {
    return TestEnvironment.setup();;
})

afterAll(() => {
    return TestEnvironment.teardown();
})

describe('Use PageObject', () => {
    beforeEach(() => {
        CalculatorPage.clear();
    })

    test('Plus', async () => {
        await CalculatorPage.waitForPageLoaded();
        expect(await CalculatorPage.plus('11', '12')).toBe('23');
    })

    test('Minus', async () => {
        await CalculatorPage.waitForPageLoaded();
        expect(await CalculatorPage.minus('11', '12')).toBe('-1');
    })

    test('Multiply', async () => {
        await CalculatorPage.waitForPageLoaded();
        expect(await CalculatorPage.multiply('11', '12')).toBe('132');
    })

    test('Divid', async () => {
        await CalculatorPage.waitForPageLoaded();
        expect(await CalculatorPage.divide('144', '12')).toBe('12');
    })
})