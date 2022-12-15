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
function filterDataByCity(data) {
  let filterByCityData = data.filter((elem) => {
    return elem.city == cityName;
  });
  function filterByType(filterValue) {
    filterByCityData = filterByCityData.filter((elem) => {
      return elem.type_of_property == filterValue;
    });
  }
  showCityNameAndResult(filterByCityData.length);
  displayData(filterByCityData);
}

// filter by type function
document.querySelector("#homestay").addEventListener("click", function () {
  filterByType("homestay");
});
document.querySelector("#villas").addEventListener("click", function () {
  filterByType("villas");
});
document.querySelector("#hotel").addEventListener("click", function () {
  filterByType("hotel");
});
document.querySelector("#resort").addEventListener("click", function () {
  filterByType("resort");
});
document
  .querySelector("#serviced_appartment")
  .addEventListener("click", function () {
    filterByType("serviced appartment");
  });
document.querySelector("#farm").addEventListener("click", function () {
  filterByType("farm");
});

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
              <div>
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
