
import React, { useState, useEffect } from 'react';

 function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const JSONValue = localStorage.getItem(key);

        if(JSONValue != null) {
            return JSON.parse(JSONValue);
        } 

         else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    return [value, setValue];
}


export default useLocalStorage