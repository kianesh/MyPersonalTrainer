const male = document.querySelector('#Male');
const female = document.querySelector('#Female');

const activity = document.querySelector('#activity');
const maintain = document.querySelector('#maintain');
const lose = document.querySelector('#lose');
const gain = document.querySelector('#gain');


maintain.addEventListener('change', function() {
  if (maintain.checked) {
    activity.style.display = 'block';
  } else {
    activity.style.display = 'none';
  }
});

lose.addEventListener('change', function() {
    if (lose.checked) {
      activity.style.display = 'block';
    } else {
        activity.style.display = 'none';
    }
  });

gain.addEventListener('change', function() {
    if (gain.checked) {
        activity.style.display = 'block';
    } else {
        activity.style.display = 'none';
    }
  });



// const bodyTypeMen = document.querySelector('#bodyTypeMen');
// const bodyTypeWomen = document.querySelector('#bodyTypeWomen');

// male.addEventListener('change', function() {
//   if (male.checked) {
//     bodyTypeMen.style.display = 'block';
//     bodyTypeWomen.style.display = 'none';
//   } else {
//     bodyTypeMen.style.display = 'none';
//   }
// });

// female.addEventListener('change', function() {
//     if (female.checked) {
//       bodyTypeWomen.style.display = 'block';
//       bodyTypeMen.style.display = 'none';
//     } else {
//       bodyTypWomen.style.display = 'none';
//     }
//   });

