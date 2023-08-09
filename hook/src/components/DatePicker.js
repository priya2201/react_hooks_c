import React,{useState} from 'react'
import DatePicker from 'react-date-picker'

function DatePickerComp() {
    const[dateValue,onDateChange]=useState(new Date());
    const style={
        color:'blue',
        backgroundColor:'lightblue',
    }
  return (
    <div>
          <div style={style}>
            <h2>
               Using the<i>react-date-picker</i>with the react functional components.
            </h2>
            
            <div>
<DatePicker 
onChange={onDateChange}
value={dateValue}
autoFocus={true}
className='date-picker'
closeCalendar={false}
/>
            </div>
            </div>
    </div>
  )
}

export default DatePickerComp