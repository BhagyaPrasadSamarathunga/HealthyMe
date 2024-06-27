import {useState, useEffect} from 'react';
import Button from '../Button/Button';
import Question from '../Question/Question';
import { useNavigate } from "react-router-dom";
import styles from './Pagination.module.css';
import AppContext from '../../store/AppContext.js';

const Pagination = ({questionList, onsubmit}) => {
  const[questionId, setQuestionId] = useState(0);
  const[selectedQuestion, setSelectedQuestion] = useState({});
  const[isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const initialUserInputDetails = [];
  const[userInput,setUserInput] = useState(initialUserInputDetails);
  const questionListLength = questionList.length;

  const handelBackClick =()=>{
    setQuestionId(questionId - 1);
  }
  const handelNextClick =()=>{
    setQuestionId(questionId + 1);
  }
  const handelSelectetItem=(id,value)=>{
    setUserInput({...userInput, [id-1]:value});

  }
  const handelSubmitClick =() => {
    onsubmit(userInput);
    navigate("/option");
  }
  useEffect(() => {
    setSelectedQuestion(questionList[questionId])
  }, [questionId]);

  return(
    <div>
      { questionListLength > 0 && 
        <>
          <Question 
            questionId = {selectedQuestion.id} 
            question={selectedQuestion.question} 
            dropdownOptions={selectedQuestion.dropdownOptions} 
            questionType={selectedQuestion.questionType} 
            onSelect={(id,value)=>handelSelectetItem(id,value)}>
          </Question>
          <div className={styles.navigationButton}>
            {(questionListLength -1) === questionId ? 
              <Button onClick={handelSubmitClick} isSelected={isSelected} name={selectedQuestion.questionType}> {"Submit"} </Button>:
              <Button onClick={handelNextClick} isSelected={isSelected} name={selectedQuestion.questionType}> {"Next"} </Button>
            }
            { questionId !== 0 && <Button onClick={handelBackClick} isSelected={isSelected} name={selectedQuestion.questionType}> {"Back"} </Button>}
          </div>
        </>
      }
    </div>

  )

}

export default Pagination;