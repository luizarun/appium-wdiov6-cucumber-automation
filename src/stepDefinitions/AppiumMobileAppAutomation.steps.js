const {Given, When, Then} = require('cucumber');

const AppiumMobileAppAutomationPage = require('../pages/appiumMobileAppAutomation.page');

const appiumMobileAppAutomationPage = new AppiumMobileAppAutomationPage();

Given(/^I launch the app$/, () => {
    appiumMobileAppAutomationPage.launchApp();
});

When(/^I land on home screen after login$/, () => {
    appiumMobileAppAutomationPage.landOnHomescreen();
});

When(/^I navigate to add address screen$/, () => {
    appiumMobileAppAutomationPage.navigateToAddressScreen();
});

When(/^I fill up the address form$/, () => {
    appiumMobileAppAutomationPage.fillUpAddressForm();
});

When(/^I search for bag$/, () => {
    appiumMobileAppAutomationPage.searchForAnItem();
});

Then(/^I select an item and land on the product screen$/, () => {
    appiumMobileAppAutomationPage.isSelectedProductScreenLoaded();
});

When(/^I navigate to more screen$/, () => {
    appiumMobileAppAutomationPage.navigateToMoreScreen();
});

Then(/^I should see location change text on the screen$/, () => {
    appiumMobileAppAutomationPage.isAssertTextVisible();
});