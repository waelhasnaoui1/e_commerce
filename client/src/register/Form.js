import React from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import  './Form.css';
import shopping from '../img/shopping.png'

var isSubmitted = false ; 

const Form = () => {
    
    return (
        <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
            <img className='form-img-2' src ={shopping} alt='shopping' />
          
        </div>
        {!isSubmitted ? (
          <FormSignup />
        ) : (
          <FormSuccess />
        )}
      </div>
    )
}

export default Form
