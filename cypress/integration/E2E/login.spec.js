/// <reference types="cypress" />
import {url,login_username,login_password} from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
describe('Login Failed Test', () => {
    before(function(){
        cy.visit(url)
        Navbar.clickOnSignin()  
    })
    it('Performing login with invalid data', () => {
        LoginPage.loginUser('InvalidName','Invalidpassword')
    })
    it('Should Display Error Message', () => {
        LoginPage.errorMessage()
    })
})

describe('Login Pass Test', () => {
    before(function(){
        cy.visit(url)
        Navbar.clickOnSignin()  
    })
    it('Performing login with valid data', () => {
        LoginPage.loginUser(login_username,login_password)
    })
    it('Verify successful login', () => {
        cy.isVisible('#account_summary_tab')
    })
    it('Performing logout', () => {
        Navbar.logout()
    })
    it('Verifying Successful logout', () => {
        LoginPage.VerifyingLogout()
    })
   
})