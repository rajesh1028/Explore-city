var x=document.getElementById("signup");
var y=document.getElementById("sign");
var z=document.getElementById("BTN");

let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")

btn2.addEventListener("click",(event)=>{
   x.style.left="-450px";
   y.style.left="50px";
   z.style.left="110px";
   
})
btn1.addEventListener("click",(event)=>{
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0";
 
 })
// -----------------------------------------------------------------------------

 let submit_btn=document.querySelector('#signup');
 submit_btn.addEventListener("submit", (event)=>{
     event.preventDefault();
     let all_input_tag=document.querySelectorAll("#signup input");
    let data={}
     for(let i=0; i<all_input_tag.length-2; i++){
        data[all_input_tag[i].id]=all_input_tag[i].value;
     }
     RegisterUser(data)
 })

async function RegisterUser(data){
    try{
        let register_request=await fetch(""{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if((register_request.ok===true&&data.Email=="admin@gmail.com"&&data.Password=="admin"){
            window.location.href=""
        }else if(register_request.ok===true){
            alert("Sign Up Succesful")
            
        }
     
    }
    catch(error){
        alert("Bad Request");
    }
}









// ---------------------------------------------------------------------------