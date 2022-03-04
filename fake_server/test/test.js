const chai = require('chai')
const chaiHttp = require('chai-http')
const {after, before, describe, it} = require('mocha')

const server = require('../build/main').default

chai.use(chaiHttp)
chai.should()

describe('Testing unit Demo Killer Feature', () => {
  before(done => {
    // Do something here before test
    done()
  })
  describe('GET /', () => {
    it('Get Beds should have message การค้นหาสำเร็จ!', done => {
      chai
        .request(server)
        .get('/bedsready')
        .end((e, res) => {
          res.should.have.status(200)
          res.body.should.have.property('message').eql('การค้นหาสำเร็จ!')
          done()
        })
    })

    it('Get Beds Details should have message การค้นหาสำเร็จ!', done => {
        chai
          .request(server)
          .get('/beds/' + '620bb28003658a53611258dd')
          .end((e, res) => {
            res.should.have.status(200)
            res.body.should.have.property('message').eql('การค้นหาสำเร็จ!')
            done()
          })
      })

    it('Get Bedsdealing should have message การค้นหาสำเร็จ!', done => {
        chai
          .request(server)
          .get('/bedsdealing')
          .end((e, res) => {
            res.should.have.status(200)
            res.body.should.have.property('message').eql('การค้นหาสำเร็จ!')
            done()
          })
      })
  })

  describe('POST /', () => {
    it('Add Bedsdealing should have message จองสำเร็จ with POST', done => {
      chai
        .request(server)
        .post('/bedsdealing')
        .send({
            "date":"2022-03-15",
            "bed_id": "6209672bfbc1fc3411ca5823",
            "user_id": "6208b3f444c7f91d395ba10e"
        })
        .end((e, res) => {
          res.should.have.status(200)
          res.body.should.have.property('message').eql('จองสำเร็จ')
          done()
        })
    })

    it('Add Bedsdealing should have message ไม่สามารถจองได้ เนื่องจากเตียงเต็ม with POST', done => {
        chai
          .request(server)
          .post('/bedsdealing')
          .send({
              "date":"2022-03-15",
              "bed_id": "620965c5fbc1fc3411ca57cb",
              "user_id": "6208b3f444c7f91d395ba10e"
          })
          .end((e, res) => {
            res.should.have.status(201)
            res.body.should.have.property('message').eql('ไม่สามารถจองได้ เนื่องจากเตียงเต็ม')
            done()
          })
      })
  })


  
  after(done => {
    // Do something here after test
    done()
  })
})