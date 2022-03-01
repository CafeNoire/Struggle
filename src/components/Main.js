import React, { useState } from 'react';
import '../styles/main.css';
import axios from 'axios';
import { useEffect } from 'react';

const Main = () => {
    const [meme, setMeme] = useState([])    
        useEffect(() => {
                axios
                .get("https://api.imgflip.com/get_memes")
                .then((res) => setMeme(res.data.data.memes))
                .catch ((err) => console.log(err));
            },
            [],
            console.log(meme),
            );

        //let myMemeUrl= ""
        const [myMemeUrl, setMyMemeUrl] = useState("")
            function getMeme () {
                let item = meme[Math.floor(Math.random()*meme.length)];
                console.log(item);
               return(
                setMyMemeUrl(JSON.stringify(item.url)),
                console.log(myMemeUrl)
               )
                
            };
    return (
        <div className='main'>
            <div className='input'>
                <input type="text" name ='button-1'id='input-1'></input>
                <input type="text" name ='button-2'id='input-2'></input>
            </div>
            <div className='button'>
                <button onClick={getMeme}>Get a new Meme Image</button>
            </div>
            <div className='content'>
                <img src={myMemeUrl}
                    alt='memeImg' id='meme-image'/>
            </div>
            <div className='download'>
                <button id='download-button'>Download</button>
            </div>
        </div>
    );
};

export default Main;