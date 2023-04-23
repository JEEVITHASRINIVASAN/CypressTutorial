class ProfilePage {
    getUserName(){
        return cy.get('#userName-value')
    }
}

export const profilePageClassObj = new ProfilePage()