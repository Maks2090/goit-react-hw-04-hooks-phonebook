import {useState, useEffect} from 'react';

export default function useLocalStorage (key,value) {
    const [state, setstate] = useState(() =>{ return JSON.parse(window.localStorage.getItem(key)) ?? value})
  
    useEffect(() => {
        
      window.localStorage.setItem( key, JSON.stringify(state))
                       
    },[key,state])
  
    return [state, setstate];
  }