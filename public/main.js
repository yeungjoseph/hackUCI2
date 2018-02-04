var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');




form.onsubmit = function(event) {
    // override default behavior
    event.preventDefault();

 

    var files = fileSelect.files;

    var file = files[0];
    console.log("name: " + file.name);
    console.log("size: " + file.size);



    var fileReader = new FileReader();
    fileReader.addEventListener("load", function() {
        xhr.send(JSON.stringify({img: fileReader.result}));
    });
    fileReader.readAsDataURL(file);



    // start request
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/', 'true');
    xhr.setRequestHeader("Content-type","application/json;charset=UTF-8s");

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("connection open");
        } else {
            alert('An error occurred!');
        }
    }
}
