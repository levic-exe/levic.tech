let agentInstance;
let agentName = 'Clippy';
let thegoddamnballoonishidden = true; 
let nav = `<p id="clippy-text">Hi, i'm Clippy. Where do you want to go today? </p>
<button class="clippy-button" onclick="clippyByeBye()">Go away!!!</button>`

clippy.load(agentName, agent => {
    agentInstance = agent;
    agent.show();
});


function clippyHi() {
    if (agentInstance) {
        agentInstance.play('Greeting');
        thegoddamnballoonishidden = false
        agentInstance._balloon.show();
        agentInstance.speak(nav);    }
}

function clippyClicked() {
    if (thegoddamnballoonishidden === true) {
        thegoddamnballoonishidden = false
        document.getElementById("clippycontentstuff").innerHTML = nav
        agentInstance._balloon.show();
    }
    else {
        console.log("clippys dead none of this is real clippy was never real its the mandela effect");
    }
}

function pageLoaded() {
    offset = -4
    startTime(offset)
    clippyHi();
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let UTCh = today.getUTCHours();
    let levih = UTCh + offset
    if (levih < 0) {
        levih = levih + 24
    } 
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('user-time').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('my-time').innerHTML =  levih + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function clippyByeBye() {
    document.getElementById("clippycontentstuff").innerHTML = `<p id="clippy-text">Okay, goodbye for now. If you need to navigate just click on me!</p>`
    setTimeout(function(){
        agentInstance._balloon.hide(true);
        thegoddamnballoonishidden = true;
    }, 1500);
}
