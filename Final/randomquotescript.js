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
    "I know only two tunes: one of them is 'Yankee Doodle', and the other isn't.", 
    "If you see the President, tell him from me that whatever happens there will be no turning back.", "I don't underrate the value of military knowledge, but if men make war in slavish obedience to rules, they will fail.", 
    "Nations, like individuals, are punished for their transgressions.", "I have nothing to do with opinions. I deal only with armed rebellion and its aiders and abettors."];

const presidentQuotes = ["Let us have peace.", "The friend in my adversity I shall always cherish most. I can better trust those who helped to relieve the gloom of my dark hours than those who are so ready to enjoy with me the sunshine of my prosperity.", 
    "Labor disgraces no man; unfortunately, you occasionally find men who disgrace labor.", "There never was a time when, in my opinion, some way could not be found to prevent the drawing of the sword.", 
    "I appreciate the fact, and am proud of it, that the attentions I am receiving are intended more for our country than for me personally.", 
    "I know no method to secure the repeal of bad or obnoxious laws so effective as their stringent execution.", "Hold fast to the Bible. To the influence of this Book we are indebted for all the progress made in true civilization and to this we must look as our guide in the future.", 
    "I'm hungry.", "Try not to get shot.", "It was my fortune, or misfortune, to be called to the office of Chief Executive without any previous political training.", 
    "But my later experience has taught me two lessons: first, that things are seen plainer after the events have occurred; second, that the most confident critics are generally those who know the least about the matter criticised.", 
    "There are but few important events in the affairs of men brought about by their own choice." , "As time passes, people, even of the South, will begin to wonder how it was possible that their ancestors ever fought for or justified institutions which acknowledged the right of property in man.",
    "There are many men who would have done better than I did under the circumstances in which I found myself. If I had never held command, if I had fallen, there were 10,000 behind who would have followed the contest to the end and never surrendered the Union.", 
    "The fact is I think I am a verb instead of a personal pronoun. A verb is anything that signifies to be; to do; to suffer. I signify all three.", "Everyone has his superstitions. One of mine has always been when I started to go anywhere, or to do anything, never to turn back or to stop until the thing intended was accomplished.",
    "I know only two tunes: one of them is 'Yankee Doodle', and the other isn't.", "Nations, like individuals, are punished for their transgressions."];

window.onload = function() {
    randomQuotes(generalQuotes, "general-quotes");
    randomQuotes(presidentQuotes, "president-quotes");
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
    let classesNum = document.getElementsByClassName(className); // only change if html exists
    for(let i = 0; i < numOfQuotes; i++) {
        if(classesNum.length > 0) {
            location = "#q" + i + "." + className;
            console.log(location);
            document.querySelector(location).innerHTML = quotes[randomNums[i]];
        }
    }
}