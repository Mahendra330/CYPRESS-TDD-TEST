import BasePage from '../BasePage'
export default class LoginPage extends BasePage{

    static loginUser(username,password){
        cy.login(username,password)
    }

    static forgotPassword(){
        cy.contains('Forgot your password ?').click()
    }

    static errorMessage(){
        cy.isVisible('.alert.alert-error')
    }

    static VerifyingLogout(){
        cy.url().should('include','/index.html')
    }

}