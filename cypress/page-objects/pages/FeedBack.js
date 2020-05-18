import BasePage from '../BasePage'

export default class FeedBack extends BasePage{

    static LoadFeedbackPage(){
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    }

    static submitFeedback(){
        cy.fixture("feedback").then(data => {
            //const name =data.name
            //const email= data.email
            //const subject =data.subject
            //const message = data.message

            cy.get('#name').type(data.name)
            cy.get('#email').type(data.email)
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.message)
        })
        cy.get('input[name="submit"]').click()
    }

    static verifyingFeedBackSublittedSuccessfully(){
        cy.get('.offset3.span6').then(function(SuccessMessage){
            const SuccessMessageName = SuccessMessage.text()
            cy.log(SuccessMessageName)
        })

    }
}