let favTab = document.querySelector('#favTab');
let home = document.querySelector('#homeTab');
// let url = 'https://www.superheroapi.com/api.php/1168930280669000';
let main = document.querySelector('.container');

favTab.addEventListener('click',handlerFav);
home.addEventListener('click',handlerHome);

async function handlerFav(e){
	await favTab.classList.add('active');
	await home.classList.remove('active');
	console.log("favTab : ",favTab)

	let favIdList = await getFavId();

	await removeAllChildNodes(container);
	for(id of favIdList){
		fetchDataAsync(id)
	}

	
}

function handlerHome(e){
	home.classList.add('active');
	favTab.classList.remove('active');
	console.log("home : ",home)
	window.location.reload();
}



//GET all superhero id from localstorage
function getFavId(){
	let fav;
	let value = localStorage.getItem('favorites');
	if(value === null){
		fav = [];
	}else{
		//making string to array
		fav = value.split(",");
	}
	return fav;
}


//Fech single Data using the ID
async function fetchDataAsync(id){

	await fetch(`https://www.superheroapi.com/api.php/1168930280669000/${id}`)
	.then(res => res.json())
	.then( (data) => {

		let item = `<div class="card item h-50 m-4 hero" style="width: 13rem;">
						<img src=${data.image.url} class="card-img-top thumbnail" alt="...">
						<div class="card-body d-flex flex-row justify-content-around">
							<h5 class="card-title text-center"><a class="text-decoration-none" href=assets/showDetails.html?id=${data.id}>${data.name}</a></h5>							    
							<div class="fav-btn" >
								<img class="favImg" id="${data.id}"  src="assets/images/unFav.png" alt="Unfav" >
							</div>
						</div>
					</div>`
			
			main.innerHTML += item

			
		})
	.catch(error => console.error('Error while fetching req : ',error))	
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}