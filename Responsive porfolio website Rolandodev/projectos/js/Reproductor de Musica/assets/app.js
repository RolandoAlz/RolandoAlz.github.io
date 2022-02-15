//llamar a las variables 
//crear mi objeto
//poner el playlistv en false
//crear funciones de play y pause
//crear la condicion
//cargamos las canciones
//antes y despues de la musica



const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");
const title = document.querySelector(".title");
const audio = document.querySelector("audio");

const songList = [

    {
        path: "amandote-letra-ana-karina-y-jandy-feliz.mp3",
        songName:"amandote-letra-ana-karina-y-jandy-feliz",
    },
    
    {
        path: "andres-cepeda-morat-dejame-ir-letra.mp3",
        songName:"andres-cepeda-morat-dejame-ir-letra",
    },
    
    {
        path: "beret-hoy-videoclip-oficial-hd.mp3",
        songName:"beret-hoy-videoclip-oficial-hd",
    },
    
    {
        path: "beret-llegara-letra.mp3",
        songName:"beret-llegara-letra",
    },
    
    {
        path: "beret-mira-mujer.mp3",
        songName:"beret-mira-mujer",
    },
    {
        path: "beret-sentir-videoclip-ofical-letra.mp3",
        songName:"beret-sentir-videoclip-ofical-letra",
    },
];


let songPlaying = false;

function playSong(){
    audio.play();
    songPlaying = true;
    playPause.classList.add("active");
    playPause.innerHTML = `<ion-icon name="play-outline"></ion-icon>`
}
function pauseSong(){
    audio.pause();
    songPlaying = false;
    playPause.classList.remove("active");
    playPause.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
}

playPause.addEventListener("click",()=>(songPlaying ? pauseSong(): playSong()));








// playPause.addEventListener("click",()=>{
//     if(songPlaying ){
//         pauseSong();
//     }else{
//         playSong();
//     }
// })


















function loadSong(songList){
    title.textContent= songList.songName;
    audio.src = songList.path;
}
let i = 0;
loadSong(songList[0]);





// previus song list
function prevSong(){
 i--;
 if(i < 0 ){
    i = songList.length - 1;
 }
 loadSong(songList[i]);
 playSong();
};

prev.addEventListener("click",prevSong);

// next song list
function nextSong(){
    i++;
    if(i >  songList.length - 1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
};

next.addEventListener("click",nextSong);
































// const title = document.querySelector('.title');
// const prev = document.querySelector('.prev');
// const playPause = document.querySelector('.playPause');
// const next = document.querySelector('.next');
// const audio = document.querySelector('audio');

// // First we will create song list/Primero crearemos una lista de canciones.

// const songList = [

//     {
//         path: "amandote-letra-ana-karina-y-jandy-feliz.mp3",
//         songName: 'amandote-letra-ana-karina-y-jandy-feliz'
//     },

//     {
//         path: "andres-cepeda-morat-dejame-ir-letra.mp3",
//         songName: 'andres-cepeda-morat-dejame-ir-letra'
//     },
//     {
//         path: "beret-hoy-videoclip-oficial-hd.mp3",
//         songName: 'beret-hoy-videoclip-oficial-hd'
//     },
//     {
//         path: "beret-llegara-letra.mp3",
//         songName: 'beret-llegara-letra'
//     },
//     {
//         path: "beret-mira-mujer.mp3",
//         songName: 'beret-mira-mujer'
//     },
//     {
//         path: "beret-sentir-videoclip-ofical-letra.mp3",
//         songName: 'beret-sentir-videoclip-ofical-letra'
//     },

// ];

// let song_Playing = false;


// //play song

// function playSong(){
//     song_Playing = true;
//     audio.play();
//     playPause.classList.add('active');
//     //changeicon
//     playPause.innerHTML=(`<ion-icon name="play-outline"></ion-icon>`);
// }
// //pause song
// function pauseSong(){
//     song_Playing = false;
//     audio.pause();
//     playPause.classList.remove('active');
//     //change icon
//     playPause.innerHTML=(`<ion-icon name="pause-outline"></ion-icon>`);
// }

// //pause or pause song on click
// // playPause.addEventListener('click',()=> (song_Playing ? pauseSong(): playSong()));


// playPause.addEventListener("click",()=>{
//     if(song_Playing){
//         pauseSong();
//     }else{
//         playSong()
//     }
// })

// //load song

// function loadSong(songList){
//     title.textContent = songList.songName;
//     audio.src = songList.path;
//  }

//  //current songList

//  let i = 0;

//  //on load - select first song from son list
//  loadSong(songList[i]);


// // previus song list
// function prevSong(){
//     i--;
//     if(i < 0){
//         i = songList.length - 1;
//     }
//     loadSong(songList[i]);
//     playSong();
// };

// prev.addEventListener("click",prevSong);

// // next song list
// function nextSong(){
//     i++;
//     if(i >  songList.length - 1){
//         i = 0;
//     }
//     loadSong(songList[i]);
//     playSong();
// };

// next.addEventListener("click",nextSong);
