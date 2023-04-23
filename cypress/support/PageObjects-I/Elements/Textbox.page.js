class TextboxPage {

    getTextBox(){
        return cy.get('.menu-list > li ')
    }

    getPageTitle(){
        return cy.get('.playgound-header >div')
    }

    getFullName(){
        return cy.get('#userName')
    }

    getEmail(){
        return cy.get('#userEmail')
    }

    getCurrentAddress(){
        return cy.get('#currentAddress')
    }

    getPermanantAddress(){
        return cy.get('#permanentAddress')
    }

    getSubmitBtn(){
        return cy.get('#submit')
    }

    verifyName(){
        return cy.get('p#name')
    }

    verifyEmail(){
        return cy.get('p#email')
    }

    verifyCurrentAddress(){
        return cy.get('p#currentAddress')
    }

    verifyPermanentAddress(){
        return cy.get('p#permanentAddress')
    }

}

export const TextBoxPageEleObj = new TextboxPage()