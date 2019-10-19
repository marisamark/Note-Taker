var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $(".save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea

var activeNote = {
  noteTitle: $("#notetitle").val().trim(),
  noteConent: $("#notecontent").val().trim(),
};


// A function for getting all notes from the db
var getNotes = function() {
  
};

// A function for saving a note to the db
var saveNote = function(note) {
  
};

// A function for deleting a note from the db
var deleteNote = function(title) {
  
};

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function() {
  
};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
  
};

// Delete the clicked note
var handleNoteDelete = function(event) {
  
};

// Sets the activeNote and displays it
var handleNoteView = function() {
  
};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function() {
  
};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  
};

// Render's the list of note titles
var renderNoteList = function(notes) {
  $.get("INSERT API FOR NOTES HERE", function (data) {
    console.log('hello')
  for (let i = 0; i < data.length; i++) {
    console.log(data);
    let card = $('<div').addClass('card m-3');
    let cardheader = $('<div>').addClass('card-header');
    let cardbody = $('<div>').addClass('card-body');
    let notedisplay = $('<p>').text(data[i].noteTitle);
    cardbody.append(cardheader);
    cardheader.text(notedisplay)
    card.append(cardheader, cardbody);
    $('#allNotes').append(card);
    // const allNotes = $("#allNotes");
    // const journalArr = [];
  }   
}
)};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
  $.get('/api/notes')
    .then(function(data){
    })
};


$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();