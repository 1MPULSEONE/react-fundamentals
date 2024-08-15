import React from 'react'
import classes from './UncontrolledInput.module.css'
import { forwardRef } from 'react'


const UncontrolledInput = forwardRef(({onChange, value, ...props},ref) => {

    return (
        <input ref={ref} className={classes.input} onChange={onChange} value={value} {...props}/>
    )
})
export default UncontrolledInput