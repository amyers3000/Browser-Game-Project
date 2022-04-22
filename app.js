// Wrong anwer array
charUsed = [];
mistakes = 0;

// Alphabet array for keyboard
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Categories and Words
let categories = [['chair', 'bed', 'television', 'couch', 'pillow', 'lamp', 'blanket', 'plant', 'refridgerator', 'microwave', 'dishwasher'], ['tiger','horse', 'lion','monkey', 'giraffe'],['teacher', 'firefighter', 'nurse', 'doctor', 'professor', 'mayor']];
// Selects an array of words/category and then selects a word
let selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    // console.log(selectedCategory)
let word = selectedCategory[Math.floor(Math.random()* selectedCategory.length)];
    console.log(word)

   

let wordLocation = document.querySelector('#word-guess');
let wordSpace = document.createElement('ul');
wordSpace.setAttribute('class', 'display-3');
wordSpace.id = 'word';

// Creates empty spaces for each character of the word to be displayed on
function unknownWord(){
    for(let i = 0; i < word.length; i++){
        // console.log(word[i])
        let space = document.createElement('li');
        space.textContent = "_";
        space.classList.add(word[i]);
        wordSpace.append(space);
        
    }
    wordLocation.append(wordSpace);
    

    
}
// Create and display keyboard
let key = document.querySelector('#keyboard');

function keyboard(){
    chars.forEach((char) =>{
        let button = document.createElement('button');
        button.textContent = char;
        // button.value = char;
        button.type = 'button';
        button.setAttribute('class', 'btn btn-dark btn-lg');
        button.addEventListener('click', function(){ interactiveKeys(char, button)});
        key.append(button);
    })
}

function interactiveKeys(char, button){
    correctChar = document.getElementsByClassName(char)
    for(let i=0; i<word.length; i++){
        if (char === word[i]){
          for(let j=0; j<correctChar.length; j++){
              correctChar[j].textContent = char
          }}
    }
    if(word.indexOf(char) === -1){
        button.setAttribute('disabled', true)
        wrongText.append(' '+char+' ')
        mistakes++
        // Image function

    }
 }


let side = document.querySelector('aside')
let wrongDiv = document.createElement('div')
wrongDiv.id = 'wrong'
let wrongText = document.createElement('h4')
wrongDiv.innerHTML = '<h3 class> Wrong Letters <h3>'
wrongDiv.append(wrongText)
side.append(wrongDiv)

function wrongChar(char){
    char.forEach((used) =>{
    wrongDiv.append(used)
})
}

    

unknownWord()
keyboard()
console.log(charUsed)
console.log(mistakes)