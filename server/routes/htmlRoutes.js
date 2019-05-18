var path = require("path");

// module.exports = function(app) {
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });
//   app.get("/dinder", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/dinder.html"));
//   });


//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/login.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/author-manager.html"));
  });

app.get("/chat", function(req, res) {
  res.sendFile(path.join(__dirname, "../../public/chat.html"));
});
};
