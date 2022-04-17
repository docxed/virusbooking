const chai = require("chai")
const chaiHttp = require("chai-http")

const { after, before, describe, it } = require("mocha")

const server = require("../../build/main.js").default

chai.use(chaiHttp)
chai.should()

////// auto genate idcard
function randomid() {
  var id12 = ""
  for (var i = 0; i < 12; i++) {
    id12 += parseInt(Math.random() * 10)
  }
  return (num = id12 + finddigit(id12))
}
function finddigit(id) {
  var base = 100000000000 //สร้างตัวแปร เพื่อสำหรับให้หารเพื่อเอาหลักที่ต้องการ
  var basenow //สร้างตัวแปรเพื่อเก็บค่าประจำหลัก
  var sum = 0 //สร้างตัวแปรเริ่มตัวผลบวกให้เท่ากับ 0
  for (var i = 13; i > 1; i--) {
    //วนรอบตั้งแต่ 13 ลงมาจนถึง 2
    basenow = Math.floor(id / base) //หาค่าประจำตำแหน่งนั้น ๆ
    id = id - basenow * base //ลดค่า id ลงทีละหลัก
    sum += basenow * i //บวกค่า sum ไปเรื่อย ๆ ทีละหลัก
    base = base / 10 //ตัดค่าที่ใช้สำหรับการหาเลขแต่ละหลัก
  }
  var checkbit = (11 - (sum % 11)) % 10 //คำนวณค่า checkbit
  return checkbit
}

const idd = randomid()

const data = {
  email: "beds" + idd + "@gmail.com",
  password: "15901590",
  c_password: "15901590",
  fname: "user" + idd,
  lname: "user" + idd,
  idcard: idd,
  lineid: "_user" + idd,
  phone: "0812345678",
}
//////////////////////

var token
var bed_id

describe("Unit Testing beds", () => {

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

  describe("/POST /beds", () => {
    it("it should have created beds", (done) => {
      chai
        .request(server)
        .post("/users/signup")
        .send(data)
        .end((err, res) => {
          chai
            .request(server)
            .post("/users/signin")
            .send({
              email: data.email,
              password: data.password,
            })
            .end((err, res) => {
              token = res.body.token
              chai
                .request(server)
                .post("/beds")
                .set("Authorization", token)
                .send({
                  amount: 200,
                  address:
                    "ลาดพร้าว แขวง สะพานสอง เขตวังทองหลาง กรุงเทพมหานคร 10310 ประเทศไทย",
                  lat: "13.7884688",
                  lng: "100.608406",
                })
                .end((err, res) => {
                  res.should.have.status(200)
                  res.body.should.have
                    .property("message")
                    .eql("เพิ่มสถานที่สำเร็จ")
                  done()
                })
            })
        })
    })

    it("it should have status false and message response when address defined", (done) => {
      chai
        .request(server)
        .post("/beds")
        .set("Authorization", token)
        .send({
          amount: 200,
          lat: "13.7884688",
          lng: "100.608406",
        })
        .end((err, res) => {
          res.body.should.have.property("status").eql(false)
          res.body.should.have.have
            .property("message")
            .a("string")
            .eql('"address" is required')
          done()
        })
    })
  })

  describe("/GET /bedsByUser", () => {
    it("it should have beds response and status true", (done) => {
      chai
        .request(server)
        .get("/bedsByUser")
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("status").eql(true)
          res.body.should.have.property("message").eql("เรียกข้อมูลสำเร็จ")
          res.body.should.have.property("beds").a("array")
          done()
        })
    })
  })

  describe("/PUT /bed/state/:id", () => {
    it("it can changed bed status and have message response and status true", (done) => {
      chai
        .request(server)
        .get("/bedsByUser")
        .set("Authorization", token)
        .end((err, res) => {
          bed_id = res.body.beds[0].id
          chai
            .request(server)
            .put("/bed/state/" + bed_id)
            .set("Authorization", token)
            .end((err, res) => {
              res.should.have.status(200)
              res.body.should.have.property("status").eql(true)
              res.body.should.have
                .property("message")
                .eql("เปลี่ยนสถานะเตียงสำเร็จ")
              done()
            })
        })
    })
  })

  describe("/GET /bed/:id", () => {
    it("it can get bed detail", (done) => {
      chai
        .request(server)
        .get("/bed/" + bed_id)
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("status").eql(true)
          res.body.should.have
            .property("message")
            .eql("เรียกข้อมูลสำเร็จ")
          res.body.should.have
            .property("bed")
            .a("object")
          done()
        })
    })
  })

  describe("/PUT /bed/amount/:id", () => {
    it("it can get bed detail", (done) => {
      chai
        .request(server)
        .put("/bed/amount/:id" + bed_id)
        .set("Authorization", token)
        .send({
          amount: 599
        })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("status").eql(true)
          res.body.should.have
            .property("message")
            .eql("เปลี่ยนจำนวนเตียงสำเร็จ")
          done()
        })
    })
  })

  describe("/PUT /bed/address/:id", () => {
    it("it can change bed address", (done) => {
      chai
        .request(server)
        .put("/bed/address/:id" + bed_id)
        .set("Authorization", token)
        .send({
          address: "39/2 ถ. ลาดพร้าว แขวง สะพานสอง เขตวังทองหลาง กรุงเทพมหานคร 10310 ประเทศไทย",
          lat:"13.7884688",
          lng:"100.608406"
      })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("status").eql(true)
          res.body.should.have
            .property("message")
            .eql("เปลี่ยนที่อยู่สถานที่สำเร็จ")
          done()
        })
    })

    it("it can't change bed address when address not a string", (done) => {
      chai
        .request(server)
        .put("/bed/address/:id" + bed_id)
        .set("Authorization", token)
        .send({
          address: 100,
          lat:"13.7884688",
          lng:"100.608406"
      })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("status").eql(false)
          res.body.should.have
            .property("message")
            .a("string")
          done()
        })
    })
  })

  describe("/DELETE /bed/:id", () => {
    it("it can get bed detail", (done) => {
      chai
        .request(server)
        .delete("/bed/:id" + bed_id)
        .set("Authorization", token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property("status").eql(true)
          res.body.should.have
            .property("message")
            .eql("ลบข้อมูลแล้ว")
          done()
        })
    })
  })
})
