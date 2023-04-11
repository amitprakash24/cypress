
import Reg_PageObject from "../../support/PageObject/Registration";

context('testcase 2',()=>{
 
    it('tc_2 Input form with validations.', () => {
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
  
        reg_page.setCity().type('varanasi',{force: true})
         cy.get('#city').type('varanasi')
          reg_page.setAddress1().type('varanasi')
          reg_page.setAddress2().type('sigra')
          reg_page.setState().type('Up')
          reg_page.setZipCode().type('221010')
          reg_page.clickOnSubmitButton().click()
          reg_page.verificationText().should('have.text','Thanks for contacting us, we will get back to you shortly.')
        
        cy.screenshot()
      })
      it.only('tc_1 Drag & Drop slider',()=>{
         cy.visit('https://www.lambdatest.com/selenium-playground')
           cy.get('#__next > div > section.my-50 > div > div > div:nth-child(1) > div:nth-child(2) > ul > li:nth-child(3) > a').click({force: true})
           cy.get('#slider3 > div > input').invoke('val',95).trigger('change')
        
           
       })
   
}) 