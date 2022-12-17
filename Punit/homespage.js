cityName = "goa";
let DisplaycityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
async function fetcthHomesData() {
  try {
    let fetchedData = await fetch(
      "https://gold-salamander-shoe.cyclic.app/hotels"
    );
    let data = await fetchedData.json();
    filterDataByCity(data);
  } catch (err) {
    alert("something went wrong");
  }
}
fetcthHomesData();
// filter data function
let filterByCityData;
function filterDataByCity(data) {
  filterByCityData = data.filter((elem) => {
    return elem.city == cityName;
  });
  showCityNameAndResult(filterByCityData.length);
  displayData(filterByCityData);
}

// filter by type function
document.querySelector("#homestay").addEventListener("click", function () {
  filterByType("Homestay");
});
document.querySelector("#villas").addEventListener("click", function () {
  filterByType("Villa");
});
document.querySelector("#hotel").addEventListener("click", function () {
  filterByType("Hotel");
});
document.querySelector("#resort").addEventListener("click", function () {
  filterByType("Resort");
});
document
  .querySelector("#serviced_appartment")
  .addEventListener("click", function () {
    filterByType("Serviced Apartment");
  });
document.querySelector("#farm").addEventListener("click", function () {
  filterByType("Farm");
});
function filterByType(filterValue) {
  console.log(filterByCityData);
  filterByTypeData = filterByCityData.filter((elem) => {
    return elem.type_of_property == filterValue;
  });
  showCityNameAndResult(filterByTypeData.length);
  displayData(filterByTypeData);
}
// Showing details in top section ciy name and total result and in Holiday Homes section

let appendcityNameAndResult = document.querySelector("#CityHHomes");
function showCityNameAndResult(tCount) {
  let cityNameAndResult = `<p>${DisplaycityName} Holiday Homes</p>
          <p>
            We have ${tCount} Vacation Rentals - search by dates for availability
          </p>`;
  appendcityNameAndResult.innerHTML = cityNameAndResult;
  document.querySelector("#cityHH").innerText =
    DisplaycityName + " Holiday Homes";
}

// function DisplayData in manual slide getting data from filterDataByCity()>filterByCityData
let HHslideDiv = document.querySelector("#displayHHDataSlide");
function displayData(filteredData) {
  let filteredDataArr = filteredData.map((elem) => {
    console.log(elem);
    return `
            <div class="HHslideDataDiv">
              <img src="${elem.img_url}" alt="" />
              <div class="HHSlideTextDiv">
                <p style="color: rgb(143, 143, 143); margin-top: 5px; font-size: 12px;">Ref id #${
                  elem.refid
                }</p>
                <h4 style="color: rgb(30, 135, 240);margin-top: 10px;">
                  ${elem.title.substring(0, 38)}
                </h4>
                <p>${elem.city},${elem.country}</p>
                <p style="color: rgb(30, 135, 240);font-size: 12px; margin-top: 13px;">${
                  elem.type_of_property
                }</p>
                <span style="display: flex; align-items: baseline;"
                  ><h3 style="color: rgb(30, 135, 240);margin-top: 10px;">₹${
                    elem.costpernight
                  }</h3>
                  <p style="font-size:10px;">&nbsp; per night</p></span
                >
              </div>
            </div>`;
  });
  filteredDataArr = filteredDataArr.join("");
  HHslideDiv.innerHTML = filteredDataArr;
  let HHslideDataDiv = document.querySelectorAll(".HHslideDataDiv");
  for (dataDiv of HHslideDataDiv) {
    dataDiv.addEventListener("click", function () {
      console.log("hi");
    });
  }
}

// slide button function
let rightButon = document.querySelector("#HHButtonRight");
let leftButton = document.querySelector("#HHButtonLeft");

rightButon.addEventListener("click", function () {
  document.getElementById("displayHHDataSlide").scrollLeft += 900;
});
leftButton.addEventListener("click", function () {
  document.getElementById("displayHHDataSlide").scrollLeft -= 900;
});

let mapDiv = document.querySelector("#displayMap");
mapDiv.innerHTML = `
          <div class="gmap_canvas">
            <iframe
              width="1400px"
              height="350px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=${cityName}&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                height: 350px;
                width: 1400px;
              }</style
            ><a href="https://www.embedgooglemap.net"
              >add google map to website</a
            ><style>
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 350px;
                width: 1400px;
              }
            </style>
          </div>`;

let faqsMain = document.querySelector("#faqsMain");
faqsMain.innerHTML = `
          <p style="color: rgb(69, 69, 69)">
            Can I get a holiday home with swimming pool in ${DisplaycityName}?
          </p>
          <p style="font-weight: lighter; color: rgb(96, 96, 96)">
            Yes. We have close to 197 holiday homes with swimming pool in ${DisplaycityName}.
            You can also choose a villa or bungalow with a swimming pool. Each
            vacation rental will have its own swimming pool policies & timings
            though. Make sure you talk to the property manager or the owner when
            you make a reservation
          </p>
          <p style="color: rgb(69, 69, 69)">
            Can I get any accommodation in ${DisplaycityName} if I am travelling with my family or a group of friends?
          </p>
          <p style="font-weight: lighter; color: rgb(96, 96, 96)">
            You will have to choose number of bedrooms depending on the group size. 
            You can go for any of the 91 Apartments, 83 Villas. You can go for 46 1BHK, 
            56 2BHKS, 46 3BHKS, 24 4BHKS, 9 5BHKS holiday homes
          </p>
          <p style="color: rgb(69, 69, 69)">
            What are the different types of holiday homes I can get in ${DisplaycityName}?
          </p>
          <p style="font-weight: lighter; color: rgb(96, 96, 96)">
            ExploreCities has different types of holiday homes you can choose from in ${DisplaycityName}. 
            We have 91 Apartments, 5 Cottages, 10 Homestays, 28 Resorts, 74 Rooms, 83 Villas
          </p>`;




// Code Edit
  // let city_Name = localStorage.getItem('city_Name')