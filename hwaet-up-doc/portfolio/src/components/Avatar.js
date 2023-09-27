import React from 'react';
import avatar from '../images/KingBugs.png';

export default function Avatar() {
    return (
        <>
            <img className="headshot" src={avatar} alt="Ben" id="avatar"/>
        </>
    );
}
