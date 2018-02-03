// var form = document.getElementById('file-form');
// var fileSelect = document.getElementById('file-select');
//
// // var uploadButton = document.getElementById('upload-button');
//
//
// form.onsubmit = function(event) {
//     // override default behavior
//     event.preventDefault();
//
//     // uploadButton.innerHTML = "Uploading...";
//
//     var files = fileSelect.files;
//
//     var file = files[0];
//     // console.log("name: " + file.name);
//     // console.log("size: " + file.size);
//
//     var formData = new FormData();
//     //rest of the code
//
//
//
//     // formData.append('photo', file, file.name);
//     formData.append('testfield', 'wow');
//
//
//     // start request
//     var xhr = new XMLHttpRequest();
//
//     xhr.open('POST', '/', 'true');
//
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             // uploadButton.innerHTML = 'Upload';
//             console.log("connection open");
//         } else {
//             alert('An error occurred!');
//         }
//     }
//
//     xhr.send(formData);
// }
