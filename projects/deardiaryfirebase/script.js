var myDataRef = new Firebase('https://luminous-fire-6347.firebaseio.com');

var note = document.getElementById("note");
var button = document.getElementById("button");

myDataRef.on("value", function(snapshot) {
  note.value = snapshot.val();
});

var store = function() {
  myDataRef.set(note.value);
  alert("Your entry has been saved! :D");
};

button.addEventListener("click", store);

/* Anonymous login with Firebase
var userId;

// this doesn't get called until our userId is set (we call userIdReady when it's set further below)
var userIdReady = function() {
  // initialize to an empty object, this will get set to the global data object as soon as firebase gets it back to us
  var data = {};

  myDataRef.on("value", function(snapshot) {
    // set data to the global data object from firebase
    data = snapshot.val();
    // update the textarea to show the data contents the user id has. only set it if there is data (otherwise it will say 'undefined')
    // userId was set globally before userIdReady was called
    if(data[userId])
      note.value = data[userId];
  });

  button.addEventListener('click', function() {
    // update our local data object to have a new value for our userId
    data[userId] = document.getElementById('note').value;
    // tell firebase to update their global data object to be what our local data object is
    myDataRef.set(data);
  });
};

// check if the user's unique id is stored locally
if(localStorage.userId) {
  userId = localStorage.userId;
  // userId is set, so we can call the rest of our code
  // this wouldn't be necessary if the code in our if statement was also synchronous
  // however, the authAnonymously call is asynchronous, so we don't know if userId is set
  userIdReady();
}
else {
  // login with firebase
  // we're passing firebase a function that it can call when it's ready to (ie when it has retrieved our user account)
  // when it calls the function we pass, it passes in two arguments: error and authData. error is a string of what went
  // wrong if something went wrong. authData is an object with info like the user id
  myDataRef.authAnonymously(function(error, authData) {
    if (error)
      console.log("Login Failed!", error);

    console.log("Authenticated successfully with payload:", authData);
    userId = authData.uid;
    // if we don't do this, every time we call myDataRef.authAnonymously it will return a different user id
    localStorage.userId = userId;
    // now that userId is set (it was set asynchronously), we can call the rest of our code
    userIdReady();
  });
}
*/
