

context('testCase 1', () => {
  
 
    it('tc_1 Drag & Drop slider',()=>{
      cy.visit('https://www.lambdatest.com/selenium-playground')
        cy.get('#__next > div > section.my-50 > div > div > div:nth-child(1) > div:nth-child(2) > ul > li:nth-child(3) > a').click({force: true})
        cy.get('#slider3 > div > input').invoke('val',95).trigger('change')
      
        
    })

   

})