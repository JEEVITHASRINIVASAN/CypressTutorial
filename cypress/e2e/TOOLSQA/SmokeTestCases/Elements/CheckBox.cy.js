import { CheckBoxPageEleObj } from "../../../../support/PageObjects-I/Elements/CheckBox.page"
import { HeaderPageEleObj } from "../../../../support/PageObjects-I/Headers.page"

describe('Testing CheckBox Functionality', function(){

    beforeEach('LaunchingUrl', function(){
        cy.visit('/login')
    })

    it('CheckBox', function(){
        HeaderPageEleObj.getParentHeading('Elements').click()
        HeaderPageEleObj.getChildElements('Check Box').click({force:true})
        CheckBoxPageEleObj.verifyPageTitle()
        CheckBoxPageEleObj.getArrowBtnHome().click()
        CheckBoxPageEleObj.verifyArrowBtnsExpanded(0).should('not.have.class','rct-node-collapsed')
        // CheckBoxPageEleObj.getArrowBtn(0).click()
        // CheckBoxPageEleObj.verifyArrowBtnsExpanded(1).should('have.class','rct-node-expanded')
        // CheckBoxPageEleObj.getArrowBtn(1).click()
       
        // CheckBoxPageEleObj.getHomeCheckBox().click()
        // CheckBoxPageEleObj.verifyHomeCheckBox().should('have.class', 'rct-icon rct-icon-check')

    })

})