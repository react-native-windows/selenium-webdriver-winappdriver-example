import { driver, windowsAppDriverCapabilities } from 'selenium-appium'

const appId = 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App'

class TestEnvironment { 
  setup() {
    jest.setTimeout(60000);
    const capabilities = windowsAppDriverCapabilities(appId);
    return driver.startWithCapabilities(capabilities);
  }

  teardown() {
    return driver.quit();
  }
}

export default new TestEnvironment();