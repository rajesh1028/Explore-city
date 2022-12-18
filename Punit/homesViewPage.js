let homeRefID = sessionStorage.getItem("refid");

async function getHomeData() {
  try {
    let fetchedhomeData = await fetch(
      `https://gold-salamander-shoe.cyclic.app/hotels?refid=${homeRefID}`
    );
    let data = await fetchedhomeData.json();
    displayHomesData(data);
    getPriceData(data);
  } catch (err) {
    alert("something went wrong");
  }
}
getHomeData();

// display homes data
function displayHomesData(data) {
  let slideImagesDiv = document.querySelector("#slideImages");
  let obj = {
    url1: data[0].img_url,
    url2: data[0].img_url2,
    url3: data[0].img_url3,
    url4: data[0].img_url4,
    url5: data[0].img_url5,
  };
  let imgURLS = [];
  for (elem in obj) {
    imgURLS.push(`<img class="images" src="${obj[elem]}" alt=""></img>`);
  }
  imgURLS = imgURLS.join("");
  slideImagesDiv.innerHTML = imgURLS;
  // ...........................................Title display................................
  document.querySelector(
    "#titleDiv"
  ).innerHTML = `<h1 style="font-weight: lighter; color: rgb(106, 108, 109);">${data[0].title}</h1>
     <p style="font-weight: lighter; margin-top: 20px; color: rgb(106, 108, 109);">📌 ${data[0].city},${data[0].country}</p>`;
  document.querySelector(
    "#maxGuest"
  ).innerHTML = `<p>${data[0].maxguests} MAX GUESTS</p>`;

  //........................................... overview grid section...................
  document.querySelector("#overview").innerHTML = `<div>
            <h2>${data[0].type_of_property}</h2>
            <p>Type Of Property</p>
          </div>
          <div>
            <h2>${data[0].bathroom}</h2>
            <p>Bathrooms</p>
          </div>
          <div>
            <h2>${data[0].maxguests}</h2>
            <p>Max. Guests</p>
          </div>`;

  // ...................................keyAmenities.........................
  let keyAmenitiesArr = [];
  for (i = 0; i < data[0].Ammenities.length; i++) {
    keyAmenitiesArr.push(`<div><p>${data[0].Ammenities[i]}</p></div>`);
  }
  document.querySelector("#keyAmenities").innerHTML = keyAmenitiesArr.join("");

  // ...............................bedroomandbathroom..........................
  document.querySelector("#bedroomandbathroom").innerHTML = `
          <p>Bedroom ${data[0].bedroom}</p>
          <p>Bathroom ${data[0].bathroom}</p>`;

  // ..................................map..............................
  document.querySelector("#map").innerHTML = `
          <div class="gmap_canvas">
            <iframe
              width="1040px"
              height="300px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=${data[0].city}&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            ><a href="https://www.whatismyip-address.com/divi-discount/"></a
            ><br /><style>
              .mapouter {
                position: relative;
                text-align: right;
                height: 300px;
                width: 1040px;
              }</style
            ><a href="https://www.embedgooglemap.net"
              >add google map to website</a
            ><style>
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 300px;
                width: 1040px;
              }
            </style>
          </div>`;
}

// image slide function
let rightButon = document.querySelector("#slideButtonRight");
let leftButton = document.querySelector("#slideButtonLeft");

rightButon.addEventListener("click", function () {
  document.getElementById("slideImages").scrollLeft += 556;
});
leftButton.addEventListener("click", function () {
  document.getElementById("slideImages").scrollLeft -= 556;
});
// ********************************************price display function*******************************
let price;
let total = 0;
function getPriceData(data) {
  price = data[0].costpernight;
  document.querySelector("#appendPrice").innerText = price;
  document.querySelector("#appendTotal").innerText = total;
}
let bookBtn = document.querySelector("#bookBtn");
let checkinData = document.querySelector("#checkinData");
let checkoutData = document.querySelector("#checkoutData");
let noOfGuests = document.querySelector("#noOfGuests");
let dateAndGuests = document.querySelector("#noOfGuests");

// ...............................change events functions.............................
checkinData.addEventListener("change", function () {
  let date1 = new Date(checkinData.value);
  let date2 = new Date(checkoutData.value);
  let days = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  total = +price * +days * +noOfGuests.value;
  if (date2.getTime() <= date1.getTime()) {
    alert("please select correct Checkout Date");
  } else {
    if (isNaN(total)) {
      total = 0;
    }
    document.querySelector("#appendTotal").innerText = total;
  }
});
checkoutData.addEventListener("change", function () {
  let date1 = new Date(checkinData.value);
  let date2 = new Date(checkoutData.value);
  let days = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  total = +price * +days * +noOfGuests.value;
  if (date2.getTime() <= date1.getTime()) {
    alert("please select correct Checkout Date");
  } else {
    document.querySelector("#appendTotal").innerText = total;
  }
});
noOfGuests.addEventListener("change", function () {
  let date1 = new Date(checkinData.value);
  let date2 = new Date(checkoutData.value);
  let days = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
  total = +price * +days * +noOfGuests.value;
  if (days <= 0) {
    alert("please select correct dates");
  } else if (+noOfGuests.value <= 0) {
    alert("please fill correct no. of Guests");
  } else {
    document.querySelector("#appendTotal").innerText = total;
  }
});
bookBtn.addEventListener("click", function () {
  let obj = {
    total: total,
    refid: homeRefID,
    checkindate: checkinData.value,
    checkout: checkoutData.value,
    guests:noOfGuests.value
  };
  console.log(obj);
  sessionStorage.setItem("dataObject",JSON.stringify(obj))
  window.location.href="../Dhaanu I/cart.html"
});
