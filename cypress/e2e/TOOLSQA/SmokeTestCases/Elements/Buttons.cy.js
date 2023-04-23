import { ButtonsPageEleObj } from "../../../../support/PageObjects-I/Elements/Buttons.page"
import { HeaderPageEleObj } from "../../../../support/PageObjects-I/Headers.page"

describe('Testing Buttons Functionality', function(){

    beforeEach('LaunchingUrl', function(){
        cy.visit('/login')
    })

    it('Buttons Functionality', function(){
        HeaderPageEleObj.getParentHeading('Elements').click()
        HeaderPageEleObj.getChildElements('Buttons').click()
        ButtonsPageEleObj.getDoubleClickMeBtn().dblclick()
        ButtonsPageEleObj.getDoubleClickMessage().should('contain.text', 'double click')
        ButtonsPageEleObj.getRightClickMeBtn().rightclick()
        ButtonsPageEleObj.getRightClickMessage().should('contain.html','right click')
        ButtonsPageEleObj.getClickMeBtn(2).click({force:true})
        ButtonsPageEleObj.getDynamicClickMessage().should('contain.text','dynamic click')
    })
})