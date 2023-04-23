export default class BookStorePage
{
    getLoginBtn(){
        cy.get('#login')

        return this
    }

    getSearchFilter(){
        cy.get('#searchBox')

        return this
    }

    getSearchIcon(){
        cy.get('#basic-addon2')

        return this
    }

    getLogoutBtn(){
        cy.get('#submit')

        return this
    }
}

export const BookStorePageClassObj = new BookStorePage()
