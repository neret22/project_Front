import {useState, useEffect} from "react";



function getStorageValue(key, defaultValue) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

/*localStorage.getItem('user');*/
/*
https://blog.logrocket.com/using-localstorage-react-hooks/
https://blog.logrocket.com/localstorage-javascript-complete-guide/
 */
