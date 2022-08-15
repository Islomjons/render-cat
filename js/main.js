let elImge = document.querySelector(".image");
let elBtn = document.querySelector(".btn");

elBtn.addEventListener("click", function(event) {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(function(response){
            return response.json()
        }).then(function(data) {
            elImge.src = data[0].url
        })
})