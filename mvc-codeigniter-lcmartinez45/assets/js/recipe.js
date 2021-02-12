/*
Name: Lillian Martinez
Final Project recipe.js
Purpose: Validation js for recipe.
*/
"use strict";

function getsource(id){
    $.ajax({
	    url: 'https://api.spoonacular.com/recipes/'+id+'/information?apiKey=d85099230f9346bc9bc08fec3dc03f62',
		success: function(res){
		document.getElementById('sourceLink').innerHTML=res.sourceUrl
				document.getElementById('sourceLink').href=res.sourceUrl
		}
	});
}

function getrecipe(q){
    $.ajax({
        url: 'https://api.spoonacular.com/recipes/search?apiKey=d85099230f9346bc9bc08fec3dc03f62&number=1&query='+q,
        success: function(res){
            document.getElementById('output').innerHTML=""+res.results[0].title+"<br><img src='"+res.baseUri+res.results[0].image+"'' <br><br>Ready in "+res.results[0].readyInMinutes+' minutes.'
            getsource(res.results[0].id)
        }
    });
}

