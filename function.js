
/**
 * This is Agecalculation Function
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */
function ageCal (name, age){

     let date = new Date();
     age = date.getFullYear() - age;

     let sager = ageStatus(age); 

 return `
               <p class="alert alert-${sager.rong}">Hi ${name}, Your age is ${age} Years old and ${sager.name}</p>
          `



};


/**
 * This is Age stastus Function
 * @param {*} age 
 * @returns 
 */
function ageStatus (age){

     if (age > 0 && age < 10) {

          return {
               name : 'You are a Babu',
               rong : 'primary'
          }
          
     }else if (age >= 10 && age < 18){
          return {
               name : 'You are a Teen Ager',
               rong : 'Success'
          }
     }else if (age >= 18 && age < 35){
          return {
               name : 'You are a Young',
               rong : 'warning'
          }
     }else{
          return {
               name : 'You are a old',
               rong : 'danger'
          }
     }


};




