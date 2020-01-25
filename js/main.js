var content = document.querySelector(".content");
var page = 1;

var people = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://swapi.co/api/people?page=" + page, true);
    xhttp.responseType = 'json';
    xhttp.onload = function () {
        let status = xhttp.status;
        if (status == 200) {
            for (let hero of xhttp.response.results) {
                content.innerHTML += `<p> ${hero.name} </p>`
            };
        };
    };
    xhttp.send();
};
people();

var loadMore = function() {
    page++;
    people();
};
