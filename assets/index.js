
let url = 'https://www.superheroapi.com/api.php/1168930280669000';
let container = document.querySelector('.container');

for(let id=1 ; id<40 ; id++){
	fetchDataAsync(id);
}


async function fetchDataAsync(id){

	await fetch(`${url}/${id}`)
	.then(res => res.json())
	.then( (data) => {
		console.log("This is Data Comes using fetch : ",data);

		let item = `<div class="card item h-50 m-4 hero" style="width: 13rem;">
						<img src=${data.image.url} class="card-img-top thumbnail" alt="...">
						<div class="card-body">
							<h5 class="card-title text-center"><a class="text-decoration-none" href=assets/showDetails.html?id=${data.id}>${data.name}</a></h5>							    
						</div>
					</div>`
			// container.appendChild(item);
			container.innerHTML += item
		})
	.catch(error => console.error('Error while fetching req : ',error))

}

	//This is JQuery Code i removed it with vanilla JS

	// await $.ajax({
	// 	type : 'get',
	// 	url : `${url}/${id}`,
	// 	success : function(data ){
	// 		// console.log('Data : ',data);
	// 		// console.log('Full Name :',data.biography)
		
	// 		let item = `<div class="card item h-50 m-4 hero" style="width: 13rem;">
	// 						<img src=${data.image.url} class="card-img-top thumbnail" alt="...">
	// 						<div class="card-body">
	// 							<h5 class="card-title text-center"><a class="text-decoration-none" href=assets/showDetails.html?id=${data.id}>${data.name}</a></h5>							    
	// 						</div>
	// 					</div>`
	// 		$('.container').append(item);
	// 	},
	// 	error : function(err){
	// 		console.log('Error : ',err);
	// 	}
	// })