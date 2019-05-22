var db = require("../models");
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


module.exports = function(app) {
    // login validate
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    var hashed;


    app.post("/api/Login", function(req, res) {
      
        db.OwnerLogin.findOne({
          where: {
            UserName: req.body.UserName,
          }
        })
        .then(function(result) {
         
          console.log("db password is ",result.Password);
          bcrypt.compare(req.body.Password, result.Password, function(err, success) {
            if (!success) {
              return res.json({ login: false });
            } else {
              return res.json({
                login: true,
                UserName: result.UserName
              });
            }
              });
        
        });
      });

  
      // Create a new user when hit register
      app.post("/api/Login/create", function(req, res) {

        
        bcrypt.hash(req.body.Password, 10, function(err, hash) {
          hashed = hash;
          db.OwnerLogin.create({
            UserName: req.body.UserName,
            Password: hash
          }).then(function(result)  {
            console.log("hashed is ", hashed);
            res.json(result);
          });
        });
      });

    // get all the owners with their dogs

    app.get("/api/Owner", function(req, res) {
    db.Owner.findAll({include: [db.Dog]}).then(function(result) {
        res.json(result);
    });
    });

    // saving a new Owner info
    app.post("/api/Owner", function(req, res) {
      db.Owner.create({
          UserName:req.body.UserName,
          Contact: req.body.Contact,
          Location:req.body.Location
      }).then(function(dbdog) {
          res.json(dbdog);
      });
      });

    app.get("/api/Owner/:UserName", function(req, res) {

        db.Owner.findOne({
          where: {
            UserName: req.params.UserName
          },
          include: [db.Dog]
        }).then(function(dbowner) {
          res.json(dbowner);
        });
      });


  


  app.put("/api/Owner", function (req, res) {
    db.Owner.update(
      req.body,
      {
        where: {
          Username: req.body.UserName
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });


  // app.post("/api/Rtable", function(req, res) {
  //   db.pivotTable.create({
  //     idDog: req.body.idDog,
  //     idOwner: req.body.idOwner
  //   }).then(function(dbRtable) {
  //     res.json(dbRtable);
  //   });
  // });



// get all the dogs that one owner has
  // app.get("/api/Rtable/:idOwner", function(req, res) {
  //   console.log(req.params.idOwner);
  //   var carray = []
  //   db.pivotTable.findAll({
  //      where: { idOwner: req.params.idOwner}
  //   }).then(function(result) {
  //     for(var i = 0; i < result.length; i++){
  //       carray.push(result[i].idDog)
  //     }
  //     res.json(carray);
  //   });
  // });


// get the owner from the dog

// app.get("/api/Rtable/:idDog", function(req, res) {
//   console.log(req.params.idDog);
//   var carray = []
//   db.pivotTable.findAll({
//      where: { idDog: req.params.idDog }
//   }).then(function(result) {
//     for(var i = 0; i < result.length; i++){
//       carray.push(result[i].idSkills)
//     }
//     res.json(carray);
//   });
// });

};
