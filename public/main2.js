var fileSelect = document.getElementById('file-select');
var button = document.getElementById('upload-button');


function upload() {
    file = fileSelect.files[0];

    console.log("got the file");

    var fileReader = new FileReader();
    fileReader.addEventListener("load", function() {
        var n = 0;
        n = fileReader.result.search("base64,") + 7;

        temp = fileReader.result.substring(n, fileReader.result.length);
        console.log("base64 retrieved");

        // AJAX REQUEST GOES HERE

        $.ajax({
            url: '/',
            data: JSON.stringify({img: temp}),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                console.log(response);
            }
        });

        console.log("request sent");
    });
    fileReader.readAsDataURL(file);

}


button.onclick = upload;
