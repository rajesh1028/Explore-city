cityName = "goa";

async function fetcthHomesData() {
  try {
    let fetchedData = await fetch(
      "https://gold-salamander-shoe.cyclic.app/hotels"
    );
    let data = await fetchedData.json();
    displayData(data);
  } catch (err) {
    alert("something went wrong");
  }
}
fetcthHomesData();

function displayData(data) {
  let filterByCityData = data.filter((elem) => {
    return elem.city == cityName;
  });
  showCityNameAndResult(filterByCityData.length);
}

// Showing details in top section ciy name and total result
let appendcityNameAndResult=document.querySelector("#CityHHomes");
function showCityNameAndResult(tCount) {
  let cityNameAndResult = `<p>${cityName} Holiday Homes</p>
          <p>
            We have ${tCount} Vacation Rentals - search by dates for availability
          </p>`;
    appendcityNameAndResult.innerHTML = cityNameAndResult;
}
