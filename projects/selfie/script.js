navigator.getUserMedia = ( navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);

if (navigator.getUserMedia) {
   navigator.getUserMedia (

      // constraints
      {
         video: true
      },

      // successCallback
      function(localMediaStream) {
         var video = document.querySelector('#videoElement');
         video.src = window.URL.createObjectURL(localMediaStream);
         // Do something with the video here, e.g. video.play()
      },

      // errorCallback
      function(err) {
         console.log("The following error occured: " + err);
      }
   );
} else {
   console.log("getUserMedia not supported");
}

var button = document.getElementById('button');
var buttonClick = function() {
  var video = document.getElementById("videoElement");
  var canvas = document.getElementById("drawCanvas");
  var screenshot = document.getElementById('screenshot');
  var ctx = canvas.getContext("2d");
  var pic = ctx.drawImage(video, 0, 0, 640, 480);
  canvas.toDataURL();
  var image = canvas.toDataURL();
  screenshot.innerHTML = '<img src="' + image + '">' + '<br><button id="imgur">Upload to Imgur</button>';
  var upload = document.getElementById('imgur');
  upload.addEventListener('click', share);
};


function share(){
    var canvas = document.getElementById("drawCanvas");

    try {
        var img = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
    } catch(e) {
        var img = canvas.toDataURL().split(',')[1];
    }
    // open the popup in the click handler so it will not be blocked
    var w = window.open();
    w.document.write('Uploading...');
    // upload to imgur using jquery/CORS
    // https://developer.mozilla.org/En/HTTP_access_control
    $.ajax({
        url: 'https://api.imgur.com/3/upload.json',
        type: 'POST',
        headers: {
            Authorization: 'Client-ID 7476f8da0c8ad80'
        },
        data: {
            type: 'base64',
            name: 'selfie.jpg',
            title: 'Selfie',
            caption: '',
            image: img
        },
        dataType: 'json'
    }).success(function(data) {
        w.location.href = data['data']['link'].replace('.jpg', '');
    }).error(function() {
        alert('Could not reach api.imgur.com. Sorry :(');
        w.close();
    });
}

button.addEventListener('click', buttonClick);
