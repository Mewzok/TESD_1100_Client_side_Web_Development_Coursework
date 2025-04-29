/*
    Author: Jonathan Kinney
    Date Created:   04/29/2025
    Last Modified: 04/29/2025

	Filename: randomquotescript.js

    Purpose: The purpose of this script is to display a random 
    Grant quote.
*/

// quote bank
const generalQuotes = ["I propose to fight it out on this line if it takes all summer.", 
    "The art of war is simple enough. Find out where your enemy is. Get at him as soon as you can. Strike him as hard as you can, and keep moving on.", 
    "In every battle there comes a time when both sides consider themselves beaten; then he who continues the attack wins.", 
    "No terms except an unconditional and immediate surrender can be accepted. I propose to move immediately upon your works.", 
    "Although a soldier by profession, I have never felt any sort of fondness for war, and I have never advocated it, except as a means of peace.", 
    "The distant rear of an army engaged in battle is not the best place from which to judge correctly what is going on in front.", 
    "We have a government and laws and a flag, and they must all be sustained. There are but two parties now, Traitors and Patriots.", 
    "Then, indeed, I gave up all idea of saving the Union except by complete conquest.", 
    "I'm thirsty.", "Don't eat things off the ground.", 
    "Everyone has his superstitions. One of mine has always been when I started to go anywhere, or to do anything, never to turn back or to stop until the thing intended was accomplished.", 
    "I know only two tunes: one of them is 'Yankee Doodle', and the other isn't.", "Hold fast to the Bible. To the influence of this Book we are indebted for all the progress made in true civilization and to this we must look as our guide in the future.", 
    "If you see the President, tell him from me that whatever happens there will be no turning back.", "I don't underrate the value of military knowledge, but if men make war in slavish obedience to rules, they will fail.", 
    "Nations, like individuals, are punished for their transgressions."];

const presidentQuotes = ["PQ1", "PQ2", "PQ3", "PQ4", "PQ5", "PQ6", "PQ7"];

window.onload = function() {
    randomQuotes(generalQuotes, "general-quotes");
    //randomQuotes(presidentQuotes);
}

function randomQuotes(quotes, className) {
    // number of quotes shown on page
    const numOfQuotes = 3;

    let randomNums = [];

    let randomNum;
    for(let i = 0; i < numOfQuotes; i++) {
        randomNum = Math.floor(Math.random() * quotes.length);
        if(!randomNums.includes(randomNum)) {
            randomNums.push(randomNum);
        } else {
            i--;
        }
    }

    // place quotes
    let location;
    for(let i = 0; i < numOfQuotes; i++) {
        location = "#q" + i + "." + className;
        document.querySelector(location).innerHTML = quotes[randomNums[i]];
    }
}