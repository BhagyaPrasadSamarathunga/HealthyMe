import React,{useState, useEffect, useRef} from 'react';
import styles from './DropDown.module.css';

function DropDown({dropdownOptions, onSelect}) {

    const [dropdownTroggle, setDropDownTroggle] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(()=>{
      function handler(e) {
        if (dropdownRef.current) {        
            if (!dropdownRef.current.contains(e.target)) {
                setDropDownTroggle(false)
            }
        }
      }  
      document.addEventListener('click',handler)
      return () => {
        document.removeEventListener('click', handler)
      }
    },[])

  return ( 
    <div className={styles.dropdown} ref={dropdownRef}>
            {dropdownOptions && dropdownOptions.map((option) => {return(
              <button className={styles.button} key={option.id} onClick= {() => {
                  setDropDownTroggle(false)
                  onSelect(option.value)
              }}> {option.label} 
            </button>)})}
    </div>
  )
}

export default DropDown