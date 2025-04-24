/*
    Author: Jonathan Kinney
    Date Created:   04/22/2025
    Last Modified: 04/22/2025

	Filename: factgeneratorscript.js

    Purpose: The purpose of this script is to display a random 
    picture of Grant and generate a random fact underneath it.
*/

// word bank
const hows = ["seen", "found", "caught", "spotted", "witnessed", "observed", "heard"];
const actions = ["riding", "fighting", "hugging", "chasing", "petting", "belittling", "bludgeoning", "eating",
    "painting", "wrestling", "befriending", "shouting at", "juggling", "stealing", "training", "interrogating",
    "impersonating", "baptizing", "hypnotizing", "carrying", "negotiating with", "bribing", "observing", 
    "writing a report about", "formally addressing", "carefully analyzing", "secretly following", "hunting"];
const objects = ["a camel", "a cannon", "three squirrels in a trench coat", "a haunted banjo",
    "a loaf of sentient bread", "a trumpet", "the concept of time", "a canoe", "a particularly talented raccoon",
    "an uncooperative ladder", "the moon", "a watermelon", "a sharp mop", "a chimp with exactly two legs",
    "a perfectly spherical egg", "a monkey with too many hands", "a bag that was way too full of marbles", 
    "a pair of shoes", "a lava lamp sent from the future", "a bear with violent tendencies", "a box of ancient scrolls",
    "a wall of hand-carved magical runes", "his own reflection (but older and with a cleft lip)", 
    "a cat that could not meow and instead exclusively proclaimed 'Power Rangers the Movie!' with confidence",
    "a statue that occasionally looks slightly sadder than usual", "a model of Robert E. Lee with a longer neck",
    "an official Grant-shaped pinata", "a groundhog that made legal decisions", "a senator",
    "the book 'Pride and Prejudice' by Jane Austen", "Napoleon's iconic horse from that one painting"];
const reasons = ["because it owed him money", "due to a secret government experiment", "after losing a bet to Lincoln",
    "because it was Tuesday", "to win back his honor", "for fun", "because he misunderstood a fortune cookie", 
    "as a form of protest", "because Lincoln ordered him to", "because destiny demanded it", "because he was bored",
    "because the stars aligned just right", "to prevent a tragedy", "because he felt 'muddy'", "due to travel regulations",
    "because no one else could", "to impress Lincoln", "after reading a suspicious tablet", "because a Walmart witch told him to",
    "as part of his morning routine", "for national security", "in accordance with ancient prophecy",
    "due to a clerical error in 1849", "to win a bet with Rutherford B. Hayes, good ol' Rud, ol' Uncle Rud, lil' Rudy, the big one-nine", 
    "because he misread the Constitution", "as part of an elaborate training plan", "to teach the youth about perseverance",
    "due to a scheduling conflict with Lee", "to outdo a rival general in charisma", "to prove the law technically allowed it",
    "under the watchful eye of Congress", "as a last resort", "to establish dominance", "after consulting his most trusted advisor",
    "to manifest destiny", "because nobody taught him not to", "to ensure historical accuracy in advance"];
const expressions = ["Wow!", "Cool!", "Awesome!", "Radical!", "Amazing!", "Stunning!", ":/", "Incredible!", "Exciting!"]

window.onload = function() {
    document.getElementById("generateFact").onclick=function() {
        randomImage();
        generateFact();
    }

    // pick and apply random image
    function randomImage() {
        const numOfImages = 15;

        // get current image number
        let currentSrc = document.getElementById("randomImage").src;
        let currentImageNum = currentSrc.match(/gfimg(\d+)\.png/);
        let currentNum = currentImageNum ? parseInt(currentImageNum[1]) : -1;

        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * numOfImages) + 1;
        } while (randomNum === currentNum);

        let imageString = "gfimg" + randomNum + ".png";

        document.getElementById("randomImage").src="resources/grantfactsimgs/" + imageString;
    }

    // generate a random fact
    function generateFact() {
        let how = getRandom(hows);
        let action = getRandom(actions);
        let object = getRandom(objects);
        let reason = getRandom(reasons);
        let expression = getRandom(expressions);

        let sentence = `Grant was once ${how} ${action} ${object} ${reason}. ${expression}`

        document.getElementById("didYouKnow").style.display = "block";
        document.getElementById("grantFact").textContent = sentence;
    }

    // random function
    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}