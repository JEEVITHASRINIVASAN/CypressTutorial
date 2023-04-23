class WebTables {
    verifyPageTitle(){
        return cy.get('div.playgound-header')
    }

    getTable(){
        return cy.get('.rt-table')
    }


}