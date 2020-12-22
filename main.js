let searchInput = document.getElementById('NmrInput');
searchInput.addEventListener('input', updateValue);
let apiData = { 
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon' ,
  id: searchInput && searchInput.value ? searchInput.value : '1',
};

let {url, type, id} = apiData;
let apiUrl = function() {
    return `${apiData.url}${apiData.type}/${apiData.id}`;
}

let button = document.getElementById('searchbtn');
let onclick = button.onclick;
onclick();


function updateValue(value) {
  		apiData.id = value.target.value;
	} ;


let generateHtml = (data) => {
	
	let html = 
	`<div class="name">${data.name}</div>
	<img src=${data.sprites.front_default}>
	<div class="details">
		<span class="stat">Height: ${data.height}</span>
		<span class="stat">Weight: ${data.weight}</span>
	</div>
	`

	let pokemonDiv = document.querySelector('.pokemon');
	pokemonDiv.innerHTML = html; 

	
	
}

function sendRequest (){
    fetch (apiUrl())
        .then( (data) => data.json())
        .then( (pokemon) => generateHtml(pokemon) );
}
