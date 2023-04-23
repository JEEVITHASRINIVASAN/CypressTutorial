import { TextBoxPageEleObj } from "../../../../support/PageObjects-I/Elements/Textbox.page"
import { HeaderPageEleObj } from "../../../../support/PageObjects-I/Headers.page"


describe('Testing TextBox Functionality', function() {

    beforeEach('Launching URL', function() {
         cy.visit('/login')
         cy.fixture('textboxpage').then((data)=>{
            this.data = data
         })
    })

    it('TextBox', function() {
        HeaderPageEleObj.getParentHeading('Elements').click()
        HeaderPageEleObj.getChildElements('Text Box').click({force:true}).wait(1000)
        TextBoxPageEleObj.getPageTitle().wait(500).should('have.text', this.data.pageTitle)
        TextBoxPageEleObj.getFullName().type(this.data.userName)
        TextBoxPageEleObj.getEmail().type(this.data.email)
        TextBoxPageEleObj.getCurrentAddress().type(this.data.currentAddress)
        TextBoxPageEleObj.getPermanantAddress().type(this.data.permanantAddress)
        TextBoxPageEleObj.getSubmitBtn().click()
        TextBoxPageEleObj.verifyName().should('contain', this.data.userName)
        TextBoxPageEleObj.verifyEmail().should('contain',this.data.email)
        TextBoxPageEleObj.verifyCurrentAddress().should('contain',this.data.currentAddress)
        TextBoxPageEleObj.verifyPermanentAddress().should('contain',this.data.permanantAddress)
    })



})