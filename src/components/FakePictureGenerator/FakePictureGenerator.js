import React, { useState } from 'react';
import './FakePictureGenerator.scss';
import Amier from '../../assets/images/faces/amier-faudzi.jpg';
import Amante from '../../assets/images/faces/art-hauntington.jpg';
import Keyshia from '../../assets/images/faces/idowu-emmanuel.jpg';
import Isiah from '../../assets/images/faces/nico-marks.jpg';

export default function FakePictureGenerator({userId, name}) {

    return (
        <>
            {(
                userId == "605d150c03b9cf2c342d12c7" || 
                userId == "605d164d03b9cf2c342d12c9" || 
                userId == "605d12bb03b9cf2c342d12c4" ||  
                userId == "605d109f03b9cf2c342d12c0") ?
                <>
                    { String(userId) == "605d150c03b9cf2c342d12c7" ? <img src={Amier} alt="" className={name}/> :""}
                    { String(userId) == "605d164d03b9cf2c342d12c9" ? <img src={Amante} alt="" className={name}/> :""}
                    { String(userId) == "605d12bb03b9cf2c342d12c4" ? <img src={Keyshia} alt="" className={name}/> :""}
                    { String(userId) == "605d109f03b9cf2c342d12c0" ? <img src={Isiah} alt="" className={name}/> :""}
                </>
                :
                <img src="http://placekitten.com/600/600" alt="" className={name}/>
                }
        </>
    )
}
