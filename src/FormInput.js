import React, {useState, forceUpdate} from "react"
import Story from './Story'
// import uuid from "react-uuid"
const story = require('./defaultStory')


// NewBoxForm - this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.

const FormInput = ({ fillIn }) => {
    let blanks = story.blanks

    const [blanksData, setBlanksData] = useState({blanks})
    const [formData, setFormData] = useState({
    })

    
    const handleChange = e => {
        const { name, value } = e.target;
        // set state
        setFormData(formData => ({
            ...formData,
            [name]: value
        }
        
        ))
        
    }

  
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        fillIn({...formData, })
        
        
        
        


        // Use formData and update state
        // createBox({...formData, id: uuid() })

        // completedMadlib = 
        // alert(`Created a ${formData.width} x ${formData.height} ${formData.backgroundColor}`)
        // setFormData(initialState)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <div>
                    {blanks.map((blank, index) => {
                        return (
                            <input key={`${blank}${index}`} placeholder={blank} onChange={handleChange} name={`${index}`}></input>
                        )
                    })}
  
                </div>
                <div>
                
                </div>
  
  <button id="newBoxButton">Add!</button>
</form>

        </div>
        
    )
}

export default FormInput;