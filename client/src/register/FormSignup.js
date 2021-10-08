import React,{useState} from 'react';
import { connect } from 'react-redux';
import './Form.css'
import {register} from '../actions/auth'
import PropTypes from 'prop-types'
const FormSignup = ({ register}) => {
    
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2} = formData ; 
    const onChange = (e) => {
        setFormData ({...formData,[e.target.name]:e.target.value});
        
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
          console.log('Passwords do not match');
        } else {
          register({ name, email, password });
        }
      };
    
    return (
        <div className = 'form-content-right'>
            <form className='form' onSubmit={onSubmit} >
                <h1>
                    Get Started with us Today
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className ='form-label'> name
                        <input id='name' type='text' name= 'name' className='form-input' placeholder='Enter you name' value={name} onChange= {e=>onChange(e)} />
                    </label>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className ='form-label'> email
                        <input id ='email' type='email' name= 'email' className='form-input' placeholder='Enter you email'  value={email} onChange= {e=>onChange(e)}/>
                    </label>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className ='form-label'> password
                        <input id='password' type='password' name= 'password' className='form-input' placeholder='Enter you password'  value={password} onChange= {e=>onChange(e)}/>
                    </label>
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password2' className ='form-label'> password2
                        <input id='password2' type='password' name= 'password2' className='form-input' placeholder='repeat your password'  value={password2} onChange= {e=>onChange(e)}/>
                    </label>
                </div>
                
                <button className='form-input-btn' onClick={()=>{ console.log('button pressed')}} type='submit'>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Already have an account ? Login
                </span>
            </form>      
        </div>
    )
}
FormSignup.propTypes = {
    
    register: PropTypes.func.isRequired,
    
  };

export default connect(null,{register})(FormSignup);
