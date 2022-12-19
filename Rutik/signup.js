let infoArr=JSON.parse(localStorage.getItem("info"))||[];

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    let Email=document.querySelector("#email").value;
    let mono=document.querySelector("#num").value;
    let passward=document.querySelector("#pass").value;
    let username=document.querySelector("#username").value;
    let FirstName=document.querySelector("#userFName").value;
    let LastName=document.querySelector("#userLName").value;
    let id= infoArr.length;
    let obj={
        Email,
        mono,
        passward,
        username,
        FirstName,
        LastName,
        id,
    }
    
    if(obj.Email==""){
        alert("Enter Email")
    }
    else if(obj.mono.length>10||obj.mono.length<10){
        alert("Please enter correct mobile number")
    }else if(infoArr.length>0){ 
     let msg="false"
     infoArr.forEach(function(el,i,array){
        
        if(el.Email==obj.Email){
            alert("Email is already exist")
            msg="false"
           
        }else if(el.mono==obj.mono){
            alert("Mobile number is already exist")
            msg="false"
            
        }else{
            msg="true"
        }
       
     })
         if(msg=="true"){
            infoArr.push(obj);
            alert("sign up succesful")
            window.location.href="./signin.html"
         }else{
            alert("enter correct details")
           
         }
         
    }else{
        infoArr.push(obj);
        alert("sign up succesful")
    }

    localStorage.setItem("info",JSON.stringify(infoArr));
})






