var form = document.getElementById('file-form');
var fileSelect = document.getElementById('file-select');

// var uploadButton = document.getElementById('upload-button');


form.onsubmit = function(event) {
    // override default behavior
    event.preventDefault();

    // uploadButton.innerHTML = "Uploading...";

    var files = fileSelect.files;

    var file = files[0];
    //console.log("name: " + file.name);
    //console.log("size: " + file.size);

    var formData = new FormData();
    //rest of the code


    var fileReader = new FileReader();
    fileReader.addEventListener("load", function() {
        //console.log(fileReader.result);

        var n = 0;
        n = fileReader.result.search("base64,") + 7;
        // console.log(fileReader.result.substring(0, n));

        // hold the temporary string
        temp = fileReader.result.substring(n, fileReader.result.length);

        //console.log(temp);


        xhr.send(JSON.stringify({img: temp}));
    });
    fileReader.readAsDataURL(file);



    // formData.append("photo", file, file.name);
    // formData.append("testfield", "wow");

    // start request
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/', 'true');
    xhr.setRequestHeader("Content-type","application/json;charset=UTF-8s");


    xhr.onload = function() {
        if (xhr.status === 200) {
            // uploadButton.innerHTML = 'Upload';
            // console.log(formData);
            // console.log("connection open");
            console.log("status 200: " + xhr.status);



            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(typeof(xhr.responseText));
                console.log(xhr.responseText);
            }

            // var xhr_cal = new XMLHttpRequest();

            // xhr_cal.open('GET', '/calendar', 'true');
            // xhr_cal.setRequestHeader("Content-type","text/html;charset=UTF-8s");
            // xhr_cal.send(xhr.responseText);

            // $.get("/calendar", xhr.responseText, function(data, status, xhr_cal) {
            //     console.log("GOT HTML DATA");
            //
            //     console.log(data);
            //     $("html").replaceWith(data);
            // });
            $.ajax({
                url: "/calendar",
                data: JSON.parse(xhr.responseText),
                type: "GET",
                beforeSend: function(xhr_cal) {
                    //console.log(typeof JSON.parse(xhr.responseText));
                    xhr_cal.setRequestHeader("Content-type","application/json;charset=UTF-8s");
                },
                success: function(data, status, xhr_cal) {
                    console.log("GOT HTML DATA");
                    console.log(data);
                },
            });


        } else if (xhr.status === 304) {

        } else {

            // alert('An error occurred!\n status: ' + xhr.status);
            console.log("status: " + xhr.status);
        }
    }
}
