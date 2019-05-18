var db = require("../models");

module.exports = function(app) {
    // retrieve all info about dogs
    app.get("/api/Dog", function(req, res) {
      var query = {};
      if (req.query.owner_id) {
        query.OwnerId = req.query.owner_id;
      }
      
      db.Dog.findAll({
        where: query,
        include: [db.Owner]
      }).then(function (dbDog) {
        res.json(dbDog);
      });
    });

// saving a new dog info
    app.post("/api/Dog", function(req, res) {
      
      db.Dog.create(req.body).then(function (dbPost) {
        res.json(dbPost);
      });
    });

  app.get("/api/Dog/:id", function (req, res) {
    
    db.Dog.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Owner]
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  app.put("/api/Dog", function (req, res) {
    db.Dog.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbPost) {
        res.json(dbPost);
      });
  });


 // update dog info
    app.put("/api/Dog/:DogName", function (req, res) {
        db.Dog.update(
        {
            DogName: req.body.DogName,
            Breed: req.body.Breed,
            Gender: req.body.Gender,
            Age: req.body.Age,
            Weight: req.body.Weight,
            Image: req.body.Image,
        },
        {where: { DogName: req.params.DogName
        }})
        .then(function(result) {
        res.json({result});
        });
    });

// retrieve a specific dog
    app.get("/api/Dog/:DogName", function(req, res) {
    db.Post.findOne({
      where: {
        DogName: req.params.DogName
      },
      include: [db.Owner]
    }).then(function(dbdog) {
      res.json(dbdog);
    });
  });

    // search for a dog by breed, height,age
    app.get("/api/Dog/:Breed", function(req, res) {
        db.Dog.findAll({
          where: {
            Breed: req.params.Breed
          }
        }).then(function(result) {
          res.json({
            id: result.id,
            UserName: result.UserName,
            DogName: result.dogName,
            Breed: result.Breed,
            Gender: result.Gender,
            Age : result.Age,
            Weight: result.Weight,
            Image: result.Image,
          });
        });
      });

    //search for a dog by gender
      app.get("/api/Dog/:Gender", function(req, res) {
        db.Dog.findOne({
          where: {
            Gender: req.params.Gender
          }
        }).then(function(result) {
            res.json({
                id: result.id,
                UserName: result.UserName,
                DogName: result.dogName,
                Breed: result.Breed,
                Gender: result.Gender,
                Age : result.Age,
                Weight: result.Weight,
                Image: result.Image,
              });
        });
      });

    // search for a dog by weight
      app.get("/api/Dog/:Weight", function(req, res) {
        db.Dog.findOne({
          where: {
            Weight: req.params.Weight
          }
        }).then(function(result) {
            res.json({
                id: result.id,
                UserName: result.UserName,
                DogName: result.dogName,
                Breed: result.Breed,
                Gender: result.Gender,
                Age : result.Age,
                Weight: result.Weight,
                Image: result.Image,
              });
        });
      });

      // search for dog by age
      app.get("/api/Dog/:Age", function(req, res) {
        db.Dog.findAll({
          where: {
            Age: req.params.Age
          }
        }).then(function(result) {
          res.json({
            id: result.id,
            UserName: result.UserName,
            DogName: result.dogName,
            Breed: result.Breed,
            Gender: result.Gender,
            Age : result.Age,
            Weight: result.Weight,
            Image: result.Image,
          });
        });
      });
};
