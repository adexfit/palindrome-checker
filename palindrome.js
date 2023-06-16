function palindrome(str) {

    let myStr = str
           .toLowerCase()
           .split("")
           .filter(obj => /[a-z]|[0-9]/.test(obj))
           .join('')
   
   let afterStr = str
           .toLowerCase()
           .split("")
           .reverse()
           .filter(obj => /[a-z]|[0-9]/.test(obj))
           .join('');
   
   if(myStr == afterStr){
       console.log(true)
       return true;
   }else{
     console.log(false)
     return false;
   }
   
}
   
   
   palindrome("eye");