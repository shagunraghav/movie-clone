import React, { useEffect, useState } from 'react';
import '../assest/header.css';

function Header(){

const [show, setShow] = useState(false);

useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    })

    return () => {
        window.removeEventListener("scroll")
    }

},[])

    return(
        <div className={`header ${show && "header__black"}`}>
           <img className="logo" src="https://www.clipartmax.com/png/middle/144-1445204_64-movie-icon-packs-movie-film-icon-png.png" 
           alt="playBindas" />
            <img className="headerUser" src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
             alt="" />
       
        </div>
    );
}

export default Header;