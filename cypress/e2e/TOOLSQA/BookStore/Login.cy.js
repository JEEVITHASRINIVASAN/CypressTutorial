/// <reference types="cypress" />

import { loginPageClassObj } from "../../support/Pageobjects/Login.page"
import { profilePageClassObj } from "../../support/Pageobjects/Profile.page";



describe('Login TestSuite', function () {

    beforeEach('navigate to the application', function () {
        cy.visit('/')
        cy.fixture("loginpage").then(function (data) {
            this.data = data;
        });
    })

    it('With Valid Credentials', function () {

       
        cy.login(this.data.username, this.data.password)
        profilePageClassObj.getUserName().should('have.text', this.data.username)
    })

    it('With Invalid Credentials', function () {

        loginPageClassObj.getUsername().type(this.data.username)
        loginPageClassObj.getPassword().type(this.data.password1)
        loginPageClassObj.getLoginBtn().click()
        loginPageClassObj.getErrorMessage().should('have.text', this.data.errorMessage).should('have.css', 'color', 'rgb(255, 0, 0)')
    })
})