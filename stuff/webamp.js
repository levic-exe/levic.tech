import Webamp from "https://unpkg.com/webamp";
const webamp = new Webamp({
initialTracks: [
    {
    url: "/stuff/Eiafuawn - Birds.mp3",
    },
    {
    url: "/stuff/The Nightblooms - Butterfly Girl.mp3",
    },  
    {
    url: "/stuff/Everyone Asked About You - Me Vs. You.mp3",
    },
    {
    url: "/stuff/Korea Girl - Reunion.mp3",
    },
    {
    url: "/stuff/Duster - Unrecovery.mp3",
    },
],

});
webamp.renderWhenReady(document.getElementById("webamp-container"));