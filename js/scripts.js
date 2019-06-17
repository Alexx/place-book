// constructor to keep all the placesBeen (like our address book)
function PlacesBeen() {
  //an array to store the place
  this.places = []
}

//pushes place to placesBeen array
PlacesBeen.prototype.addPlace = function(place) {
  this.places.push(place);
}

// constructor for the place
function Place(city, state, date, landmark) {
  // city
  this.city = city;
  // state
  this.state = state;
  // date
  this.date = date;
  // landmark
  this.landmark = landmark;
}


// get user input/hardcoded input
var place1 = new Place("Slapout", "Oklahoma", "11/17/2011", "world's biggest pair of underwear");
var place2 = new Place("Maui", "Hawaii", "12/03/2012", "lava beach");
var place3 = new Place("Hell", "Grand Cayman", "8/20/15", "lime stone");
var place4 = new Place("Klamath", "Oregon", "5/23/2010", "Crater Lake");


//display the name of the place - city
function displayPlaces(locationsBeen) {
  for (var i = 0; i < locationsBeen.places.length; i++) {
    var thing = locationsBeen.places[i].city;
    console.log(thing);
    $("#cities").append("<li value=" + i+ ">" + locationsBeen.places[i].city  + "</li><ul></ul>");
  }
}

//when user clicks on the name it shows all info
function showInfo(placeHolder) {
  console.log(locationsBeen.places[placeHolder]);
  //$("ul li ul:nth-child(0)").append("<li>" + locationsBeen.places[placeHolder].city + "</li>")
  $("li:nth-child(" + placeHolder + 1 + ")").text("<li>" + "city" + "</li>")
}

//creates a new instance of PlacesBeen to store all the places
var locationsBeen = new PlacesBeen();

//adds a single place to our locations been array
locationsBeen.addPlace(place1);
locationsBeen.addPlace(place2);
locationsBeen.addPlace(place3);
locationsBeen.addPlace(place4);




$(document).ready(function() {

  displayPlaces(locationsBeen);

  $("li").click(function() {
    var placeHolder = (this).value;
    showInfo(placeHolder);
  })

});
