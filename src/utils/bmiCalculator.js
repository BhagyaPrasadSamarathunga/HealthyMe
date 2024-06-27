export default function Calculator(userInput) {
    let bmiValue = 0;
    if(userInput[0] !== undefined && userInput[1] !== undefined && userInput[2] !== undefined && userInput[3] !== undefined){
        if(userInput[0] == 'Male'){
            bmiValue = (8) + (1/userInput[1])*1200 +(1/userInput[2])*1500;
            if(userInput[3] == 'yes'){
                bmiValue = bmiValue + 10;
            }
            else {
                bmiValue = bmiValue - 10;
            }
            
        }
        else{
            bmiValue = (6) + (1/userInput[1])*120 +(1/userInput[2])*1500;
            if(userInput[3] == 'yes'){
                bmiValue = bmiValue + 8;
            }
            else {
                bmiValue = bmiValue - 8;
            }
        }
    }

    bmiValue = Math.round(bmiValue);
    console.log(bmiValue);
    return bmiValue;
}