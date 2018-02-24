// Code goes here

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
     
  if( document.StudentRegistration.mobileno.value === "")
   {
     alert( "Please provide a Mobile No" );
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
   
   
   if( document.StudentRegistration.pg1.value === "" )
   {
     alert( "Please provide PG percentage!" );
     document.StudentRegistration.pg1.focus() ;
     return false;
   }
   if( document.StudentRegistration.pg2.value === "" )
   {
     alert( "Please provide PG passing year!" );
     document.StudentRegistration.pg2.focus() ;
     return false;
   }
   if( document.StudentRegistration.ug1.value === "" )
   {
     alert( "Please provide UG percentage!" );
     document.StudentRegistration.ug1.focus() ;
     return false;
   }
   if( document.StudentRegistration.ug2.value === "" )
   {
     alert( "Please provide UG year!" );
     document.StudentRegistration.ug2.focus() ;
     return false;
   }
   if( document.StudentRegistration.sc1.value === "" )
   {
     alert( "Please provide Higher Secondary percentage!" );
     document.StudentRegistration.sc1.focus() ;
     return false;
   }
   if( document.StudentRegistration.sc2.value === "" )
   {
     alert( "Please provide Higher Secondary Passing year!" );
     document.StudentRegistration.sc2.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.exp.value === "" )
   {
     alert( "Please Enter your experience in years" );
     document.StudentRegistration.exp.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.ps.value === "" )
   {
     alert( "Please Enter your Primary skills!" );
     document.StudentRegistration.ps.focus() ;
     return false;
   }
   if( document.StudentRegistration.ss.value === "" )
   {
     alert( "Please Enter your secondary skills!" );
     document.StudentRegistration.ss.focus() ;
     return false;
   }
   
   if( StudentRegistration.cc.value === "" )
   {
     alert( "Current ctc can't be empty!" );
     document.StudentRegistration.cc.focus() ;
     return false;
   }
   if (!(StudentRegistration.cc.value.match(/^[-+]?[0-9]+\.[0-9]+$/))) 
        {
       alert( "current ctc value should be decimal" );
     document.StudentRegistration.cc.focus() ;
    return false;  
    }
    
//EXPECTED CTC
if( StudentRegistration.ec.value === "" )
   {
     alert( "Expected ctc can't be empty!" );
     document.StudentRegistration.ec.focus() ;
     return false;
   }
   if (!(StudentRegistration.ec.value.match(/^[-+]?[0-9]+\.[0-9]+$/))) 
        {
       alert( "expected ctc should be in decimal" );
     document.StudentRegistration.ec.focus() ;
    return false;  
    }
   
   if( document.StudentRegistration.reason.value === "" )
   {
     alert( "Please provide reason for change!" );
     document.StudentRegistration.reason.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.notice.value === "" )
   {
     alert( "Please provide notice period!" );
     document.StudentRegistration.notice.focus() ;
     return false;
   }
   
   if ( ( StudentRegistration.sn[0].checked === false ) && ( StudentRegistration.sn[1].checked === false ) )
   {
   alert ( "You have to check yes or no for serving notice" );
  
   return false;
   } 
   
   if ( ( StudentRegistration.sn[0].checked === true )  )
   {
   document.getElementById("e3").value = StudentRegistration.sn[0].value;
   } 
   
   if ( ( StudentRegistration.sn[1].checked === true )  )
   {
   document.getElementById("e3").value = StudentRegistration.sn[1].value;
   } 
  
   
   if( document.StudentRegistration.cl.value === "" )
   {
     alert( "Please provide your current location!" );
     document.StudentRegistration.cl.focus() ;
     return false;
   }
   
   if( document.StudentRegistration.pl.value === "" )
   {
     alert( "Please provide your preferred location!" );
     document.StudentRegistration.pl.focus() ;
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
   
   if( StudentRegistration.agree.checked === false )
   {
     alert( "Agree to terms and conditions" );
     return false;
   }
   
   alert("Registration Successful");
   
   return( true );
}


