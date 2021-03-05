import {useState} from 'react'

//Add task Form
const AddTask = (props) => {

//Local States for storing the form input values
const [text,setText] = useState('')
const [day,setDay] = useState('')
const [reminder,setReminder] = useState(false)

const onSubmit = (e) => {
    // To prevent the default action of submitting to a page
    e.preventDefault()

    if(!text) {
        alert('Please add a task')
        return
    }

    props.onAdd({text,day,reminder})

    //Resetting the form local states after each submission
    setText('')
    setDay('')
    setReminder(false)

}

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(e) => setText(e.target.value)} />

            </div>
            <div className='form-control'>
                <label>Day & Time </label>
                <input type='text' placeholder='Add Day and time' 
                value={day} onChange={(e) => setDay(e.target.value)}/>

            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked ={reminder} value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}/>

            </div>

            <input type='submit' value='Save' className='btn btn-block' />

        </form>
    )
}

export default AddTask;