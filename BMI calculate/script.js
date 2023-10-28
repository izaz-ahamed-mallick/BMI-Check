const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
   e.preventDefault();

   const height =parseInt( document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector("#result")
  

   if(height === '' || height<0 || isNaN(height)){
     result.innerHTML = `Please Give A Valid Weight `;
   }
   else if (weight === "" || height < 0 || isNaN(weight)){
    result.innerHTML = `Please Give A Valid Weight`
   }
   else if (typeof height === 'number' && typeof weight === 'number'){
      const bmi = (weight / ((height * height)/10000)).toFixed(2);

   if(bmi <18.6){
        
        result.innerHTML = ` Result is : Under Weight <span>${bmi}</span>`
       }
        if(bmi>18.6 && bmi<24.9){
       
        result.innerHTML = ` Result is : Normal Weight  <span>${bmi}</span>`
       }
        if (bmi>24.9){
        
        result.innerHTML = ` Result is : Overweight <span>${bmi}</span>`
       }

   }
    

  
})