let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    const resultBF = document.getElementById('outputBF');
    const resultGoal = document.getElementById('outputGoals');

    let height_status=false, weight_status=false, age_status=false, gender_status=false;    

    if(!male.checked && !female.checked) {
        document.getElementById('gender_error').innerHTML = 'Please select a gender';
    }else{
        document.getElementById('gender_error').innerHTML = '';
        gender_status=true;
    }

    if(age === '' || isNaN(age) || (age <= 0)){
        document.getElementById('age_error').innerHTML = 'Please provide a valid age';
    }else{
        document.getElementById('age_error').innerHTML = '';
        age_status=true;
    }

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status && age_status && gender_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        // BMI Calc

        if(bmi < 18.6){
            result.innerHTML = 'BMI: ' + bmi + ' (Underweight)';
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'BMI: ' + bmi + ' (Normal)';
        }else{
            result.innerHTML = 'BMI: ' + bmi + ' (Overweight)';
        }

        // Body Fat Percentage Calc

        if(age < 18 && male.checked){
            const bfB = (1.51 * bmi - 0.70 * age - 2.2).toFixed(2)

            if(bfB < 10){
                resultBF.innerHTML = 'Body Fat: ' + bfB + ' (Underweight)';
            }else if(bfB < 20 && bfB >= 10){
                resultBF.innerHTML = 'Body Fat: ' + bfB + ' (Normal)';
            }else{
                resultBF.innerHTML = 'Body Fat: ' + bfB + ' (Overweight)';
            }
        }
       
        if(age > 18 && male.checked){
            const bfAM = (1.20 * bmi + 0.23 * age - 16.2).toFixed(2)

            if(bfAM < 10){
                resultBF.innerHTML = 'Body Fat: ' + bfAM + ' (Underweight)';
            }else if(bfAM < 20 && bfAM >= 10){
                resultBF.innerHTML = 'Body Fat: ' + bfAM + ' (Normal)';
            }else{
                resultBF.innerHTML = 'Body Fat: ' + bfAM + ' (Overweight)';
            }
        }

        if(age < 18 && female.checked){
            const bfG = (1.20 * bmi + 0.23 * age - 16.2).toFixed(2)

            if(bfG < 10){
                resultBF.innerHTML = 'Body Fat: ' + bfG + ' (Underweight)';
            }else if(bfG < 20 && bfG >= 10){
                resultBF.innerHTML = 'Body Fat: ' + bfG + ' (Normal)';
            }else{
                resultBF.innerHTML = 'Body Fat: ' + bfG + ' (Overweight)';
            }
        }

        if(age > 18 && female.checked){
            const bfAF = (1.20 * bmi + 0.23 * age - 16.2).toFixed(2)

            if(bfAF < 10){
                resultBF.innerHTML = 'Body Fat: ' + bfAF + ' (Underweight)';
            }else if(bfAF < 20 && bfAF >= 10){
                resultBF.innerHTML = 'Body Fat: ' + bfAF + ' (Normal)';
            }else{
                resultBF.innerHTML = 'Body Fat: ' + bfAF + ' (Overweight)';
            }
        }

        // Calorie Calc

        const calMaintainMaleS = (((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.2);
        const calMaintainFemaleS = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * 1.2);

        const calMaintainMaleL = (((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.375);
        const calMaintainFemaleL = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * 1.375);

        const calMaintainMaleM = (((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.55);
        const calMaintainFemaleM = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * 1.55);

        const calMaintainMaleV = (((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.725);
        const calMaintainFemaleV = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * 1.725);

        const calMaintainMaleE = (((10 * weight) + (6.25 * height) - (5 * age) + 5)* 1.9);
        const calMaintainFemaleE = (((10 * weight) + (6.25 * height) - (5 * age) - 161) * 1.9);

        const s = document.querySelector('#sedentary')
        const l = document.querySelector('#light')
        const m = document.querySelector('#moderate')
        const v = document.querySelector('#very')
        const e = document.querySelector('#extreme')

        // sedentary male

        if(male.checked && maintain.checked && s.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainMaleS + ' calories a day';
        }

        if(male.checked && lose.checked && s.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainMaleS + ' calories a day';
        }

        if(male.checked && gain.checked && s.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainMaleS + ' calories a day';
        }

        // light male

        if(male.checked && maintain.checked && l.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainMaleL + ' calories a day';
        }

        if(male.checked && lose.checked && l.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainMaleL + ' calories a day';
        }

        if(male.checked && gain.checked && l.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainMaleL + ' calories a day';
        }

        // moderate male

        if(male.checked && maintain.checked && m.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainMaleM + ' calories a day';
        }

        if(male.checked && lose.checked && m.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainMaleM + ' calories a day';
        }

        if(male.checked && gain.checked && m.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainMaleM + ' calories a day';
        }

        // very male

        if(male.checked && maintain.checked && v.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainMaleV + ' calories a day';
        }

        if(male.checked && lose.checked && v.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainMaleV + ' calories a day';
        }

        if(male.checked && gain.checked && v.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainMaleV + ' calories a day';
        }

        // extreme male

        if(male.checked && maintain.checked && e.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainMaleE + ' calories a day';
        }

        if(male.checked && lose.checked && e.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainMaleE + ' calories a day';
        }

        if(male.checked && gain.checked && e.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainMaleE + ' calories a day';
        }

         // sedentary female

        if(female.checked && maintain.checked && s.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainFemaleS + ' calories a day';
        }

        if(female.checked && lose.checked && s.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainFemaleS + ' calories a day';
        }

        if(male.checked && gain.checked && s.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainFemaleS + ' calories a day';
        }

        // light female

        if(female.checked && maintain.checked && l.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainFemaleL + ' calories a day';
        }

        if(female.checked && lose.checked && l.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainFemaleL + ' calories a day';
        }

        if(female.checked && gain.checked && l.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainFemaleL + ' calories a day';
        }

        // moderate female

        if(female.checked && maintain.checked && m.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainFemaleM + ' calories a day';
        }

        if(female.checked && lose.checked && m.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainFemaleM + ' calories a day';
        }

        if(female.checked && gain.checked && m.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainFemaleM + ' calories a day';
        }

        // very female

        if(female.checked && maintain.checked && v.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainFemaleV + ' calories a day';
        }

        if(female.checked && lose.checked && v.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainMaleV + ' calories a day';
        }

        if(female.checked && gain.checked && v.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainFemaleV + ' calories a day';
        }

        // extreme female

        if(female.checked && maintain.checked && e.checked){
            resultGoal.innerHTML = 'In order to maintain weight, you must intake ' + calMaintainFemaleE + ' calories a day';
        }

        if(female.checked && lose.checked && e.checked){
            resultGoal.innerHTML = 'In order to lose weight, you must intake less than ' + calMaintainFemaleE + ' calories a day';
        }

        if(female.checked && gain.checked && e.checked){
            resultGoal.innerHTML = 'In order to gain weight, you must intake more than' + calMaintainFemaleE + ' calories a day';
        }

        
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});