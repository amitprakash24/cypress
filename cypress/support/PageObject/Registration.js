

class Reg_PageObject {


    clickOnInputForm() {
        return cy.get('#__next > div > section.my-50 > div > div > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(5) > a')

    }


    setName() {

        return cy.get('#name');
    }


    setEmail() {

        return cy.get('#inputEmail4')

    }

    setPassword() {
        return cy.get('#inputPassword4')

    }
    setCompany() {

        return cy.get('#company')
    }


    setWebsite() {
        return cy.get('#websitename')
    }

    setCountry() {

        return cy.get('[name=country]')

    }
    setCity() {

        return cy.get('#inputCity')
    }
    setAddress1() {

        return cy.get('#inputAddress1')
    }
    setAddress2() {

        return cy.get('#inputAddress2')
    }
    setState() {

        return cy.get('#inputState')
    }
    setZipCode() {

        return cy.get('#inputZip')
    }


    clickOnSubmitButton() {
        return cy.get('div.text-right.mt-20 > button')
    }

    verificationText() {
        return cy.get('.success-msg.hidden')
    }

}

export default Reg_PageObject