
let url = 'https://www.superheroapi.com/api.php/1168930280669000';
let container = document.querySelector('.container');

fetchAndLoadListner();

//FeTCH all data and then it load Event Listner on all Favourite btn
async function fetchAndLoadListner(){
	for(let id=1 ; id<40 ; id++){
		await fetchDataAsync(id);
	}
	let favBtn = document.getElementsByClassName('fav-btn')
	
	//apply eventListner on Each Favicon
	for(f of favBtn){
		console.log('This is Fav',f)
		await f.addEventListener('click',addToFavourite);
	}
}



//Fech single Data using the ID
async function fetchDataAsync(id){

	await fetch(`${url}/${id}`)
	.then(res => res.json())
	.then( (data) => {
		console.log("This is Data Comes using fetch : ",data);

		let item = `<div class="card item h-50 m-4 hero" style="width: 13rem;">
						<img src=${data.image.url} class="card-img-top thumbnail" alt="...">
						<div class="card-body d-flex flex-row justify-content-around">
							<h5 class="card-title text-center"><a class="text-decoration-none" href=assets/showDetails.html?id=${data.id}>${data.name}</a></h5>							    
							<div class="fav-btn" >
								<img class="favImg" id="${data.id}"  src="assets/images/unFav.png" alt="Unfav" >
							</div>
						</div>
					</div>`
			
			container.innerHTML += item

			
		})
	.catch(error => console.error('Error while fetching req : ',error))
			
	
}

//To adding in the favourite
async function addToFavourite(e){
	
	await e.target.parentElement.removeEventListener('click',addToFavourite);
	e.target.src="assets/images/fav.png"
	e.target.alt="favourite"
	await e.target.parentElement.addEventListener('click',removeFromFavourite)
}

// to removing from the favourite
async function removeFromFavourite(e){
	
	await e.target.parentElement.removeEventListener('click',removeFromFavourite);
	e.target.src="assets/images/unFav.png"
	e.target.alt="Unfav"
	await e.target.parentElement.addEventListener('click',addToFavourite)
}
