class CheckBoxPage{

    verifyPageTitle(){
        return cy.get('.playgound-header > div')
    }

    getArrowBtnHome(){
        return cy.get('.rct-title').contains('Home')
    }

    getDesktopArrowBtn(value){
        return cy.get('.rct-node.rct-node-parent.rct-node-collapsed').eq(value).find('button')
    }

    getWindowArrowBtn(){
        return cy.get('.rct-node.rct-node-parent.rct-node-collapsed').eq(value).find('ol >li:nth-child(1)')
    }

    verifyArrowBtnsExpanded(value){
        return cy.get('ol >li').eq(value)
    }

    getHomeCheckBox(){
        return cy.get('.rct-checkbox')

    }

    verifyHomeCheckBox(){
        return cy.get('.rct-checkbox >svg')

    }
}
export const CheckBoxPageEleObj = new CheckBoxPage()