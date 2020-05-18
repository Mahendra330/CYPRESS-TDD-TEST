export default class Navbar {
static clickOnLogo(){
    cy.get('.brand').click()
}

static clickOnSearch(){
    cy.get('#searchTerm').type('${text} {enter}')
}

static clickOnSignin(){
    cy.get('#signin_button').click()
}

static clickOnSettings(){
    cy.contains('Settings').click
}
static logout(){
    cy.contains('username').click()
    cy.get('#logout_link').click()
}

}

/*Difference between component and Page is:
Component will be common even if you will change*/
