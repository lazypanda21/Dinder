var db = require("../models");

module.exports = function(app) {
  console.log("heyeyyey")
    // retrieve all info about dogs
    app.get("/api/Dog", function(req, res) {
        db.Dog.findAll({attributes:['Breed']}).then(function(req) {
          res.json(req);
        });
      });

// saving a new dog info
    app.post("/api/Dog", function(req, res) {
        db.Dog.create({
          DogName: req.body.DogName,
          Breed: req.body.Breed,
          Gender: req.body.Gender,
          Age: req.body.Age,
          Weight: req.body.Weight,
          Image: req.body.Image,
          OwnerId :req.body.OwnerId,
        }).then(function(dbdog) {
          res.json(dbdog);
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
    db.Dog.findOne({
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
         
          res.json(result);
          // res.json({
          //   id: result.id,
          //   UserName: result.UserName,
          //   DogName: result.dogName,
          //   Breed: result.Breed,
          //   Gender: result.Gender,
          //   Age : result.Age,
          //   Weight: result.Weight,
          //   Image: result.Image,
          // });
        });
      });

    //search for a dog by gender
      app.get("/api/Dog/:Search/:Gender", function(req, res) {
        console.log("heyyyyyyyyyy", req.params.Search,req.params.Gender);
        let conditions = {};
        let search = req.params.Search;
        conditions[search]=req.params.Gender
        db.Dog.findAll({

            where: conditions
          }
        ).then(function(result) {
            res.json(result);
        });
      });

    // search for a dog by weight
      app.get("/api/Dog/:Weight", function(req, res) {
        db.Dog.findAll({
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
