// Alphabet array for keyboard
let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']

// Categories and Words
let categories = [['chair', 'bed', 'television', 'couch', 'pillow', 'lamp', 'blanket', 'plant', 'refridgerator', 'microwave', 'dishwasher'], ['tiger','horse', 'lion','monkey', 'giraffe'],['teacher', 'firefighter', 'nurse', 'doctor', 'professor', 'mayor']];
// Selects an array of words/category and then selects a word
let selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    // console.log(selectedCategory)
let word = selectedCategory[Math.floor(Math.random()* selectedCategory.length)];
    // console.log(word)

   

let wordLocation = document.querySelector('#word-guess');
let wordSpace = document.createElement('ul')
wordSpace.id = 'word'

// Creates empty spaces for each character of the word to be displayed on
function unknownWord(){
    for(let i = 0; i < word.length; i++){
        // console.log(word[i])
        let space = document.createElement('li');
        space.textContent = "_";
        space.id = word[i];
        wordSpace.append(space);
        
    }
    wordLocation.append(wordSpace);
}
// Create and display keyboard
let keys = document.querySelector('#keyboard')

function keyboard(){
    chars.forEach((char) =>{
        let button = document.createElement('button');
        button.textContent = char;
        button.value = char;
        button.type = 'button';
        button.setAttribute('class', 'btn btn-outline-dark btn-lg')
        keys.append(button)
    })
}
unknownWord()
keyboard()