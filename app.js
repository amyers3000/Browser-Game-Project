// Wrong anwer array
correct= [];
mistakes = -1;
let ready = false

Mino = ['Head','Face','Left_Arm','Left_Hand','Left_Leg', 'Right_Arm', 'Right_Hand', 'Right_Leg', 'Weapon']
// Alphabet array for keyboard
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z','-'];

// Categories and Words
let categories = [['cyclops','ogre', 'cerberus', 'centaurs', 'sirens','harpies','gorgon', 'medusa','hydra','basilisk'], ['zeus', 'hera', 'poseidon', 'demeter', 'athena', 'apollo', 'artemis'],['mount-olympus', 'troy','underworld', 'athens', 'labryinth']];
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
catDiv.id = 'categories'
side.append(catDiv)

// Displaying current category
let newCat = document.querySelector('#newCat')
newCat.textContent = 'Category: __'

// DOM manipuation for empty space section
let wordLocation = document.querySelector('#word-guess');
let wordSpace = document.createElement('ul');
wordSpace.setAttribute('class', 'display-3');
wordSpace.id = 'word';
wordLocation.append(wordSpace)

// Create and display keyboard
let key = document.querySelector('#keyboard');

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
    ready = true
    console.log(word)
    removeWord()
    unknownWord()
    console.log(word.length)
}



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
// Creates keyboard
function keyboard(){
    chars.forEach((char) =>{
        let button = document.createElement('button');
        button.textContent = char;
        button.type = 'button';
        button.id = char;
        button.setAttribute('class', 'btn btn-dark btn-lg');
        button.addEventListener('click', function(){ interactiveKeys(char, button)});
        key.append(button);
    })
}

// Displays letter if correct or stores in the wrong letter div
function interactiveKeys(char, button){
    correctChar = document.getElementsByClassName(char)
        if (word.indexOf(char) >= 0){
        button.setAttribute('disabled', 'true')
          for(let j=0; j<correctChar.length; j++){
              correctChar[j].textContent = char
              correct.push(char)
              winner()
            
          }}else if(word.indexOf(char) === -1 && ready === true){
            button.setAttribute('disabled', 'true')
            text.append('  '+char+'  ')
            wrongText.append(text)
            mistakes++
            if(mistakes<9){
                let newLig = document.createElement('img')
                newLig.src ='Minotaur_03/Vector Parts/'+ Mino[mistakes] +'.png'
                newLig.setAttribute('alt', 'bodypart'+ mistakes)
                newLig.id = Mino[mistakes]
                image.append(newLig)
                
            }else if(mistakes >= 9){
                while (side.firstChild){
                    side.removeChild(side.firstChild)
                }
                    side.textContent = 'GAME OVER'
                    side.style.padding = '50px'
                while (key.firstChild){
                    key.removeChild(key.firstChild)
                }
                
                let newWord= word.toUpperCase()
                newCat.textContent = 'Correct Answer: ' + newWord
                
                removeWord()
             }
        }

}
 
// Removes content from bottom and announces winner
function winner(){
    if(correct.length === word.length){
        while (side.firstChild){
            side.removeChild(side.firstChild)
        }
        side.textContent = 'You Win!'  
        }
}
    

// make autoplay work in chrome



keyboard()
catButtons()


