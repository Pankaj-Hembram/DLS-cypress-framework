class DiagnosticiansPage{
    //Locators
    pageHeader = "div.page-header h3"
    createDiagnosticiansBtn = "[class='theme-button']"
    firstNameTbx = '[placeholder="First Name"]'
    lastNameTbx = '[placeholder="Last Name"]'
    cellNumberTbx = '[placeholder="Cell Number"]'
    emailTbx = '[placeholder="Email"]'
    assignLocationDropdown = "#testingLocation"
    userNameTbx = '[placeholder="Username"]'
    createPwdTbx = '[placeholder="Create Password"]'
    confirmPwdTbx = '[placeholder="Confirm Password"]'
    createDiagnosticiansButton = "[class='theme-button float-md-right']"
    searchTbx = '[type="search"]'

    //Actions
    fillFirstName(firstName){
        cy.get(this.firstNameTbx).type(firstName)
    }

    fillLastName(lastName){
        cy.get(this.lastNameTbx).type(lastName)
    }

    fillCellNumber(cellNumber){
        cy.get(this.cellNumberTbx).type(cellNumber)
    }

    fillEmail(email){
        cy.get(this.emailTbx).type(email)
    }

    selectAssignLocation(location){
        cy.get(this.assignLocationDropdown).select(location)
    }

    fillUserName(userName){
        cy.get(this.userNameTbx).type(userName)
    }

    clickCreateDiagnosticiansBtn(){
        cy.get(this.createDiagnosticiansBtn).click()
    }

    createDiagnosticians(firstName,lastName,cellNumber,email,location,userName,createPwd,confirmPwd){
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillCellNumber(cellNumber);
        this.fillEmail(email);
        this.selectAssignLocation(location);
        this.fillUserName(userName);
        cy.get(this.createPwdTbx).type(createPwd);
        cy.get(this.confirmPwdTbx).type(confirmPwd);
        cy.get(this.createDiagnosticiansButton).click()
    }
}

export default DiagnosticiansPage;