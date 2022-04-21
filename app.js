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
unknownWord()