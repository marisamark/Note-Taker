const router = require('express').Router();
// const data = require('../db/journal.json');
const fs = require('fs');

router.get("/notes", function(req, res){

    fs.readFile("db/journal.json", "utf8", function(err, jsonString){
        if(err) throw err;
        const result = JSON.parse(jsonString);

        var journals = {};
        result.forEach(note => {
            if(journals[note.journal]){
                journals[note.journal].notes.push(note)
            } else {
                journals[note.journal] = {
                    notes: [note]
                }
            }
        })
        //console.log(journals)
        // res.json(journals)

//loop through journals object, appear on front-end
        for(var i in journals){
            console.log(journals[i])
        }
    })
})

module.exports = router;



