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
                console.log(typeof response);
                console.log(response);



                var myCalendar = createCalendar({
                    options: {
                        class: '',

                    },
                    data: {
                        title: "Expiration: " + response.name,
                        start: new Date(response.date),
                        duration: 60,
                    }
                });

                document.querySelector('.new-cal').appendChild(myCalendar);


                var anchor = document.querySelector('.icon-google');
                window.open(anchor.href);

                // console.log(document.querySelector('.icon-google').href);
                // console.log($('.icon-google').length);
                // $('.icon-google').attr('id', 'test');
                // $('#test').click();
            }

        });
        console.log("request sent");
    });
    fileReader.readAsDataURL(file);

}


button.onclick = upload;
