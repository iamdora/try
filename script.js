// Code goes here
// Code goes here

// Code goes here
// Code goes here
function validate()
{ 
   if( document.StudentRegistration.textname.value === "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.textname.focus() ;
     return false;
   }
   if (document.StudentRegistration.textname.value.match(/(.)\1{2,}/)) 
        {
       alert( "Your Name can't have more than two repeating characters!" );
     document.StudentRegistration.textname.focus() ;
    return false;  
    }
   
   if( document.StudentRegistration.lastname.value === "" )
   {
     alert( "Please provide your Last Name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.lastname.value === document.StudentRegistration.textname.value )
   {
     alert( "Your last name can't be same as your first name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }
   
   if ( ( StudentRegistration.sex[0].checked === false ) && ( StudentRegistration.sex[1].checked === false ) && ( StudentRegistration.sex[2].checked === false ))
   {
   alert ( "Please choose your Gender" );
   return false;
   }   
   if ( ( StudentRegistration.sex[0].checked === true ))
   {
   document.getElementById("e1").value = StudentRegistration.sex[0].value;
   
   }  
   if ( ( StudentRegistration.sex[1].checked === true ))
   {
   document.getElementById("e1").value =StudentRegistration.sex[1].value;
   
   }   
   if ( ( StudentRegistration.sex[2].checked === true ))
   {
   document.getElementById("e1").value = StudentRegistration.sex[2].value;
   
   }   
   
   
 var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");
 if (email === "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID");
     document.StudentRegistration.emailid.focus() ;
     return false;
 }
  if( document.StudentRegistration.dob.value === "" )
   {
     alert( "Please provide your DOB!" );
     document.StudentRegistration.dob.focus() ;
     return false;
   }
     
  if( document.StudentRegistration.mobileno.value === "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   
   if( StudentRegistration.password.value === "" )
   {
     alert( "Password can't be empty!" );
     document.StudentRegistration.password.focus() ;
     return false;
   }
   if (document.StudentRegistration.password.value.match(/^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/))
        {
       alert( "Password should consist of min 8 characters including 1 uppercase and 1 symbol" );
     document.StudentRegistration.password.focus() ;
    return false;  
    }
   
   
   
   if ( ( StudentRegistration.val[0].checked === false ) && ( StudentRegistration.val[1].checked === false ) && ( StudentRegistration.val[2].checked === false ))
   {
   alert ( "Please choose pan/aadhar/passport" );
   return false;
   } 
   
   if ( ( StudentRegistration.val[0].checked === true ))
   {
     document.getElementById("e2").value = StudentRegistration.val[0].value;
     
    if(!(StudentRegistration.panid.value.match(/^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/)))
   {
   alert("Please enter correct Pan number");
     return false;
    }

   }  
   
   if ( ( StudentRegistration.val[1].checked === true ))
   {
   document.getElementById("e2").value = StudentRegistration.val[0].value;
   if(!(StudentRegistration.panid.value.match(/^[2-9]{1}[0-9]{11}$/)))
   { 
     alert("Please enter correct Adhar number");
     return false;
   }
   
   
   }   
   
   if ( ( StudentRegistration.val[2].checked === true ))
   {document.getElementById("e2").value = StudentRegistration.val[2].value;
   
        if(!(StudentRegistration.panid.value.match(/[a-zA-Z]{1}[0-9]{7}/)))
        {
            alert("Please enter correct Passport number");
           return false;
        }
        
   
   }  
   
   
   return( true );
}


