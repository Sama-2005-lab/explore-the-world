var cities = [
  {
    city: "Paris",
    country: "FRANCE",
    description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
    continent: "Europe",
    food: "Croissant, Macarons",
    place: "Eiffel Tower",
    language: "French",
    image: "images/paris.jpg"
  },
  {
    city: "Tokyo",
    country: "JAPAN",
    description: "Tokyo blends futuristic skyscrapers with ancient temples.",
    continent: "Asia",
    food: "Sushi, Ramen",
    place: "Shibuya Crossing",
    language: "Japanese",
    image: "images/tokyo.jpg"
  },
  {
    city: "Rome",
    country: "ITALY",
    description: "Rome is a living museum full of ancient ruins and great food.",
    continent: "Europe",
    food: "Pizza, Pasta",
    place: "Trevi Fountain",
    language: "Italian",
    image: "images/rome.jpg"
  },
  {
    city: "Cairo",
    country: "EGYPT",
    description: "Cairo is a vibrant city on the Nile, close to the pyramids.",
    continent: "Africa",
    food: "Koshari, Falafel",
    place: "Pyramids of Giza",
    language: "Arabic",
    image: "images/cairo.jpg"
  }
];

var index = 0;

function showCity() {
  var c = cities[index];

  document.getElementById("counter").textContent = (index + 1) + " / " + cities.length;
  document.getElementById("country").textContent = c.country;
  document.getElementById("city").textContent = c.city;
  document.getElementById("description").textContent = c.description;
  document.getElementById("continent").textContent = c.continent;
  document.getElementById("food").textContent = c.food;
  document.getElementById("place").textContent = c.place;
  document.getElementById("language").textContent = c.language;
  document.getElementById("cityImage").src = c.image;
}

function next() {
  index = index + 1;
  if (index == cities.length) {
    index = 0;
  }
  showCity();
}

function previous() {
  index = index - 1;
  if (index < 0) {
    index = cities.length - 1;
  }
  showCity();
}

showCity();
