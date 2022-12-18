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


let RefID=sessionStorage.getItem("refid");

let information=JSON.parse(sessionStorage.getItem("dataObject"));
console.log(information,information["checkindate"])

async function getData()
{
    try{
        let fetchData=await fetch(`https://gold-salamander-shoe.cyclic.app/hotels?refid=${RefID}`)

        let data = await fetchData.json();
        display(data);

    }
    catch (err) {
        alert("something went wrong");
      }
}
getData();

function display(data){
    let selectedImage = document.querySelector("#image");
    let arr=[];
    console.log(data)
    arr.push(`<img id="cartimage"src="${data[0].img_url}" alt=""></img>`)
    arr = arr.join("");
    selectedImage.innerHTML = arr;

    let selected=document.querySelector("#selectedinfo");
    let array=[];
    array.push(
        `<h4 id="cartinfo">${data[0].title}</h4>`
    )
    array.push(
        `<p id="country">${data[0].city}  ${data[0].country}</p>`
    )
    array.push(
        `<p id="completeinfo" >${data[0].type_of_property} | Accommodates max ${data[0].maxguests} guests | <br>
        ${data[0].bathroom} Bathroom(s) | ${data[0].bedroom} Bedroom(s)  </p>`
    )
   
    array=array.join("")
    selected.innerHTML = array;

    let checkin = document.querySelector("#checkin");
    let checkout = document.querySelector("#checkout");
    let guests = document.querySelector("#num");
    let units = document.querySelector("#units");

    let date=[];
    date.push(
        `<h4 >${information.checkindate}</h4>`
    )
    date.push(
        `<h4 >Check In</h4>`
    )
    date=date.join("")
    checkin.innerHTML = date;
    date=[];
    date.push(
        `<h4 >${information.checkout}</h4>`
    )
    date.push(
        `<h4 >Check Out</h4>`
    )
    date=date.join("")
    checkout.innerHTML = date;
    date=[];
    date.push(
        `<h4 >Guests</h4>`
    )
    date.push(
        `<h4 >${information.guests}</h4>`
    )
   
    date=date.join("")
    guests.innerHTML = date;
    date=[];
    date.push(
        `<h4 >1</h4>`
    )
    date.push(
        `<h4 id="unit">Units</h4>`
    )
    units.innerHTML = date;

    let subtotal=document.querySelector("#subtotal");
    let discount=document.querySelector("#discount");
    let tax=document.querySelector("#tax");
    let total=document.querySelector("#total");
    let value=information.total;
    let taxvalue=(value*10)/100;
    totalamount=value+taxvalue;
    subtotal.innerText=`Sub Total ........................................................................................................................................  Rs${information.total}`
    discount.innerText=`Discount ...................................................................................................................................................  0`
    tax.innerText=`Tax ........................................................................................................................................................ Rs${taxvalue}`
    total.innerText=`Total ................................................................................................................... Rs ${totalamount}`



}



