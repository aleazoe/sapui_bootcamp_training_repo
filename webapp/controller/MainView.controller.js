sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.exer1fadlen.controller.MainView", {
        onInit() {
        },

        onAddItem: function (){
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg(sMsg);
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var selectedMOP = "";

            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");

            var oCardNameLabel = this.getView().byId("idLblCardName");
            var oCardNameInput = this.getView().byId("idInputCardName");

            var oCardNumLabel = this.getView().byId("idLblAccNum");
            var oCardNumInput = this.getView().byId("idInputAccNum");
            var oExpDateLabel = this.getView().byId("idLblExpDate");
            var oExpDateInput = this.getView().byId("idInputExpDate");
            
            var oCvvLabel = this.getView().byId("idLblCvv");
            var oCvvInput = this.getView().byId("idInputCvv");

            if (sSelectedKey === "GCASH"){
                // show the mobile field
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCardNameLabel.setVisible(false);
                oCardNameInput.setVisible(false);
                oCardNumLabel.setVisible(false);
                oCardNumInput.setVisible(false);
                oExpDateLabel.setVisible(false);
                oExpDateInput.setVisible(false);
                oCvvLabel.setVisible(false);
                oCvvInput.setVisible(false);
                selectedMOP = oTextBundle.getText("gcashTxt")
            } else if (sSelectedKey === "CC") {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCardNameLabel.setVisible(true);
                oCardNameInput.setVisible(true);
                oCardNumLabel.setVisible(true);
                oCardNumInput.setVisible(true);
                oExpDateLabel.setVisible(true);
                oExpDateInput.setVisible(true);
                oCvvLabel.setVisible(true);
                oCvvInput.setVisible(true);
                selectedMOP = oTextBundle.getText("ccTxt")
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCardNameLabel.setVisible(false);
                oCardNameInput.setVisible(false);
                oCardNumLabel.setVisible(false);
                oCardNumInput.setVisible(false);
                oExpDateLabel.setVisible(false);
                oExpDateInput.setVisible(false);
                oCvvLabel.setVisible(false);
                oCvvInput.setVisible(false);
                selectedMOP = oTextBundle.getText("codTxt")
            }

            var selMOPMsg = oTextBundle.getText("showMOPMsg", [selectedMOP]);
            this.fnDisplayMsg(selMOPMsg);
        },

        onPressCheckout: function () {
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();

            // Check if first name is blank
            if (oInputFNameValue === "" || oInputLNameValue === "") {
                var sMsg = oTextBundle.getText("blankFldMsg");
                this.fnDisplayMsg(sMsg);
            }
        },
    });
});