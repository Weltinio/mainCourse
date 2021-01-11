var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var respo = this.response;
    var respoParse = JSON.parse(respo)
    var list = document.querySelector('#demo')
    var img = document.createElement('img')
    img.setAttribute('src', respoParse.avatar_url)
    list.appendChild(img);
    }
};

xhttp.open("GET", "https://api.github.com/users/Weltinio", true);

xhttp.send();