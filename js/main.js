/* used starter code from tbennett and modified to fit the needs of Lab5 assignment */


import { cueTimer } from "./modules/cuepoints.js";

document.addEventListener("DOMContentLoaded", (e) => {

    var myCues = [
        { seconds: 2, callback: func1 },
        { seconds: 12, callback: func11 },
        { seconds: 26, callback: func2 },
        { seconds: 44, callback: func3 },
        { seconds: 57, callback: func4 },
        { seconds: 61, callback: func41 },
        { seconds: 70, callback: func42 },  
        { seconds: 78, callback: func5 },
        { seconds: 85, callback: func51 },
        { seconds: 96, callback: func52 },
        { seconds: 104, callback: func53 },
        { seconds: 110, callback: func6 },
        { seconds: 125, callback: func61 },
        { seconds: 156, callback: func7 },
        { seconds: 163, callback: func71 },
        { seconds: 168, callback: func8 },
        { seconds: 174, callback: func9 },
    ];

    cueTimer.setup("vid", myCues);

    /* detect the video format and text-track language selected */
    const vid = document.querySelector("#vid");
    const selectVid = document.querySelector("#video_select");
    const selectTxt = document.querySelector("#text-track");

    selectVid.addEventListener("change", (e) => {
        selectVideo(e, vid);
    });

    selectTxt.addEventListener("change", (e) => {
        const id = e.target.value;
        selectTrack(e, vid, id);
    });

});

/* Custom call functions triggered when a cuepoint is hit. 
Displays supporting links and guides the user through video lesson points.*/

function func1() {
    document.querySelector("#vid").style = "outline : 7px solid #ff5964";
}
function func11() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Protein";
}
function func2() {
    let pop = document.querySelector(".pop1");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop1").classList.toggle("hilight");
    }, 4500);
}
function func3() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Essential_amino_acid";
}
function func4() {
    let pop = document.querySelector(".pop2");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop2").classList.toggle("hilight");
    }, 4500);
}

function func41() {
    document.querySelector("#web").src =
        "https://en.wikipedia.org/wiki/Complete_protein";
} 
function func42() {
    let pop = document.querySelector(".pop3");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop3").classList.toggle("hilight");
    }, 4500);
}

function func5() {
    document.querySelector("#web").src =
        "https://www.webmd.com/food-recipes/protein";
}
function func51() {
    let pop = document.querySelector(".pop4");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop4").classList.toggle("hilight");
    }, 4500);
}
function func52() {
    let pop = document.querySelector(".pop5");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop5").classList.toggle("hilight");
    }, 4000);
}
function func53() {
    let pop = document.querySelector(".pop6");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop6").classList.toggle("hilight");
    }, 4000);
}
function func6() {
    document.querySelector("#web").src = "https://www.medicalnewstoday.com/articles/protein-intake";
}
function func61() {
    let pop = document.querySelector(".pop7");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop7").classList.toggle("hilight");
    }, 4500);
}
function func7() {
    const pop = document.querySelector(".pop8");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop8").classList.toggle("hilight");
    }, 4000);
} 
function func71() {
    const pop = document.querySelector(".pop9");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop9").classList.toggle("hilight");
    }, 4000);
} 

function func8() {
    const pop = document.querySelector(".pop10");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop10").classList.toggle("hilight");
    }, 4500);
    document.querySelector("#web").src = "https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/are-you-getting-too-much-protein";
}
function func9() {
    const pop = document.querySelector(".pop11");
    pop.classList.add("hilight");
    setTimeout(() => {
        document.querySelector(".pop11").classList.toggle("hilight");
    }, 4500);
}
