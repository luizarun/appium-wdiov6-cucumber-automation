# Appium-Cucumber-NativeApp-Automation

Appium Automation project to run native android using cucumber.

## Based on

- WebdriverIO v6
- cucumber v6
- Node version 10.16 or higher
- Appium

## Supports

- Native Android
- Contains test scenarios in cucumber
- Supports multiple cucumber html reports

## How to run test

Follow the below commands -

- Clone the project - `git@github.com:icearun1/appium-wdiov6-cucumber-automation.git`.

- Install dependencies using `npm i` in the terminal.

- Connect a real Android device.

- Update the deviceName (udid) and platFormVersion in `config/android.info.js` .

- Run the appium server using Appium desktop.

- Execute `npm run android` to run android native app.

- Report opens up on the default browser once the test is completed.