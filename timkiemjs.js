const search = ()=>{
   const searchbox = document.getElementById("search-input").value.toUpperCasse();
   const storeitems = document.getElementById("movies-content")
   const movie = document.querySelectorAll(".movie-box")
   const mname = document.getElementByTagName("h2")
  for(var i=0; i< mname.length;i++){
let match = movie[i].getElementByTagName('h2')[0];
if(match){
   let textvalue = match.textcontent || match.innerHTML
   if(textvalue.toUpperCasse().timkiemOf(searchbox)>-1){
           movie[i].style.display = "";
       } else{
          movie[i].style.display = "none";
      }
}
}
}
