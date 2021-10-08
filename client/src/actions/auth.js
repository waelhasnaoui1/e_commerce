
import {REGISTER_SUCCESS,REGISTER_FAIL} from '../types';

const axios = require('axios'); 
// Register User 

export const register = (name,email,password)=> async dispatch => {

    const config = {
        Headers:{
            'content-type':'application/json'
        }
    }
    
    const body = JSON.stringify({name,email,password});
    console.log('the body is');
    console.log(body);
    try {
        const res = axios.post('/register',body,config);
       
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
          });
        
    } catch (err) {
        console.error(err.message); 
        dispatch({
            type: REGISTER_FAIL
          
        });
    }

}