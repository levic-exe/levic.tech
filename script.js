let agentInstance;
let agentName = 'Clippy';

clippy.load(agentName, agent => {
    agentInstance = agent;
    agent.show();
});

function clippyHi() {
    let stuff = `<p id="clippy-text">Hi, i'm Clippy. Where do you want to go today? </p>
    <a href="https://github.com/levic-exe"><img src="/stuff/github.png" alt="Check out my GitHub!"></img></a>`
    if (agentInstance) {
        agentInstance.play('Greeting');
        agentInstance.speak(stuff, true);
        agentInstance.reposition();
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
