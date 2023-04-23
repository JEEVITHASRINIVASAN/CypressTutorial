class RadioButtonsPage{

    getPageTitle(){
        return cy.get('.main-header')
    }

    getAppearedText(){
        return cy.get('.mb-3')
    }

    getYesRadioBtn(){
        return cy.get('#yesRadio')
    }

    getImpressiveRadioBtn(){
        return cy.get('#impressiveRadio')
    }

    getNoRadioBtn(){
        return cy.get('#noRadio')
    }

    getValidationMessage(){
        return cy.get('.mt-3')
    }

}
export const RadioBtnElePage = new RadioButtonsPage()