import {useEffect, useState} from "react";

interface TotalNotationComponentProps
{
    notations: Array<number>
}

function TotalNotationComponent(props: TotalNotationComponentProps)
{
    const [average, setAverage] = useState<number>(0)

    const calculateAverage = () => {
        let sum = props.notations.reduce((total, note) => total + note, 0)

        let average = sum / props.notations.length

        setAverage(average);
    }

    useEffect(() => {
        calculateAverage()

    }, [props.notations])

    return (
        <div>{average}</div>
    )
}

export default TotalNotationComponent