
//Grab a reference to the header tag in the HTML file
const header = document.querySelector('header');

//Grad a reference to the section tag in the HTML file
const section = document.querySelector('section');

//define variable requestURL
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//Define request variable as a new XMLHttp request
let request = new XMLHttpRequest();

//Open the variable request with parameters GET (the method of data retrieval) and requestURL (the location of the data)
request.open('GET', requestURL);

//Define that the new XMLHttp request will retrieve data in JSON format.
//Send the request to retrieve the data.
request.responseType = 'json';
request.send();

//define the function onLoad while calling it on variable request.
//define superHeroes as the response to request
//call functions populateHeader and showHeroes on variable superHeroes.
request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}


function populateHeader(jsonObj) {
  //create a h1 HTML element
  const myH1 = document.createElement('h1');
  //Set the text value to superhero squad 
  //by grabbing the json object value that corresponds to squadName
  myH1.textContent = jsonObj['squadName'];
  //add myH1 to the header
  header.appendChild(myH1);
  
  //create a p element
  const myPara = document.createElement('p');
  
  //set the value of myPara to display the hometown and data formed of the relevant object.
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  
  //Add myPara to the HTML file.
  header.appendChild(myPara);
}
  
  
