//creating button variable
const noun1 = document.querySelector("#noun1")
const noun2 = document.querySelector("#noun2");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const setting = document.querySelector("#setting");
const viewSentence = document.querySelector("#viewSentence");
const randomSentence = document.querySelector("#randomSentence");
const resetbutton = document.querySelector("#resetbutton");

//variables for text contents
let selectedNoun1 = document.querySelector("#selectedNoun1");
let selectedNoun2 = document.querySelector("#selectedNoun2");
let selectedVerb = document.querySelector("#selectedVerb");
let selectedAdjective = document.querySelector("#selectedAdjective");
let selectedSetting = document.querySelector("#selectedSetting");

//variable to display generated story
let displaySentence = document.querySelector("#displaySentence");
let randomSentenceStory = document.querySelector("#displaySentence");

//arrays
//noun1
const nArray1 = ['Wizard', 'Cyborg', 'Vampire', 'Fairy','Elf','Mermaid', 'Superhero', 'Time traveler','Shape-shifter', 'Ghost'];
//noun2
const nArray2 = ['Chair', 'Ocean', 'Guitar', 'Mountain','Sunglasses','Pillow', 'Candle', 'Bicycle','Elephant', 'Newspaper'];
//verb
const vArray = ['whispered to', 'laughed to', 'swim with', 'fly with','climbed a','sang with', 'run to', 'danced with'];
//adjective
const aArray = ['a gorgeous', 'a spicy', 'a mysterious', 'a silky','a sparkling','a gigantic', 'a breezy', 'a glowing','a fluffy', 'a rustic'];
//setting
const sArray = ['in abandoned castle', 'in a tropical beach', 'in a futuristic city', 'in the snowy mountain peak','in a haunted mansion','in the deep space', 'in a enchanted garden', 'in the ancient temple','in a deserted island', 'in a magical forest'];

//function to display next array of noun1
let firstI = 0;
function nextNoun1() {
    const nArrayOne = nArray1[firstI];
    firstI++;
    if (firstI === nArray1.length) {
      firstI = 0;
    }
    return nArrayOne;
  }

  noun1.addEventListener('click', function() {
    selectedNoun1.textContent = nextNoun1();
  });

//function to display next array of noun2
let secondI = 0;
function nextNoun2() {
    const nArrayTwo = nArray2[secondI];
    secondI++;
    if (secondI === nArray2.length) {
      secondI = 0;
    }
    return nArrayTwo;
  }

  noun2.addEventListener('click', function() {
    selectedNoun2.textContent = nextNoun2();
  });

//function to display next array of verb
let thirdI = 0;
function nextVerb() {
    const vArrayOne = vArray[thirdI];
    thirdI++;
    if (thirdI === vArray.length) {
      thirdI = 0;
    }
    return vArrayOne;
  }

  verb.addEventListener('click', function() {
    selectedVerb.textContent = nextVerb();
  });

//function to display next array of adjective
let fourthI = 0;
function nextAdj() {
    const aArrayOne = aArray[fourthI];
    fourthI++;
    if (fourthI === aArray.length) {
      fourthI = 0;
    }
    return aArrayOne;
  }

  adjective.addEventListener('click', function() {
    selectedAdjective.textContent = nextAdj();
  });
  
//function to display next array of setting
let fifthArray = 0;
function nextSetting() {
    const sArrayOne = sArray[firstI];
    firstI++;
    if (firstI === sArray.length) {
      firstI = 0;
    }
    return sArrayOne;
  }

  setting.addEventListener('click', function() {
    selectedSetting.textContent = nextSetting();
  });

//function to display full sentence
function fullSentence(){
  displaySentence.textContent = `${selectedNoun1.textContent} ${selectedVerb.textContent} ${selectedAdjective.textContent} ${selectedNoun2.textContent} ${selectedSetting.textContent} `;
  }

viewSentence.addEventListener('click', fullSentence);

//function to create random sentence
function randomSentenceFunction(){
//generating random noun
const randomNoun1 = Math.floor(Math.random() * nArray1.length);
const randomNounOne = nArray1[randomNoun1];

//generating random verb
const randomVerb = Math.floor(Math.random() * vArray.length);
const randomVerbOne = vArray[randomVerb];

//generating random adjective
const randomAdj = Math.floor(Math.random() * nArray1.length);
const randomAdjOne = aArray[randomAdj];

//generating random noun
const randomNoun2 = Math.floor(Math.random() * nArray1.length);
const randomNounTwo = nArray2[randomNoun2];

//generating random setting
const randomSetting = Math.floor(Math.random() * nArray1.length);
const randomSettingOne = sArray[randomSetting];

    randomSentenceStory.textContent = `${randomNounOne} ${randomVerbOne} ${randomAdjOne} ${randomNounTwo} ${randomSettingOne}`;
}
randomSentence.addEventListener('click', randomSentenceFunction);


//function to reset
function resetStory(){
    selectedNoun1.textContent = "";
    selectedNoun2.textContent = "";
    selectedAdjective.textContent = "";
    selectedSetting.textContent = "";
    selectedVerb.textContent = "";
    displaySentence.textContent = "";
    randomSentenceStory.textContent = "";
}

resetbutton.addEventListener('click', resetStory);