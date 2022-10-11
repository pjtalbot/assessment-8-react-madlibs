import React, { useState, useRef, useEffect } from "react"
import Story from "./Story"
import FormInput from './FormInput';
const story = require('./defaultStory')

const MadLib = () => {
    const [filledInWords, setFilledInWords] = useState([])
    const [completedMadLib, setCompletedMadLib] = useState('')
    let str
    const fill = async madLibObj => {

        await setFilledInWords(filledInWords => [...filledInWords, madLibObj])
        console.log(filledInWords)
        let completedMadLibStr = ''
        if (filledInWords.length) {
            for (let i = 0; i < story.blanks.length - 1; i++){
                completedMadLibStr = completedMadLibStr + story.value[i];
                console.log('in the loop')
                completedMadLibStr = completedMadLibStr + filledInWords[0][i]; 
                
            }
            console.log(completedMadLibStr)
            
            str = completedMadLibStr
            console.log(completedMadLib)
            setCompletedMadLib((completedMadLib) => { return completedMadLibStr})
        console.log(completedMadLib)
    }
    
        }
        

   

    // const storyFilled = 
    return (
        <div className="MadLib">
            <h1>MadLib</h1>
            <FormInput fillIn={fill}/>
            <Story str={completedMadLib}/>

        </div>
    )
}

export default MadLib