import { PageObject, By2 } from "selenium-appium";

class CalculatorPage extends PageObject {
    get resultTextBox() { return By2.nativeAccessibilityId('CalculatorResults');}
    get equalButton() { return By2.nativeAccessibilityId('equalButton'); } 
    get clearButton() { return By2.nativeName('Clear'); }
    get plusButton() { return By2.nativeName('Plus'); }
    get divideButton() { return By2.nativeAccessibilityId('divideButton'); }
    get multiplyButton() { return By2.nativeXpath("//Button[@Name='Multiply by']") }
    get minusButton() { return By2.nativeXpath("//Button[@AutomationId=\"minusButton\"]"); }
    get button0() { return By2.nativeAccessibilityId('num0Button'); }

    isPageLoaded() {
        return this.resultTextBox.isDisplayed();
    }
    
    clear() {
        return this.clearButton.click();
    }

    minus(a: string, b: string) {
        return this.performCalculation(a, b, this.minusButton);
    }

    plus(a: string, b: string) {
        return this.performCalculation(a, b, this.plusButton);
    }

    multiply(a: string, b: string) {
        return this.performCalculation(a, b, this.multiplyButton);
    }

    divide(a: string, b: string) {
        return this.performCalculation(a, b, this.divideButton);
    }

    private getTestResult() {
        return this.resultTextBox.getText().then((text) => text.replace('Display is ', ''))
    }

    private async performCalculation(a: string, b: string, opButton: By2) {
        await this.pressNumbers(a);
        await opButton.click();
        await this.pressNumbers(b);
        await this.equalButton.click();
        return this.getTestResult();
    }

    private async pressNumbers(numbers: string) {
        for (let number of numbers){
            await this.pressNumber(number);
        }
    }
    
    private pressNumber(num: string) {
        if (num.match(/^[0-9]$/)) {
            return By2.nativeAccessibilityId('num' + num + 'Button').click();
        }
        throw new Error('it should be between 0 and 9');
    }

}

export default new CalculatorPage();