const path = require('path');

//HTML GET requets
//code hangles when users "visit" a page 

module.exports = function(app) {
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

app.get("/styles", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
  });
}

//add styles.css and index.js



