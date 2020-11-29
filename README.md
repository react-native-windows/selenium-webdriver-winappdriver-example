# selenium-webdriver-winappdriver-example
An example of jest, selenium-webdriver and winappdriver integration

[WinAppDriver](https://github.com/microsoft/WinAppDriver) is a service to support Selenium-like UI Test Automation on Windows Applications.
[selenium-webdriver](https://seleniumhq.github.io/selenium/docs/api/javascript/) is the offical WebDriver Javascript binding from selenium project.
[selenium-appium](https://github.com/react-native-windows/selenium-appium) is selenium-webdriver extension to make selenium-webdriver to drive Appium to run automation for native, hybrid and mobile web and desktop apps.

## Preparation
1. Windows machine
2. Nodejs and Yarn

## Install and run the test
- Install packages
```yarn install```
- Launch WinAppDriver or YWinAppDriver.

`npx winappdriver` or `npx ywinappdriver`

[WinAppDriver](https://github.com/microsoft/WinAppDriver) is supported by Microsoft.
[YWinAppDriver](https://github.com/licanhua/YWinAppDriver) is an open source project which implemented WinAppDriver's functionality, and is developed by Canhua Li

- Run the test. `yarn run jest`

## Note
To know more about how to integrate JavaScript test runner and WinAppDriver for UI automation, please refer to:
- [WinAppDriver + WebDriverIO example](https://github.com/licanhua/wdio-winappdriver-example). Example to demostrate WinAppDriver and WebDriver integration without appium dependency

- [E2E test](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/E2ETest.md) on React Native for Windows. [MoreAboutE2ETest.md](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/MoreAboutE2ETest.md) provides some background why React Native Windows choose WinAppDriver and node test runner for E2E testing.

- [winappdriver-js-webdriver-example](https://github.com/react-native-windows/winappdriver-js-webdriver-example), Which includes:
1. Jest + selenium-webdriver + WinAppDriver
2. Jasmine + WebDriverIO + WinAppDriver

- [selenium-webdriver-winappdriver-example](https://github.com/react-native-windows/selenium-webdriver-winappdriver-example). 
An example of jest, selenium-webdriver and winappdriver integration

- [selenium-appium](https://github.com/react-native-windows/selenium-appium). selenium-appium is selenium-webdriver extension to make selenium-webdriver to drive Appium to run automation for native, hybrid and mobile web and desktop apps.

- [Choose the right E2E automation framework for React Native Windows](https://medium.com/@licanhua/choose-the-right-e2e-automation-framework-for-react-native-windows-83ade8b16b52)
- [How to: Use Jest + selenium-webdriver + WinAppDriver to do Windows UI testing](https://medium.com/@licanhua/how-to-use-jest-selenium-webdriver-winappdriver-to-do-windows-ui-testing-c9d074e698ed)
- [Automated Windows UI testing by Jest + selenium-appium + selenium-webdriver + WinAppDriver](https://medium.com/@licanhua/automated-windows-ui-testing-by-jest-selenium-appium-selenium-webdriver-winappdriver-6cb708121d71)
- [Inspecting UI Elements for WinAppDriver automation using Appium Desktop](https://medium.com/@licanhua/inspecting-ui-elements-for-winappdriver-automation-using-appium-desktop-8f178b2d0d6c)

