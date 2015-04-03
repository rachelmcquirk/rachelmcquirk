var note = document.getElementById("note");
var button = document.getElementById("button");
note.value = localStorage.getItem("key");

var store = function() {
  localStorage.setItem("key", note.value);
  alert("Your entry has been saved! :D");
};

button.addEventListener("click", store);
