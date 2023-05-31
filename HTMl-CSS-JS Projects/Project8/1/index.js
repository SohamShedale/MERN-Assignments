let pass = document.getElementById('uPass')
let cpass = document.getElementById('cPass')
function checkPass(){
    if (pass.value!=cpass.value){
        // console.log(pass.value);
        // console.log(cpass.value);
        console.log('Password didn\'t matched. Password Validation Unsuccessfull');
    }
    else{
        // console.log(pass.value);
        // console.log(cpass.value);
        console.log('Password Matched. Password Validation Successfull');
    }
}