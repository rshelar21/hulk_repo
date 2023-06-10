import React from 'react'
import {useSelector} from "react-redux"
import {selectInputValue} from "../features/inputSlice"

const ComponentC = () => {
  const value = useSelector(selectInputValue)
  return (
    <>
      <div className='center'>
        <h3>This is Component C</h3>
        <h3>Input value is {value}</h3>
      </div>
    </>
  )
}

export default ComponentC
