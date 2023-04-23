import { RadioBtnElePage } from "../../../../support/PageObjects-I/Elements/RadioButtons.page"
import { HeaderPageEleObj } from "../../../../support/PageObjects-I/Headers.page"

describe('Testing Radio Buttons Functionality', function(){

    beforeEach('LaunchingUrl', function(){
        cy.visit('/login')
    })

    it('Radio Buttons', function(){
        HeaderPageEleObj.getParentHeading('Elements').click()
        HeaderPageEleObj.getChildElements('Radio Button').click()
        RadioBtnElePage.getPageTitle().should('have.text','Radio Button')
        RadioBtnElePage.getAppearedText().should('have.text','Do you like the site?')
        RadioBtnElePage.getYesRadioBtn().should('be.enabled').click({force:true})
        RadioBtnElePage.getValidationMessage().should('contain.text','Yes')
        RadioBtnElePage.getImpressiveRadioBtn().should('be.enabled').click({force:true})
        RadioBtnElePage.getValidationMessage().should('contain.text','Impressive')
        RadioBtnElePage.getNoRadioBtn().should('be.disabled')
    })
})