const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai').should();

class AppiumMobileAppAutomation {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/AppiumMobileAppAutomation.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    landOnHomescreen() {
        ActionHelper.waitForElement(this.getObjectLocator().splashScreenSelector)
        ActionHelper.click(this.getObjectLocator().splashScreenSelector)
        ActionHelper.waitForElement(this.getObjectLocator().splashScreenSelector)
        ActionHelper.click(this.getObjectLocator().splashScreenSelector)
        
        ActionHelper.waitForEnabled(this.getObjectLocator().loginButton)
        ActionHelper.clearText(this.getObjectLocator().userNameField)
        ActionHelper.sendText(this.getObjectLocator().userNameField, 'zaloraautomation@zaloraaa.com')
        ActionHelper.clearText(this.getObjectLocator().passwordField)
        ActionHelper.sendText(this.getObjectLocator().passwordField, 'Password123')
        ActionHelper.click(this.getObjectLocator().loginButton)
        
        ActionHelper.waitForElement(this.getObjectLocator().categorySelector)
        ActionHelper.click(this.getObjectLocator().categorySelector)
        ActionHelper.waitForElement(this.getObjectLocator().skipTutorialButton)
        ActionHelper.click(this.getObjectLocator().skipTutorialButton)

        ActionHelper.waitForElement(this.getObjectLocator().homeScreen)
        ActionHelper.isVisible(this.getObjectLocator().homeScreen)
    }

    navigateToAddressScreen() {
        ActionHelper.waitForElement(this.getObjectLocator().menuButton)
        ActionHelper.click(this.getObjectLocator().menuButton)

        ActionHelper.waitForElement(this.getObjectLocator().accountMenu)
        ActionHelper.click(this.getObjectLocator().accountMenu)

        ActionHelper.waitForElement(this.getObjectLocator().details)
        ActionHelper.click(this.getObjectLocator().details)

        ActionHelper.waitForElement(this.getObjectLocator().addNewAddressButton)
        ActionHelper.click(this.getObjectLocator().addNewAddressButton)
    }

    navigateToMoreScreen() {
        ActionHelper.waitForElement(this.getObjectLocator().menuButton)
        ActionHelper.click(this.getObjectLocator().menuButton)

        ActionHelper.waitForElement(this.getObjectLocator().moreMenu)
        ActionHelper.click(this.getObjectLocator().moreMenu)
    }

    isAssertTextVisible() {
        ActionHelper.waitForElement(this.getObjectLocator().changeLocationOption)
        ActionHelper.getText(this.getObjectLocator().changeLocationOption).toLowerCase() === 'change location'
    }

    fillUpAddressForm() {
        ActionHelper.waitForElement(this.getObjectLocator().addressSaveButton)
        ActionHelper.clearText(this.getObjectLocator().firstName)
        ActionHelper.sendText(this.getObjectLocator().firstName, 'Donald')
        ActionHelper.clearText(this.getObjectLocator().lastName)
        ActionHelper.sendText(this.getObjectLocator().lastName, 'Trump')
        ActionHelper.clearText(this.getObjectLocator().cellPhone)
        ActionHelper.sendText(this.getObjectLocator().cellPhone, '011111111')
        ActionHelper.clearText(this.getObjectLocator().address)
        ActionHelper.sendText(this.getObjectLocator().address, 'Somewhere In Malaysia')
        ActionHelper.clearText(this.getObjectLocator().townOrCity)
        ActionHelper.sendText(this.getObjectLocator().townOrCity, 'The Lost City')
        ActionHelper.click(this.getObjectLocator().region)
        ActionHelper.click(this.getObjectLocator().selectRegion)
        ActionHelper.click(this.getObjectLocator().state)
        ActionHelper.click(this.getObjectLocator().selectState)
        ActionHelper.clearText(this.getObjectLocator().postcode)
        ActionHelper.sendText(this.getObjectLocator().postcode, 'postal')
        ActionHelper.click(this.getObjectLocator().addressSaveButton)
        this.invalidMessagePopup()
        ActionHelper.click(this.getObjectLocator().addressSaveButton)
    }

    invalidMessagePopup() {
        try {
            ActionHelper.isVisible(this.getObjectLocator().invalidValueMessagePopup) 
            ActionHelper.click(this.getObjectLocator().alertMessageDimissButton)
        } catch (error) {
            
        }
        if(ActionHelper.getText(this.getObjectLocator().errorView) === 'Postal Code is not valid.') {
            ActionHelper.click(this.getObjectLocator().errorView)
        ActionHelper.sendText(this.getObjectLocator().postcode, '50555')
        }
    }

    searchForAnItem() {
        ActionHelper.click(this.getObjectLocator().searchBar)
        ActionHelper.sendText(this.getObjectLocator().searchTextField, 'bag')
        ActionHelper.click(this.getObjectLocator().searchSuggestion)
        
    }

    isSelectedProductScreenLoaded() {
        ActionHelper.waitForElement(this.getObjectLocator().firstSearchedItem)
        const searchedText = ActionHelper.getText(this.getObjectLocator().searchedItemText)
        ActionHelper.click(this.getObjectLocator().firstSearchedItem)
        ActionHelper.waitForElement(this.getObjectLocator().productScreen)
        const searchedTextOnProductScreen = ActionHelper.getText(this.getObjectLocator().selectedItemText)
        console.info('Result: ', searchedTextOnProductScreen , searchedText )
        searchedTextOnProductScreen === searchedText
    }
}

module.exports = AppiumMobileAppAutomation;
