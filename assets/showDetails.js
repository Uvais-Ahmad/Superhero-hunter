$(document).ready(findData);

async function findData(){
	const urlParams = await new URLSearchParams(window.location.search);
	console.log("This is Url params",urlParams.get('id'))
	let id = await parseInt(urlParams.get('id'),10);

	await fetchDataAsync(id);
}

async function fetchDataAsync(id){
	
	await $.ajax({
		type : 'get',
		url : `https://www.superheroapi.com/api.php/1168930280669000/${id}`,
		success : function(data ){
					console.log('Data : ',data);
					let item = `<div class="left">
									<img src="${data['image']['url']}">
								</div>
								<div class="right">
									<h1 class="text-white heading">${data.name}<h1>
									<p>full name : ${data['biography']['full-name']}</p>
									<p>Combat : ${data['powerstats']['combat']}</p>
									<p>Intelligence :  ${data['powerstats']['intelligence']}</p>
									<p>Strength : ${data['powerstats']['strength']}</p>
									<p>Occupation : ${data['work']['occupation']}</p>
								</div>`
					$('main').append(item);


		},error : function(err){
			console.log('Error Occur : ',err)
		}

	})
}

				
		
