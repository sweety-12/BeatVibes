console.log("Welcom to spotify");
//initialize the variable 
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongPlay = document.getElementById('masterSongPlay');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs= [
    {songName: "Ishq Bulaava" , filePath : "songs/1.mp3", coverPath : "covers/ishq bulava.jpg"},
    {songName: "Kuch naa kaho" , filePath : "songs/2.mp3", coverPath : "covers/kuch naa kaho.jpg"},
    {songName: "Lag jaa Gale" , filePath : "songs/3.mp3", coverPath : "covers/ye raarein ye mausam.webp"},
    {songName: "Mere samne vale khidki " , filePath : "songs/4.mp3", coverPath : "covers/mere sapno ki raani.jpg"},
    {songName: "Mere Sapno ki Rani " , filePath : "songs/5.mp3", coverPath : "covers/lag jaa gale.jpg"},
    {songName: "Tujhse naraj nahi" , filePath : "6.mp3", coverPath : "covers/mere samne vale khidki me.jpg"},
    {songName: "Yeh Raatein Yeh Mausam" , filePath : "songs/7.mp3", coverPath : "covers/Tujhse Naraj nhi Zindagi.jpg"},
]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
//handling the masterplay
masterPlay.addEventListener('click', ()=>{
    if(audioElement.pause() || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{

    //update seekBar
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
     myProgressBar.value = progress;
     
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongPlay.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=7){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex =0;
    }
    else{
        songIndex -=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})








































// console.log("Welcome to spotify");
// document.querySelector(".songItems")[0].addEventListener("click", audio );

// function audio()
// {
//     var audio = new Audio('songs/demoTone.mp3');
//     audio.play();
// }

// //Initialize the variables

// // let songindex =0;
// // let audioElement = new Audio('1.mp3');
// // let masterPlay = document.getElementById('masterPlay');
// // let myProgressBar = document.getElementById('myProgressBar');
// // let gif = document.getElementById('gif');



// // let songs = [
    
// //         {songName: "Kuch naa Kaho", filePath: "C:\Users\sweety\Desktop\website development\spotify clone\demoTone.mp3.mp3", coverPath: "covers/1,jpg"},
// //         {songName: "Kuch naa Kaho", filePath: "", coverPath: ""},
// //         {songName: "Kuch naa Kaho", filePath: "", coverPath: ""},
// //         {songName: "Kuch naa Kaho", filePath: "", coverPath: ""},
// //         {songName: "Kuch naa Kaho", filePath: "", coverPath: ""},
// //         {songName: "Kuch naa Kaho", filePath: "", coverPath: ""},
// //         {songName: "Kuch naa Kaho", filePath: "", coverPath: ""}, 

// // ]

// // //audioElement.play();

// // //Handle play/pause click
// // masterPlay.addEventListener('click', ()=> {
// //     if(audioElement.paused || audioElement.currentTime <=0){
// //        audioElement.play();
// //        masterPlay.classList.remove('fa-circle-play');
// //        masterPlay.classList.add('fa-circle-pause');
// //        gif.style.opacity =1;
// //     }
// //     else{
// //         audioElement.pause();
// //         masterPlay.classList.remove('fa-circle-pause');
// //         masterPlay.classList.add('fa-circle-play');
// //         gif.style.opacity=0;
// //     }
// // })

// // //Listern to Events
// // myProgressBar.addEventListener('timeupdate', ()=>
// // {
// //     console.log('timeupdate');
// //     //update seekBar
// // })