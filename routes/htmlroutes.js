const path = require('path');

//HTML GET requets
//code hangles when users "visit" a page 

module.exports = function(app) {
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"))
// });
}

//add styles.css and index.js



