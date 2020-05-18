export default class AccountLink{
    static clickOnAccountSummnery(){
        cy.get('#account_summary_tab').click()
    }
    static clickOnAccountActivity(){
        cy.get('#account_activity_tab').click()
    }
    static clickOnTransferFunds(){
        cy.get('#transfer_funds_tab').click()
    }
    static clickOnPayBills(){
        cy.get('#pay_bills_tab').click()
    }
    static clickOnMyMoneyMap(){
        cy.get('#money_map_tab').click()
    }
    static clickOnOnlineStatement(){
        cy.get('#online_statements_tab').click()
    }
}