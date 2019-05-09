var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/Login", function(req, res) {
    db.OwnerLogin.findOne({
      where: {
        userName: req.body.userName,
        password: req.body.password
      }
    }).then(function(result) {
      if (!result) {
        return res.json({ login: false });
      } else {
        return res.json({
          login: true,
          userId: result.id,
          userName: result.userName
        });
      }
    });
  });


  app.get("/api/Login", function(req, res) {
    db.OwnerLogin.findAll({}).then(function(result) {
      res.json(result);
    });
  });



  // Create a new example
  app.post("/api/Login/create", function(req, res) {
    db.OwnerLogin.create({
      userName: req.body.userName,
      password: req.body.password,

    }).then(function(dbLogin) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbLogin);
    });
  });


  app.post("/api/Dog", function(req, res) {
    db.Dog.create({
      userName: req.body.userName,
      dogName: req.body.DogName,
      breed: req.body.Breed,
      gender: req.body.Gender,
      age: req.body.Age,
      weight: req.body.Weight
    }).then(function(dbdog) {
      res.json(dbdog);
    });
  });

// update dog name

  app.put("/api/Dog/:DogName", function (req, res) {
    db.Dog.update(
      {
        dogName: req.body.DogName,
        breed: req.body.Breed,
        gender: req.body.Gender,
        age: req.body.Age,
        weight: req.body.Weight
      },
      {where: { dogName: req.params.dogName
      }})
    .then(function(result) {
      res.json({
        dogName: req.body.DogName,
        breed: req.body.Breed,
        gender: req.body.Gender,
        age: req.body.Age,
        weight: req.body.Weight
      })
    });
  });

  app.get("/api/Dog/:breed", function(req, res) {
    db.Dog.findAll({
      where: {
        breed: req.params.Breed
      }
    }).then(function(result) {
      res.json({
        id: result.id,
        userName: result.UserName,
        dogName: result.dogName,
        breed: result.Breed,
        gender: result.Gender,
        age : result.Age,
        weight: result.Weight
      });
    });
  });


  app.get("/api/Dog/:gender", function(req, res) {
    db.Dog.findOne({
      where: {
        gender: req.params.gender
      }
    }).then(function(result) {
      res.json({
        id: result.id,
        userName: result.UserName,
        dogName: result.dogName,
        breed: result.Breed,
        gender: result.Gender,
        age : result.Age,
        weight: result.Weight
      });
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
