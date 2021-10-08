import {REGISTER_SUCCESS} from '../types';
import {REGISTER_FAIL} from '../types';

import { useState } from 'react';

const initialState = {
    token:localStorage.getItem('token'),
    isAuthneticated:null,
    loading:true,
    user:null,
    
}


export default function  (state=initialState,action) {

   const {type,payload} = action; 
   switch(type){
       case REGISTER_SUCCESS : 
       localStorage.setItem('token', payload.token);
       return {
            ...state,
            ...payload,
            isAuthneticated:true,
            loading:false,
            user:payload
       }
       case REGISTER_FAIL :
        localStorage.removeItem('token'); 
       return {
           ...state,
           token:null,
           isAuthneticated:false,
           loading:false,
           user:null
       }
       default:
      return state;
  
   }
  
}
