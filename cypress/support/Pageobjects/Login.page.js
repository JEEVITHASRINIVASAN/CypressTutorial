class LoginPage

{
    getUsername(){
       return cy.get('#userName')
    }

    getPassword(){
        return cy.get('#password')
    }

    getLoginBtn(){
       return cy.get('#login')
    }

    getErrorMessage(){
        return cy.get('#name')
    }
}

export const loginPageClassObj = new LoginPage()