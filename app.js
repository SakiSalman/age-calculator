const name = document.querySelector('#name');
const year = document.querySelector('#year');
const check_btn = document.querySelector('#check_btn');
const result = document.querySelector('#result');



check_btn.addEventListener('click', () => {

     if (name.value == "" || year.value == "") {
          
          return result.innerHTML = '<p class="alert alert-danger">Hi, all fields are required*</p>';


          
     
               
     
     }else{
               result.innerHTML = ageCal(name.value, year.value);
               name.value = '';
               year.value = '';

}
     
});




