/* The twelve tones in music */
let TwelveTones = ["A","A#/Bb","B","C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab"];

/* HTML elements */
/* Button elements for chords  */
const majorButton = document.getElementById("majorBtn"); /* Major button */
const minorButton = document.getElementById("minorBtn");  /* Minor Button */
const diminishedButton = document.getElementById("diminishedBtn"); /* Diminished Button */
const augmentedButton = document.getElementById("augmentedBtn"); /* Augmented button */

let pickANote = document.getElementById("pickANote");     /* Note selection box */
let chordTextBox = document.getElementById("chordPara");    /* Text area to display notes (paragraph) */

/* Boxes elements for notes */
const rootBox = document.getElementById("rootNoteBox");    /* The box that will hold the root note */
const thirdBox = document.getElementById("thirdBox");    /* The box that will hold the third */
const fifthBox = document.getElementById("fifthBox");  /* The box that will hold the fifth */




/* function to make a major chord */
function makeMajorTriad(){
    pickANotePart2 = pickANote.value;      // gets the input from the user
    rootIndex = TwelveTones.indexOf(pickANotePart2)  // this takes the user's selected note and finds it in our array then gives back the number it is in the array.
    let rootNote = TwelveTones[rootIndex];    // the first note the user typed is the root note of the chord
    let majorThird = TwelveTones[(rootIndex + 4) % TwelveTones.length]; // the major third is 4 semitones higher than the root note
    let Fifth = TwelveTones[(rootIndex + 7) % TwelveTones.length]; // the fifth is 7 semitones higher than the root note
    console.log(rootNote,majorThird,Fifth);   // for debugging to see what's written to the console
    
    /* major chord variable for the paragraph to write from */
    let majorChord = (`               
The ${rootNote} major chord consists of: 
the root note: ${rootNote}        
major third: ${majorThird}
and the fifth: ${Fifth}`)
    rootBox.innerText = rootNote;    /* Writes the root note into the root note box */
    thirdBox.innerText = majorThird;  /* writes the third into the third box */
    fifthBox.innerText = Fifth;       /* writes the fifth into the fifth box */

    chordTextBox.innerText = (" ",majorChord);   // chordTextBox is the html element it will write the text into
}

/* Function to make a minor chord */
function makeMinorTriad(){
    pickANotePart2 = pickANote.value;      // gets the input from the user
    rootIndex = TwelveTones.indexOf(pickANotePart2)  // this takes the user's selected note and finds it in our array then gives back the number it is in the array.
    let rootNote = TwelveTones[rootIndex];    // the first note the user typed is the root note of the chord
    let minorThird = TwelveTones[(rootIndex + 3) % TwelveTones.length]; // the minor third is 3 semitones higher than the root note
    let Fifth = TwelveTones[(rootIndex + 7) % TwelveTones.length]; // the fifth is 7 semitones higher than the root note
    console.log(rootNote,minorThird,Fifth);   // for debugging to see what's written to the console
    
    /* minor chord variable for the paragraph to write from */
    let minorChord = (`               
The ${rootNote} minor chord consists of: 
the root note: ${rootNote}        
minor third: ${minorThird}
and the fifth: ${Fifth}`)
    
    rootBox.innerText = rootNote;    /* writes the root note into the root note box */
    thirdBox.innerText = minorThird;   /* writes the third into the third box */
    fifthBox.innerText = Fifth;       /* writes the fifth into the fifth box */


    chordTextBox.innerText = (" ",minorChord);   // chordTextBox is the html element it will write the text into
}

/* Function to make a diminished chord */
function makeDiminishedTriad(){
    pickANotePart2 = pickANote.value;      // gets the input from the user
    rootIndex = TwelveTones.indexOf(pickANotePart2)  // this takes the user's selected note and finds it in our array then gives back the number it is in the array.
    let rootNote = TwelveTones[rootIndex];    // the first note the user typed is the root note of the chord
    let minorThird = TwelveTones[(rootIndex + 3) % TwelveTones.length]; // the minor third is 3 semitones higher than the root note
    let Fifth = TwelveTones[(rootIndex + 6) % TwelveTones.length]; // the diminished fifth is 6 semitones higher than the root note
    console.log(rootNote,minorThird,Fifth);   // for debugging to see what's written to the console
    
    /* Diminished chord variable for the paragraph to write from */
    let diminishedChord = (`               
The ${rootNote} diminished chord consists of: 
the root note: ${rootNote}        
minor third: ${minorThird}
and the fifth: ${Fifth}`)
    
    rootBox.innerText = rootNote;    /* writes the root note into the root note box */
    thirdBox.innerText = minorThird;   /* writes the third into the third box */
    fifthBox.innerText = Fifth;       /* writes the fifth into the fifth box */


    chordTextBox.innerText = (" ",diminishedChord);   // chordTextBox is the html element it will write the text into
}


/* function to make an Augmented chord */
function makeAugmentedTriad(){
    pickANotePart2 = pickANote.value;      // gets the input from the user
    rootIndex = TwelveTones.indexOf(pickANotePart2)  // this takes the user's selected note and finds it in our array then gives back the number it is in the array.
    let rootNote = TwelveTones[rootIndex];    // the first note the user typed is the root note of the chord
    let majorThird = TwelveTones[(rootIndex + 4) % TwelveTones.length]; // the major third is 4 semitones higher than the root note
    let Fifth = TwelveTones[(rootIndex + 8) % TwelveTones.length]; // the augmented fifth is 8 semitones higher than the root note
    console.log(rootNote,majorThird,Fifth);   // for debugging to see what's written to the console
    
    /* Augmented chord variable for the paragraph to write from */
    let augmentedChord = (`               
The ${rootNote} augmented chord consists of: 
the root note: ${rootNote}        
major third: ${majorThird}
and the fifth: ${Fifth}`)
    rootBox.innerText = rootNote;    /* Writes the root note into the root note box */
    thirdBox.innerText = majorThird;  /* writes the third into the third box */
    fifthBox.innerText = Fifth;       /* writes the fifth into the fifth box */

    chordTextBox.innerText = (" ",augmentedChord);   // chordTextBox is the html element it will write the text into
}

diminishedButton.addEventListener("click",makeDiminishedTriad);  // on mouseclick perform the makeDiminishedTriad function
augmentedButton.addEventListener("click",makeAugmentedTriad);  // on mouseclick perform the makeAugmentedTriad function
majorButton.addEventListener("click",makeMajorTriad);   // on mouseclick perform the makeMajorTriad function
minorButton.addEventListener("click",makeMinorTriad);   // on mouseclick perform the makeMinorTriad function 




// % modulo can "wrap around an array to go back to the start" 