/*
    Author: Jonathan Kinney
    Date Created:   04/22/2025
    Last Modified: 04/22/2025

	Filename: factgeneratorscript.js

    Purpose: The purpose of this script is to display a random 
    picture of Grant and generate a random fact underneath it.
*/

window.onload = function() {
    document.getElementById("generateFact").onclick=function() {
        randomImage();
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
    function randomFact() {
        
    }
}