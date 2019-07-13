var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");

describe("POST - /example - TEST",function() {

  it("should return the corresponding text with status 200",function(done){

    server
    .post('/example')
    .send({text:'example'})
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
        res.status.should.equal(200);
        res.body.response.should.equal('example');
        done();
    });

  });

});
