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

        $('.progress-layer').css('display', 'block');
        $('.progress-layer').css('opacity', '1');

        // AJAX REQUEST GOES HERE
        $.ajax({
            url: '/',
            data: JSON.stringify({img: temp}),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            xhr: function(){
                // get the native XmlHttpRequest object
                var xhr = $.ajaxSettings.xhr() ;
                // set the onprogress event handler
                xhr.upload.onprogress = function(evt){
                    $('.progress-bar .loader').css('width', (evt.loaded/evt.total*100) + '%');
                    console.log('progress', evt.loaded/evt.total*100, '\n');
                };
                return xhr ;
            },

            success: function(response) {
                alert("Upload Successful!");
                $('.progress-bar .loader').css('width','0%');

                $('.progress-layer').css('opacity', '0');
                setTimeout(function(){
                    $('.progress-layer').css('display', 'none');
                }, 1000);

                console.log("upload successful");
                console.log(typeof response);
                console.log(response);
                if (response.name != 'temp')
                {
                    var myCalendar = createCalendar({
                        options: {
                            class: '',

                    },
                        data: {
                            title:  response.name + " expiring soon!",
                            start: new Date(response.date),
                            duration: 60,
                        }
                    });
                }
                else {
                    var myCalendar = createCalendar({
                        options: {
                            class: '',

                        },
                        data: {
                            title:  "Item could not be identified",
                            start: new Date(Date.now()),
                            duration: 60,
                        }
                    });
                }


                document.querySelector('.new-cal').appendChild(myCalendar);


                var anchor = document.querySelector('.icon-google');
                window.open(anchor.href, "_system");

                document.querySelector('.new-cal').removeChild(document.querySelector('.new-cal').firstChild);

                // dump file
                $('#form').trigger("reset");

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

$('#file-select').change(function(){
    $('#upload-button').click();
});

$('#img-camera').click(function() {
    $('#file-select').click();
});
