
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
  

function showHeroes(jsonObj) {
  
  //define variable heroes equal to the array that contains the members.
  const heroes = jsonObj['members'];
  
  //Loop through the heroes object array.
  //Add the info of each hero, one at a time.
  for(let i = 0; i < heroes.length; i++) {
    
    //We must create the HTML objects so they appear in the HTML file.
    //Create HTML element article.  This element will hold all of the hero's info.
    const myArticle = document.createElement('article');
    
    //Create an h2 heading for the hero's name
    const myH2 = document.createElement('h2');
    
    //Create a paragraph for the hero's secret identity, age, and superpowers.
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    
    //Create an unordered list to contain hero's superpowers, because there are multiple for each hero.
    const myList = document.createElement('ul');
    
    //Grab the hero's name, secret id, age, and superpowers, and populate the relevant HTML elements with them.
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers: ';
    
    // Grab the array that contains the hero's superpowers
    const superPowers = heroes[i].powers;
    
    //Loop through the array containing powers, grabbing each power and adding it to myList.
    for (let j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
    
    // Add the HTML objects in the order that they will appear in HTML article
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
    
    //Add myArticle to the HTML file.
    section.appendChild(myArticle);
  }
}
    

  
