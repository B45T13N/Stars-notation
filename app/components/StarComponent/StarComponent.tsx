import './StarComponent.css'
import { useState, useEffect, use } from 'react';

interface StarComponentProps {
    index: number;
    onClick: (index: number) => void;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
    filled: boolean;
    onStarBounce: boolean;
  }

function StarComponent(props: StarComponentProps)
{
    const [isFilled, setIsFilled] = useState<boolean>(props.filled || false);
    const [isBouncing, setIsBouncing] = useState(false);
    const [animationDelay, setAnimationDelay] = useState(0.1);

    const fillColor = isFilled ? '#f8d300' : '#fff';
    const onClickEvent = () => {
        props.onClick(props.index)
    }

    useEffect(() => {
        
        setIsBouncing(true);
        
        setTimeout(() => {
            setIsBouncing(false);
        }, 3000);
        
    }, [props.onStarBounce])

    useEffect( () => {
        setIsFilled(props.filled);
    }, [props.filled]);

    return(
        <span className={isBouncing ? 'star-bounce star' : 'star'} 
            onClick={onClickEvent}
            onMouseEnter={() => props.onMouseEnter(props.index)}
            onMouseLeave={props.onMouseLeave}
            style={{animationDelay:`${props.index * animationDelay}s`}}
        > 
        <svg width="50px" height="50px" viewBox="120 120 80 80">
            <path d="
            M 160.000 180.000
            L 183.511 192.361
            L 179.021 166.180
            L 198.042 147.639
            L 171.756 143.820
            L 160.000 120.000
            L 148.244 143.820
            L 121.958 147.639
            L 140.979 166.180
            L 136.489 192.361
            L 160.000 180.000
            " 
            fill={fillColor}/>
        </svg>
        </span>
    )
}

export default StarComponent