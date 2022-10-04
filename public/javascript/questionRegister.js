const URL = "http://localhost:8080/admin/question/save";
const form = document.getElementById("form-register");
const answer01 = document.getElementById("answer01");
const answer02 = document.getElementById("answer02");
const answer03 = document.getElementById("answer03");
const answer04 = document.getElementById("answer04");
const imageUrl = document.getElementById("image");
const correct = document.getElementById("correct");
const category = document.getElementById("category");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const config = {
        url: URL,
        method: "post",
        data: {
            imageUrl: imageUrl.value,
            answer01: answer01.value,
            answer02: answer02.value,
            answer03: answer03.value,
            answer04: answer04.value,
            correct: correct.value,
            category: category.value
        }
    }
    const status = axios(config).then((response) => {
        if (response.status === 200) {
            // cleaning form filds
            imageUrl.value = "";
            answer01.value = "";
            answer02.value = "";
            answer03.value = "";
            answer04.value = "";
            correct.value = "";
            category.value = "";
            // toastr
            Command: toastr["success"]("registered with success!!", "Registered!")

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": true,
                "onclick": null,
                "showDuration": "1000",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        }
        else {
            // cleaning form filds
            imageUrl.value = "";
            answer01.value = "";
            answer02.value = "";
            answer03.value = "";
            answer04.value = "";
            correct.value = "";
            category.value = "";
            // toastr
            Command: toastr["error"]("Try again", "[!!!]ERROR")

            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
        }
    }

    );




});


