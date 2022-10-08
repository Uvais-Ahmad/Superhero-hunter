
let url = 'https://www.superheroapi.com/api.php/1168930280669000';
// let url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=75da5900d36656655728f58059e814bd&hash=390c28a97938c35c2bdaf0950a5cf962'

// $(document).ready(fetchDataAsync)

for(let id=1 ; id<40 ; id++){
	fetchDataAsync(id);
}


async function fetchDataAsync(id){
	
	await $.ajax({
		type : 'get',
		url : `${url}/${id}`,
		success : function(data ){
			console.log('Data : ',data);
			console.log('Full Name :',data.biography)
		
			let item = `<div class="card item h-50 m-4 hero" style="width: 13rem;">
							<img src=${data.image.url} class="card-img-top thumbnail" alt="...">
							<div class="card-body">
								<h5 class="card-title text-center"><a class="text-decoration-none" href=assets/showDetails.html?id=${data.id}>${data.name}</a></h5>							    
							</div>
						</div>`
	// <p class="card-text">Actor : ${data['biography']['full-name']}</p>
// <a href="#" class="btn btn-primary">Fav/Unfav</a>
			$('.container').append(item);
		},
		error : function(err){
			console.log('Error : ',err);
		}
	})
}
