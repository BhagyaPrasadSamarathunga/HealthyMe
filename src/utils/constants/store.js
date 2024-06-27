const CALCULATE_CALORIE = 'calculateCalorie'; 

function calculateNeedCalories(){
    return {
        type: CALCULATE_CALORIE,
        defaultCalories: 0
    }
}
