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
    card.className = 'card card-body col-sm-3';

    var img = document.createElement('img');
    img.src = params.download_url;
    img.className = 'card card-body col-sm-3';
    img.style.height = params.height / 3 + "px";


    var p_mame = document.createElement('p');
    p_mame.className = 'card-author';
    p_mame.innerHTML = params.author;
    p_mame.style.visibility = "hidden";
    
    var p_id = document.createElement('p');
    p_id.className = 'card-id';
    p_id.innerHTML = params.id;
    p_id.style.visibility = "visible";
    // img.style.width = params.width/4+"px";
    // img.style.maxWidth = params.width/8+"px";
    // img.style.maxHeight = params.height/8+"px";


    // var img2 = document.createElement('img');
    // img2.src = 'assets/img/logo-white.png';
    // img2.className = 'card card-body col-sm-3';
    // img2.width = '30px';
    // img2.height = '30px';
    // img2.style.backgroundColor = '#00D664';
    // img2.style.visibility = "hidden"

    card.appendChild(img);
    card.appendChild(p_mame);
    card.appendChild(p_id);
    // card.appendChild(img2);
    flexContainer.appendChild(card);

    card.addEventListener("mouseover", _event => {
        console.log(params.author);
        p_mame.style.visibility = "visible";
        // img2.style.visibility = "visible"
        // img.style.visibility = "hidden"
        card.style.backgroundColor = '#00D664'
    });

    card.addEventListener("mouseout", _event => {

        p_mame.style.visibility = "hidden";
        // card.removeChild(img2);
        // card.appendChild(img);
        // img.style.visibility = "visible"
        // img2.style.visibility = "hidden"
        // card.style.backgroundColor = '#ffffff'
    });
}