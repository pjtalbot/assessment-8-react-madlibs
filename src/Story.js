import React, { useState } from 'react'
const story = require('./defaultStory')




const Story = (props) => {
    // let content = `There once was a ${story.libs.lib4.default} ${story.lib1.default} who ${story.lib2.default} a ${story.lib4.default} ${story.lib3.default}`
    // console.log(story)
    // console.log(story.blanks)
    // console.log(props)

    // make array of words
    const [storyFill, setStoryFill] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    // setStoryFill(((storyFill, str) => {
    //     return str
    // }))

    return (
       
        <div>
            <p>
            {props.str}
            </p>
        </div>
    )

}

export default Story