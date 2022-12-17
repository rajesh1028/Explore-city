let homeRefID = sessionStorage.getItem("refid");
console.log(homeRefID);

async function getHomeData() {
  try {
    let fetchedhomeData = await fetch(
      `https://gold-salamander-shoe.cyclic.app/hotels?refid=${homeRefID}`
    );
    let data = await fetchedhomeData.json();
    displayHomesData(data);
  } catch (err) {
    alert("something went wrong");
  }
}
getHomeData();

// display homes data
function displayHomesData(data) {
    console.log(data)
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
        imgURLS.push(`<img class="images" src="${obj[elem]}" alt=""></img>`)
    }
    imgURLS = imgURLS.join("");
    console.log(imgURLS)
    slideImagesDiv.innerHTML = imgURLS;

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