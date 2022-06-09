async function movie(){
    const url="https://imdb-api.com/API/AdvancedSearch/k_3id6z7vw?title_type=feature&user_rating=8.0,10&release_date=2020-01-01,2022-01-01&genres=action&countries=in&languages=te"
        const response=await fetch(url);
    var data = await response.json();
    console.log(data);
    var table='<table id="mytable" border="1" cell padding="2">';
    table+='<tr><th>Name</th><th>Rating</th><th>Stars</th><th>Plot</th></tr>';
    let{results}=data;
    results.forEach(element =>{
        let{title,imDbRating, stars,plot}=element;
        table+='<tr>';
        table+='<td>'+title+'</td>';
        table+='<td>'+imDbRating+'</td>';
        table+='<td>'+stars+'</td>';
        table+='<td>'+plot+'</td>';
        table+='</tr>';
    })
    table+='</table>';
    document.getElementById("result").innerHTML=table; 
}