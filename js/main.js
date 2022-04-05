/* used starter code from tbennett and modified to fit the needs of Lab5 assignment */


import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 12, callback: func10 },
        { seconds: 41, callback: func2 },
        { seconds: 44, callback: func3 },
        { seconds: 57, callback: func40 },
        { seconds: 61, callback: func4 }, 
        { seconds: 78, callback: func5 },
        { seconds: 99, callback: func50 },
        { seconds: 110, callback: func6 },
        { seconds: 125, callback: func60 },
        { seconds: 156, callback: func7 },
        { seconds: 163, callback: func70 },
        { seconds: 168, callback: func8 },
        { seconds: 174, callback: func9 },
    ];

    cueTimer.setup("vid", myCues);

    const vid = document.querySelector("#vid");
    const selectList = document.querySelector("#video_select");

    selectList.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

});



//the custom callback functions to trigger when a cuepoint is hit.

function func1() {
    document.querySelector("#vid").style = "outline : 10px solid #006d77";
}
function func10() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Protein";
}
function func2() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Proteins are chains of amino acids.</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}
function func3() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Essential_amino_acid";
}
function func40() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Complete Protein Foods: <br> Provide all 9 essential amino acids.</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func4() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Complete_protein";
} 

function func5() {
    document.querySelector("#web").src =
        "https://www.webmd.com/food-recipes/protein";
}
function func50() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>3500 calories = 1 pound!</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func6() {
    document.querySelector("#web").src = "https://www.medicalnewstoday.com/articles/protein-intake";
}
function func60() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Caution: <br>Excessive protein can be detrimental.</p>";
    document.querySelector(".pop").classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func7() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>RDA is 0.8g per kg (NOT per pound)!!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
} 
function func70() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Well, ATHLETES may need more protein.</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
} 

function func8() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Don't overdo it! <br> Calculate your protein needs.</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#web").src = "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/are-you-getting-too-much-protein";
}
function func9() {
    const pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Note - Clinical data is still not conclusive!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}
