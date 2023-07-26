"use client"

import StarsComponent from '../StarsComponent/StarsComponent'
import TotalNotationComponent from "@/app/components/TotaleNotationComponent/TotalNotationComponent";
import {useState} from "react";

function NotationComponent() {
    const [notations, setNotations] = useState<Array<number>>(new Array<number>(4).fill(-1))
    const [isFullyCompleted, setIsFullyCompleted] = useState<boolean>(false)
    const [average, setAverage] = useState<number>(0)

    const calculateAverage = () => {

        let sum = notations.reduce((total, note) => total + note, 0)

        let average = sum / notations.length
        setAverage(average);

    }
    const addNotation = (index: number, notation: number) => {
        let tmpNotations = notations;
        tmpNotations[index] = notation;

        setNotations(tmpNotations);

        if (notations.every((element) => element !== -1)) {
            setIsFullyCompleted(true)
            calculateAverage()
        }

    }


    return (
        <div className='w-4/5 h-96 flex flex-col justify-center'>
            <div className='flex flex-col'>
                <div className='flex justify-between m-3'>
                    <div>
                        <StarsComponent title={'Design'} index={0} notation={0} setNotations={addNotation}/>
                    </div>
                    <div>
                        <StarsComponent title={'Fonctionnalité'} index={1} notation={0} setNotations={addNotation}/>
                    </div>
                </div>
                <div className='flex justify-between m-3'>
                    <div>
                        <StarsComponent title={'Animation'} index={2} notation={0} setNotations={addNotation}/>
                    </div>
                    <div>
                        <StarsComponent title={'Choix technique'} index={3} notation={0} setNotations={addNotation}/>
                    </div>
                </div>

            </div>
            <div id="total">
                {isFullyCompleted ? <TotalNotationComponent average={average}/> : ''}
            </div>
        </div>
    )
}

export default NotationComponent