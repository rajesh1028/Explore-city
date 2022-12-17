let flag=false;

let choosedebit_button=document.getElementById("choosedebit");

choosedebit_button.addEventListener("click",chooseoptiondebit);

let imagetickdebitDiv=document.getElementById("imagetickdebit");

let buttonpayone=document.getElementById("buttonpayone");

let button=document.createElement("button");
    button.setAttribute("id","payonebutton");
    button.innerText="CHOOSE THIS METHOD";
    buttonpayone.append(button);

    buttonpayone.style.display = "none";

function chooseoptiondebit(event)
{
    document.getElementById("button").style.display = "none";
    document.getElementById("imagetickone").style.display = "none";
  
    let arr=[1];
    let mapping=arr.map((item)=>{
        return ` <img height="70" width="60" src="https://cdn-icons-png.flaticon.com/128/1828/1828649.png"
        alt="bluetick">`
    })
    imagetickdebitDiv.innerHTML=mapping.join(" ")
    buttonpayone.style.display = "block";
    imagetickdebitDiv.style.display="block"

    flag=true;
    document.querySelector("#payonebutton").addEventListener("click",choosepayone);
    
}

function choosepayone(event)
{
    buttonpayone.style.display = "none";
    document.getElementById("imagetickone").style.display = "block";
    imagetickdebitDiv.style.display="none"
    document.getElementById("button").style.display = "block";
    flag=false;
}

document.getElementById("agreeButton").addEventListener("click",paymentfun);

function paymentfun()
{
    if(!flag)
    {
        window.location.href="./paymentone.html"
    }
    else{
        window.location.href="./paymentcard.html"
    }
}




