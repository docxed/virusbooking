const chai = require("chai")
const chaiHttp = require("chai-http")

const { after, before, describe, it } = require("mocha")

const server = require("../../build/main.js").default

chai.use(chaiHttp)
chai.should()

describe("Unit Testing user", () => {
  describe("/GET /beds/available", () => {
    it("it should have beds available response", (done) => {
      chai
        .request(server)
        .get("/beds/available")
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("beds").a("array")
          done()
        })
    })
  })

  describe("/GET /beds/search", () => {
    it("it should have beds searched response", (done) => {
      chai
        .request(server)
        .get("/beds/search")
        .query({ search: "สายไหม" })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("beds").a("array")
          done()
        })
    })
  })

  describe("/GET /beds/search", () => {
    it("it should have beds searched response", (done) => {
      chai
        .request(server)
        .get("/beds/search")
        .query({ search: "สายไหม" })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("beds").a("array")
          done()
        })
    })
  })
})
