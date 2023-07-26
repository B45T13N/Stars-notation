"use client"

import StarComponent from "../StarComponent/StarComponent";
import { useState, useEffect } from 'react';

interface StarsComponentProps
{
    title: string;
    index: number;
    notation: number;
    setNotations: (index:number, notation:number) => void | null ;
}

function StarsComponent(props: StarsComponentProps)
{    
    const totalStars: number = 5;
    const [rating, setRating] = useState<number | null>(null);
    const [indexClicked, setIndexClicked] = useState<number | null>(null);
    const [starsData, setStarsData] = useState<boolean[]>(Array(totalStars).fill(false));
    
    const handleStarClick = (indexStarClicked: number) => {
        const newStarsData = starsData.map((_, index) => index <= indexStarClicked);
        setStarsData(newStarsData);
        setRating(indexStarClicked + 1);
    }

    const handleStarsHover = (indexStarHovered : number) => {
        const newStarsData = starsData.map((_, index) => index <= indexStarHovered);
        setStarsData(newStarsData);
    }

    useEffect(() => {
        if(rating != null && rating >= 1){
            setIndexClicked(rating);
            props.setNotations(props.index, rating);
        }
        else{
            setIndexClicked(0);
        }
    }, [rating])


    const stars = starsData.map((filled, index) => (
        <StarComponent 
        key={index} 
        index={index} 
        onClick={handleStarClick} 
        filled={filled} 
        onMouseEnter={handleStarsHover}
        onMouseLeave={() => setStarsData(starsData.map((_, i) => i < (indexClicked || 0)))}
        onStarBounce={indexClicked != null && index < indexClicked}
        />
    ))

    return(
        <div>
            <h2 className="text-center text-2xl">{props.title}</h2>
            <div className="">
                {stars}
            </div>
        </div>
    )
}

export default StarsComponent