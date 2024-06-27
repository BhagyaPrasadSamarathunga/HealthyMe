import React from 'react';
import DropDown from '../Dropdown/DropDown.jsx';
import Styles from './Question.module.css'

function Question({questionId, question, dropdownOptions, questionType, onSelect}) {
  
  const selectedOptionHandel = (value) =>{
    onSelect(questionId,value);
  }
  
  return (
    <div>
      <h3>{question}</h3>
      <DropDown dropdownOptions={dropdownOptions} questionType={questionType} onSelect={selectedOptionHandel}/>
    </div>
  )
}

export default Question