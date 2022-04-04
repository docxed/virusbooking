// https://docs.cypress.io/api/table-of-contents

describe("Bestbeds - E2E Test", () => {
  const usersForSignin = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
    },
  ]
  usersForSignin.forEach((user, index) => {
    it("ลงชื่อเข้าใช้งาน", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(6) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get(":nth-child(1) > .form-control").should(
        "have.value",
        user.firstname
      )
      cy.get(".row > :nth-child(2) > .form-control").should(
        "have.value",
        user.lastname
      )
    })
  })

  const usersForAddBed = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
      amount: 69,
    },
  ]
  usersForAddBed.forEach((user, index) => {
    it("เพิ่มหรือลงเตียง", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(7) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get(".mb-3 > a > .btn").click()
      cy.get("form > :nth-child(1) > .form-control").clear().type(user.amount)
      cy.get("#button-addon2").click()
      cy.get(".text-center > .btn").wait(3000).click({ force: true })
      cy.get(".swal2-confirm").click().wait(3000)
      cy.url().should("include", "/bedsmanage")
    })
  })

  const usersForFindBed = [
    {
      email: "test@gmail.com",
      password: "123456",
      firstname: "หยาง",
      lastname: "จื้อเทียน",
      keyword:
        "19/49 ซอย สายไหม 15 แขวง สายไหม เขตสายไหม กรุงเทพมหานคร 10220 ประเทศไทย",
    },
  ]
  usersForFindBed.forEach((user, index) => {
    it("ค้นหาเตียงและเข้าไปดูรายละเอียด", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(2) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get(".form-control").type(user.keyword)
      cy.get(":nth-child(1) > .border > .mb-2 > a > .btn").click()
      cy.get(".mb-4 > .text-secondary").contains(user.keyword)
    })
  })

  const usersForToggleBed = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
    },
  ]
  usersForToggleBed.forEach((user, index) => {
    it("เปิด/ปิด สถานะการให้จองเตียง", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(7) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get(
        ":nth-child(1) > :nth-child(3) > .form-check > #flexSwitchCheckDefault"
      ).click()
      cy.get(
        ":nth-child(1) > :nth-child(3) > .form-check > #flexSwitchCheckDefault"
      )
        .wait(1000)
        .click()
    })
  })
})
