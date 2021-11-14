import React, {useEffect} from 'react';
import '../../App.css';

export default function OnlyWatame(){

    useEffect(() => {
        window.location.href="https://www.youtube.com/channel/UCqm3BQLlJfvkTsX_hvm0UmA";
    }, [])

    return(
        <h1 className='onlywatame'>ONLY WATAME</h1>
    )
}