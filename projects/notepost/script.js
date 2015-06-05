var myDataRef = new Firebase('https://note-post.firebaseIO.com');

var note = document.getElementById("note");
var button = document.getElementById("button");
var content = document.querySelectorAll('.content');
var noteArray = [];

myDataRef.on("value", function(snapshot) {
  noteArray = snapshot.val() || [];
  console.log(noteArray);
  for (var i = 0; i < noteArray.length; i++)
    content[i].innerHTML = snapshot.val()[i];
});

var store = function() {
  noteArray.unshift(note.value);
  if (noteArray.length === 4)
    noteArray.pop();
  myDataRef.set(noteArray);
  console.log(noteArray);
};

button.addEventListener("click", store);
