import { useState } from 'react';
import './App.css';
import ContainerView from '../src/views/ContainerView/ContainerView';
import AppContext from './store/AppContext';
import { BrowserRouter} from "react-router-dom";
function App() {
  const[bmiValue,setBmiValue] = useState(0);
  const[questionVisibility, setQuestionVisibility] = useState(true);
  return (
    <AppContext.Provider value={{ bmiValue, setBmiValue, questionVisibility, setQuestionVisibility }}>
      <BrowserRouter>
        <ContainerView/>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
