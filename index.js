var container = document.getElementById("container");
var flexContainer = document.createElement('div');
flexContainer.className = 'form-group cards';

// container.innerHTML = "<h1>Hola Jajaja1</h1>";
var requestURL = window.location.href + '/api/gradiAuthors.json';
console.log(requestURL);
// debugger
axios
    .get(requestURL)
    .then((response) => {
        // debugger
        if (response.data) {
            console.time()
            response.data.forEach(v => {
                console.log(v);
                drawCards(v);
            })
            console.timeEnd()
        }
    })
    .catch((error) => {
        console.log(error);
    });
container.appendChild(flexContainer);

function drawCards(params) {
    var card = document.createElement('div');
    var img = document.createElement('img');
    img.src = params.download_url;
    img.className = 'card card-body col-sm-3';
    // img.style.width = params.width/4+"px";
    // img.style.maxWidth = params.width/8+"px";
    img.style.height = params.height/4+"px";
    // img.style.maxHeight = params.height/8+"px";
    card.className = 'card card-body col-sm-3';
    // card.innerHTML = params.author;
    // card.appendChild(img);
    flexContainer.appendChild(img);

    img.addEventListener("mouseover", event => {
        console.log(params.author);
    });
}