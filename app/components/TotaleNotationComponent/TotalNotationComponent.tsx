import "./TotalNotationComponent.css"
import React, {ReactElement, useState} from "react";

interface TotalNotationComponentProps
{
    average: number
}

function TotalNotationComponent(props: TotalNotationComponentProps)
{
    const totalStars: number = 5;
    const stopColor = "#f8d300";
    const [starsData, setStarsData] = useState<boolean[]>(Array(totalStars).fill(false));

    const createStars  = (average: number) => {

        let stars: ReactElement[]= starsData.map((filled, index) =>
            {
                let offsetYellow: number = 0;
                let offsetWhite: number = 0;
                if(average - index < 0){
                    offsetYellow = (average - index) * 100
                    offsetWhite = 0
                }
                else if (average - index > 0) {
                    offsetYellow = (average - index) * 100
                    offsetWhite = 100 - offsetYellow
                }

                if(offsetYellow < 0){
                    offsetYellow = 0
                    offsetWhite = 100
                }


                return (

                    <span key={index} className={'total'}>
                        <svg width="50px" height="50px" viewBox="120 120 80 80">
                            <linearGradient id={`fill${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                {offsetYellow != 0 ? <stop offset={`${offsetYellow}%`} stopColor={stopColor} /> : ''}
                                {offsetWhite != 0 ? <stop offset={`${offsetWhite}%`} stopColor="#fff" /> : ''}
                            </linearGradient>

                            <path d="M 160.000 180.000
                                    L 183.511 192.361
                                    L 179.021 166.180
                                    L 198.042 147.639
                                    L 171.756 143.820
                                    L 160.000 120.000
                                    L 148.244 143.820
                                    L 121.958 147.639
                                    L 140.979 166.180
                                    L 136.489 192.361
                                    L 160.000 180.000"
                                  fill={`url(#fill${index})`}/>
                      </svg>
                    </span>
                )
            }
        )

        return stars;
    }

    const stars: Array<ReactElement> = createStars(props.average)

    return (
        <div>
            <div>
                {props.average}
                {stars}
            </div>
            <div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default TotalNotationComponent