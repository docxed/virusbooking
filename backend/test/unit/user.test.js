const chai = require("chai")
const chaiHttp = require("chai-http")

const { after, before, describe, it } = require("mocha")

const server = require("../../build/main.js").default

chai.use(chaiHttp)
chai.should()

////// auto genate idcard
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
var list = []

for (let i = 0; i < 13; i++) {
  list.push(getRandomIntInclusive(1, 9))
}

let num = 13
var list2 = list.map((val) => {
  result = val * num
  num--
  return result
})

var sum1 = list2.reduce((total, next) => {
  return total + next
})

var sum2 = 11 - (sum1 % 11)

var idc =
  list[0].toString() +
  list[1].toString() +
  list[2].toString() +
  list[3].toString() +
  list[4].toString() +
  list[5].toString() +
  list[6].toString() +
  list[7].toString() +
  list[8].toString() +
  list[9].toString() +
  list[10].toString() +
  list[11].toString() +
  sum2.toString()

const data = {
  email: "user" + idc + "@gmail.com",
  password: "15901590",
  c_password: "15901590",
  fname: "user" + idc,
  lname: "user" + idc,
  idcard: idc,
  lineid: "_user" + idc,
  phone: "0812345678",
}
//////////////////////

describe("Unit Testing user", () => {
  describe("/GET /", () => {
    it("it should have message response", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })

  describe("/POST /users/signup", () => {
    it("it should have message response", (done) => {
      chai
        .request(server)
        .post("/users/signup")
        .send(data)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.eql({ status: true, message: "ลงทะเบียนสำเร็จ" })
          done()
        })
    })
  })

  describe("/POST /users/signin", () => {
    it("it should have message response", (done) => {
      chai
        .request(server)
        .post("/users/signup")
        .send(data)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.eql({ status: true, message: "ลงทะเบียนสำเร็จ" })
          done()
        })
    })
  })
})
