class HeadersPage
{
    getParentHeading(value){
        return cy.get('div.header-text').contains(value)
    }

    getChildElements(value){
        return cy.get('.menu-list > li ').contains(value)
    }

}

export const HeaderPageEleObj = new HeadersPage()