class DashboardPage{

    adminsTab = "#Admins"
    logoutBtn = "a.text-danger"
    superAdminHeader = "[class='name'] h6"
    directorTab = "#Directors"
    diagnosticiansTab ="#Diagnosticians > a"

    clickAdminsTab(){
        cy.get(this.adminsTab).should("be.visible").click()
    }

    clickLogoutBtn(){
        cy.get(this.logoutBtn).click()
    }
    
    clickDirectorTab(){
        cy.get(this.directorTab).click()
    }

    clickDiagnosticiansTab(){
        cy.get(this.diagnosticiansTab).click()
    }
}
export default DashboardPage;