var db = require("../models");

module.exports = function(app) {
    app.get("/api/Chat/:id", function(req, res) {
        db.Messages.findAll({

            where: {
                ThreadId: req.params.id 
              }

        }).then(function(req) {
          res.json(req);
        });
      });

      app.post("/api/Chat", function(req, res) {
        db.Messages.create(req.body).then(function(dbdog) {
          res.json(dbdog);
        });
      });
      
      
}