var db = require("../models");
var bodyParser = require('body-parser');
module.exports = function(app) {
    // login validate
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.post("/api/Login", function(req, res) {
        db.OwnerLogin.findOne({
          where: {
            UserName: req.body.UserName,
            Password: req.body.Password
          }
        }).then(function(result) {
          if (!result) {
            return res.json({ login: false });
          } else {
            return res.json({
              login: true,
              UserName: result.UserName
            });
          }
        });
      });
    
    // retrieve login info or use session storage
      app.get("/api/Login", function(req, res) {
        db.OwnerLogin.findAll({}).then(function(result) {
          res.json(result);
        });
      });
    
      // Create a new user when hit register
      app.post("/api/Login/create", function(req, res) {
        db.OwnerLogin.create({
          UserName: req.body.UserName,
          Password: req.body.Password,
        }).then(function(dbLogin) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(dbLogin);
        });
      });

    // get all the owners with their dogs

    app.get("/api/Owner", function(req, res) {
    db.Owner.findAll({include: [db.Dog]}).then(function(result) {
        res.json(result);
    });
    });


    
    app.get("/api/Owner/:UserName", function(req, res) {

        db.Owner.findOne({
          where: {
            UserName: req.params.UserName
          },
          include: [db.Dog]
        }).then(function(dbdog) {
          res.json(dbdog);
        });
      });
    

      // saving a new Owner info
    app.post("/api/Owner", function(req, res) {
        db.Owner.create({
            UserName:req.body.UserName,
            Name: req.body.Name,
            Location:req.body.Location
        }).then(function(dbdog) {
            res.json(dbdog);
        });
        });


  app.post("/api/Rtable", function(req, res) {
    db.pivotTable.create({
      idDog: req.body.idDog,
      idOwner: req.body.idOwner
    }).then(function(dbRtable) {
      res.json(dbRtable);
    });
  });



// get all the dogs that one owner has
  app.get("/api/Rtable/:idOwner", function(req, res) {
    console.log(req.params.idOwner);
    var carray = []
    db.pivotTable.findAll({
       where: { idOwner: req.params.idOwner}
    }).then(function(result) {
      for(var i = 0; i < result.length; i++){
        carray.push(result[i].idDog)
      }
      res.json(carray);
    });
  });


// get the owner from the dog

app.get("/api/Rtable/:idDog", function(req, res) {
  console.log(req.params.idDog);
  var carray = []
  db.pivotTable.findAll({
     where: { idDog: req.params.idDog }
  }).then(function(result) {
    for(var i = 0; i < result.length; i++){
      carray.push(result[i].idSkills)
    }
    res.json(carray);
  });
});

};