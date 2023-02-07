import Reg_PageObject from "../../support/PageObject/Registration";

context('testcase 2',()=>{

    it('tc_2 input Form Submit', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground')
         
        const reg_page = new Reg_PageObject();
          cy.viewport(414, 846)
          cy.viewport('samsung-note9')
          reg_page.clickOnInputForm().click();
          reg_page.setName().type('Amit')
          reg_page.setEmail().type('Amit@gmail.com')
  
          reg_page.setPassword().type('Amit123')
          reg_page.setCompany().type('newecomp.pvt.ltd')
  
          reg_page.setWebsite().type('Amit.com')
         
          cy.get('[name=country]').select('India')
  
          reg_page.setCity().type('varanasi')
          reg_page.setAddress1().type('varanasi')
          
          reg_page.setAddress2().type('sigra')
          reg_page.setState().type('Up')
          reg_page.setZipCode().type('221010')
          reg_page.clickOnSubmitButton().click()
          reg_page.verificationText().should('have.text','Thanks for contacting us, we will get back to you shortly.')
          cy.screenshot()
      })
})