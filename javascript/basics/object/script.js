var movies = [{
  title: "復仇者聯盟4",
  hasWatched: false,
  rating: 4.5
},
{
  title: "星際大戰",
  hasWatched: true,
  rating: 3.5
},
{
  title: "蜘蛛人3",
  hasWatched: true,
  rating: 4.0
}]

movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result+= "wathced ";
  }
  else{
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" " + "\- " + movie.rating + "stars";
  console.log(result); 
})