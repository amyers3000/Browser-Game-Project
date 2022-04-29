// Wrong anwer array
correct= [];
mistakes = 0;

// Alphabet array for keyboard
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z','-'];

// Categories and Words
let categories = [['cyclops','ogre', 'leprechauns', 'gnomes', 'goblins','fairies','gorgon', 'mermaid','phoenix','basilisk'], ['zeus', 'hera', 'poseidon', 'demeter', 'athena', 'apollo', 'artemis'],['mount-olympus', 'troy','underworld', 'athens', 'labryinth']];
let catNames = ['Mythical Beasts', 'Greek Gods', 'Mythical Places']
// Selects an array of words/category and then selects a word
let selectedCategory = []

let word = ''


// DOM manipulation to make wrong letter section and category buttons
let side = document.querySelector('aside')
let wrongDiv = document.createElement('div')
wrongDiv.id = 'wrong'
let wrongText = document.createElement('div')
let text = document.createElement('h4')
wrongDiv.innerHTML = '<h4> Wrong Letters <h4>'
wrongDiv.append(wrongText)
side.append(wrongDiv) 

// Adding div that will contain buttons for categories
let catDiv = document.createElement('div')
catDiv.innerHTML = '<h4>Select a Category:</h4>'
catDiv.id = 'categories'
side.append(catDiv)

// Displaying current category
let newCat = document.querySelector('#newCat')
newCat.textContent = 'Category: __'

function catChoosen(i){
    selectedCategory = categories[i]
    newCat.textContent = 'Category: ' + catNames[i]
    word = selectedCategory[Math.floor(Math.random()* selectedCategory.length)]
    console.log(word)
    removeWord()
    unknownWord()
}
// Creates category buttons displays the category and randomly chooses a word from said category
function catButtons(){
    for(i=0;i<catNames.length; i++){
        let button = document.createElement('button')
        let name = catNames[i]
        button.textContent = name
        catDiv.append(button)
        button.type = 'button'
        button.setAttribute('class','btn btn-dark btn-lg')
        button.addEventListener('click', function(){ 
                if(name === 'Mythical Beasts'){
                    catChoosen(0)
                } else if(name === 'Greek Gods'){
                    catChoosen(1)
                }else if(name === 'Mythical Places'){
                    catChoosen(2)
                }
                
            
        })
        
    }
}

// displays the category and randomly chooses a word from said category
function catChoosen(i){
    selectedCategory = categories[i]
    newCat.textContent = 'Category: ' + catNames[i]
    word = selectedCategory[Math.floor(Math.random()* selectedCategory.length)]
    console.log(word)
    removeWord()
    unknownWord()
    console.log(word.length)
}



// DOM manipuation for empty space section
let wordLocation = document.querySelector('#word-guess');
let wordSpace = document.createElement('ul');
wordSpace.setAttribute('class', 'display-3');
wordSpace.id = 'word';
wordLocation.append(wordSpace)

// Creates empty spaces for each character of the word to be displayed on
function unknownWord(){
    for(let i = 0; i < word.length; i++){
        let space = document.createElement('li');
        space.textContent = "_";
        space.classList.add(word[i]);
        wordSpace.append(space);
        
    }
    wordLocation.append(wordSpace)
    
}
// Removes node with current word and resets wrong letters
function removeWord(){
    while (wordSpace.firstChild){
        wordSpace.removeChild(wordSpace.firstChild)
    }
    while( wrongText.firstChild){
        wrongText.removeChild(wrongText.firstChild)
    }

}
// Create and display keyboard
let key = document.querySelector('#keyboard');

function keyboard(){
    chars.forEach((char) =>{
        let button = document.createElement('button');
        button.textContent = char;
        button.type = 'button';
        button.setAttribute('class', 'btn btn-dark btn-lg');
        button.addEventListener('click', function(){ interactiveKeys(char, button)});
        key.append(button);
    })
}

// Displays letter if correct or stores in the wrong letter div
function interactiveKeys(char){
    correctChar = document.getElementsByClassName(char)
        if (word.indexOf(char) >= 0){
          for(let j=0; j<correctChar.length; j++){
              correctChar[j].textContent = char
              correct.push(char)
              winner()
            
          }}else if(word.indexOf(char) === -1){
            text.append('  '+char+'  ')
            wrongText.append(text)
            mistakes++
            // Image function
    }

}
 

function winner(){
    if(correct.length === word.length){
        console.log('You win')
        while (side.firstChild){
            side.removeChild(side.firstChild)
        }
        side.textContent ='You Win!'  
        }
}
    

console.log(correct)




keyboard()
catButtons()


