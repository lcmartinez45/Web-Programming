 <!----------------------
 Name: Lillian Martinez
 Coding Final
 Purpose: This is my recipe page. id="getrecipe"
 ---------------------->
 <br>
<div class="jumbotron">
<legend>Search for a Recipe!</legend>
<div class="form-group">
<div class="toast-header">
  <input type="text" class="form-control" placeholder="enter ingredient here" id="search">
</div>
</div>
<button onclick="getrecipe(document.getElementById('search').value)" type="submit" class="btn btn-primary">Submit</button>
</div>
<div><p class="lead"  id="output"></p></div>
<a href="" id="sourceLink"></a>
