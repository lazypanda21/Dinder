var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/Login", function(req, res) {
    db.Login.findOne({
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
          userName: result.userName,
          status: result.status
        });
      }
    });
  });
  app.get("/api/Login", function(req, res) {
    db.Login.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  app.get("/api/Jobs", function(req, res) {
    db.Jobs.findAll({}).then(function(result) {
      res.json(result);
    });
  });
  // Create a new example
  app.post("/api/Login/create", function(req, res) {
    db.Login.create({
      userName: req.body.userName,
      password: req.body.password,
      status: req.body.status
    }).then(function(dbLogin) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbLogin);
    });
  });
  app.post("/api/Dog", function(req, res) {
    db.Dog.create({
      userName: req.body.userName,
      name: req.body.name,
      jobTitle: req.body.jobTitle,
      contactInfo: req.body.contactInfo,
      bio: req.body.bio
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
  app.put("/api/Dog/:DogName", function (req, res) {
    db.Dog.update(
      {
        dogName: req.body.dogName,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        weight: req.body.weight
      },
      {where: { dogName: req.params.dogName
      }})
    .then(function(result) {
      res.json({
        dogName: result.dogName,
        breed: result.breed,
        gender: result.gender,
        age: result.age,
        weight: result.weight
      })
    });
  });

  app.get("/api/Dog/:breed", function(req, res) {
    db.Dog.findAll({
      where: {
        Breed: req.params.breed
      }
    }).then(function(result) {
      res.json({
        id: result.id,
        userName: result.userName,
        name: result.name,
        jobTitle: result.jobTitle,
        contactInfo: result.contactInfo,
        bio: result.bio
      });
    });
  });
  app.get("/api/Dog/:gender", function(req, res) {
    db.Employee.findOne({
      where: {
        userName: req.params.userName
      }
    }).then(function(result) {
      res.json({
        id: result.id,
        userName: result.userName,
        name: result.name,
        jobTitle: result.jobTitle,
        contactInfo: result.contactInfo,
        bio: result.bio
      });
    });
  });


  app.post("/api/Rtable", function(req, res) {
    db.Rtable.create({
      idEmployee: req.body.idEmployee,
      idSkills: req.body.idSkills
    }).then(function(dbRtable) {
      res.json(dbRtable);
    });
  });

  app.post("/api/query", function(req, res) {
    var array;
    console.log(req.body);
    array = req.body["skillIds[]"];
    db.Employee.findAll({
      include: [
        {
          model: db.Skills,
          required: true,
          attributes: ["skill"],
          // eslint-disable-next-line camelcase
          through: { where: { idSkills: array } }
        }
      ]
    }).then(function(result) {
      var barray = [];
      for (var i = 0 ; i< result.length; i++){
        if (result[i].Skills.length === array.length){
          barray.push(result[i]);
        }
      }
      res.json(barray);
    });
  });

  app.get("/api/Rtable/:idEmployee", function(req, res) {
    console.log(req.params.idEmployee);
    var carray = []
    db.Rtable.findAll({
       where: { idEmployee: req.params.idEmployee } 
    }).then(function(result) {
      for(var i = 0; i < result.length; i++){
        carray.push(result[i].idSkills)
      }
      res.json(carray);
    });
  });
  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });
  // });
};
