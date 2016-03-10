/*
window.addEventListener("load",start);//carrega o script ao carregar toda pagina html
//removeEventListener("load", start)//remove o evento
var test, pai;


//var evt = new event();
//window.dispatchEvent(evt);


function start(){
	//alert("teste");
	//alert(document.getElementById("teste").textContent);
	teste = document.querySelector("div#teste");//retorna um elemento de lista
	pai = document.querySelector("div#pai");
	pai.addEventListener("click", powerUp);
	teste.addEventListener("click", powerUp);
}

function powerUp(e){
	//console.log(e);
	//console.log(this);
	console.log(e.target);
	//removeEventListener("click", start);
	//pai.removeEventListener("click", powerUp);
}
*/

var categorias = [
	"goku","vegetta","pam","gohan","trunks"
];



window.addEventListener("load", start);
function start(){
	window.addEventListener("click", gerar);
}
function gerar(e){
	var s = document.createElement("div");
	s.classList.add("sayajim");
	var cat = ~~(Math.random() * categorias.length);
	console.log(cat);
	s.classList.add(categorias[cat]);
	s.style.left = e.x+"px";
	s.style.top = e.y+"px";
	document.body.appendChild(s);
	
}

