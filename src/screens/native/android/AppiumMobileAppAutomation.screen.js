
class AppiumMobileAppAutomation{
    constructor() {

        this.accountMenu = '//android.widget.RelativeLayout[3]/android.widget.TextView'
        this.addNewAddressButton = '//android.widget.LinearLayout[3]/android.widget.Button',
        this.address = '//android.widget.RelativeLayout[5]/android.widget.EditText',
        this.addressSaveButton = '//android.widget.Button[@resource-id="com.zalora.android:id/save_button"]',
        this.alertMessageDimissButton = '//android.widget.Button[@resource-id="com.zalora.android:id/ok_button"]',
        this.errorView = '//android.widget.TextView[@resource-id="com.zalora.android:id/error_view"]',
        this.categorySelector  = '//android.widget.Button[@resource-id="com.zalora.android:id/segment"]',
        this.cellPhone = '//android.widget.RelativeLayout[3]/android.widget.EditText',
        this.changeLocationOption = '//android.widget.LinearLayout[1]/android.widget.TextView',
        this.details = '//android.widget.TextView[@resource-id="com.zalora.android:id/details"]',
        this.firstName = '//android.widget.RelativeLayout[1]/android.widget.EditText',
        this.firstSearchedItem = '//android.widget.ImageView[@resource-id="com.zalora.android:id/image_view"]'
        this.homeScreen = '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.zalora.android:id/rv_products"]',
        this.invalidValueMessagePopup = '//android.widget.TextView[@resource-id="com.zalora.android:id/dialog_body"]',
        this.lastName = '//android.widget.RelativeLayout[2]/android.widget.EditText',
        this.loginButton = '//android.widget.Button[@resource-id="com.zalora.android:id/login_button"]',
        this.menuButton = '~Navigate up',
        this.moreMenu = '//android.widget.RelativeLayout[6]/android.widget.TextView',
        this.passwordField = '//android.widget.EditText[@resource-id="com.zalora.android:id/password_field_id"]',
        this.postcode = '//android.widget.RelativeLayout[10]/android.widget.EditText',
        this.productScreen = '//android.widget.TextView[@resource-id="com.zalora.android:id/tv_add_to_bag_cta_label"]',
        this.searchBar = '//android.widget.TextView[@resource-id="com.zalora.android:id/extended_search_button"]',
        this.searchedItemText = '//android.widget.TextView[@resource-id="com.zalora.android:id/item_name"]',
        this.searchTextField = '//android.widget.EditText[@resource-id="com.zalora.android:id/search_field"]',
        this.searchSuggestion = '//androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]',
        this.selectedItemText = '//android.widget.TextView[@resource-id="com.zalora.android:id/tv_pdv_product_name"]',
        this.selectRegion = '//android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView'
        this.selectState = '//android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView'
        this.skipTutorialButton = '//android.widget.Button[@resource-id="com.zalora.android:id/tutorial_skip_button"]',
        this.splashScreenSelector = '//android.widget.TextView[@resource-id="com.zalora.android:id/splash_item_name"]',
        this.state = '//android.widget.RelativeLayout[9]/android.widget.TextView',
        this.region = '//android.widget.RelativeLayout[8]/android.widget.TextView',
        this.townOrCity = '//android.widget.RelativeLayout[7]/android.widget.EditText',
        this.userNameField = '//android.widget.EditText[@resource-id="com.zalora.android:id/edit_text"]'
    }
}

module.exports = new AppiumMobileAppAutomation();
