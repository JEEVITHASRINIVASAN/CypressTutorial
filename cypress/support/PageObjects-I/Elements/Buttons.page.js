class ButtonsPage{

    getPageTitle(){
        return cy.get('.main-header')
    }

    getDoubleClickMeBtn(){
        return cy.get('#doubleClickBtn')
    }

    getRightClickMeBtn(){
        return cy.get('#rightClickBtn')
    }

    getClickMeBtn(value){
        return cy.get('.btn-primary').eq(value)
    }

    getDoubleClickMessage(){
        return cy.get('#doubleClickMessage')
    }

    getRightClickMessage(){
        return cy.get('#rightClickMessage')
    }

    getDynamicClickMessage(){
        return cy.get('#dynamicClickMessage')
    }

    getNoOfMessages(){
        return cy.get('.col-md-6 >div:nth-child(2) >p')
    }
}

export const ButtonsPageEleObj = new ButtonsPage()