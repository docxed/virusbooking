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
    it("กรอกรายละเอียดเพิ่มหรือลงเตียง", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(7) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get(".mb-3 > a > .btn").click()
      cy.get("form > :nth-child(1) > .form-control").clear().type(user.amount)
      cy.get("form > :nth-child(1) > .form-control").should(
        "have.value",
        user.amount
      )
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
    it("กรอกข้อมูลค้นหาเตียง", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(2) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get(".form-control").type(user.keyword, { force: true })
      cy.get(".form-control").should("have.value", user.keyword)
    })
  })

  const usersForToggleBed = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
      title: "จัดการสถานที่",
    },
  ]
  usersForToggleBed.forEach((user, index) => {
    it("เข้าถึงหน้าจัดการสถานที่", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(7) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get("h2").wait(1000).contains(user.title)
    })
  })

  const usersForBeds = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
      title: "การจองเตียง",
    },
  ]
  usersForBeds.forEach((user, index) => {
    it("เข้าถึงหน้าการจองเตียง", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(3) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get("h2").wait(1000).contains(user.title)
    })
  })

  const usersForProfile = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
      title: "ข้อมูลผู้ใช้",
    },
  ]
  usersForProfile.forEach((user, index) => {
    it("เข้าถึงหน้าบัญชีผู้ใช้", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get(".navbar-toggler-icon").wait(1000).click() // After Signin
      cy.get(":nth-child(6) > .nav-link").click()
      cy.get(".btn-close").click()
      cy.get("h2").wait(1000).contains(user.title)
    })
  })

  const usersForHome = [
    {
      email: "akira.ajeyb@gmail.com",
      password: "123456",
      firstname: "อคิราภ์",
      lastname: "สีแสนยง",
      title: "ค้นหาเตียง",
    },
  ]
  usersForHome.forEach((user, index) => {
    it("เข้าถึงหน้าประจำวัน", () => {
      cy.visit("/signin")
      cy.get(":nth-child(1) > .form-control").type(user.email)
      cy.get(":nth-child(2) > .form-control").type(user.password)
      cy.get(".btn").click()
      cy.get("h3").wait(1000).contains(user.title)
    })
  })
})
