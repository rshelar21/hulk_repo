import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {setInputValue} from "../features/inputSlice"

const ComponentB = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')


  const handlerChange = (e) => {
    setValue(e.target.value)
    dispatch(setInputValue({
      inputvalue: e.target.value
    }))
  }


  return (
    <>
      <div className='center'>
        <h3>This is Component B</h3>
        <input type="text" placeholder='enter value' onChange={handlerChange}
          value={value}
        />
      </div>
    </>
  )
}

export default ComponentB
