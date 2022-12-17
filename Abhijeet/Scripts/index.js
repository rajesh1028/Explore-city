//   Dropdownn
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //   Dropdownn
function myDropdownINR() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-contentinr");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  let Data_for_tripsvilla;
async function fetchData() {
  try {
    let res = await fetch("https://gold-salamander-shoe.cyclic.app/hotels");
    let data = await res.json();
    Data_for_tripsvilla = data
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function selectCity(city) {
  console.log(city);
  let data_city = Data_for_tripsvilla.filter((el) => {
    return el.city == city;
  });

  //  THIS KEY IS WHAT YOU HAVE TO USE IN YOUR FILE
  localStorage.setItem("data_city", JSON.stringify(data_city));
  window.location.href = "./second.html";
}

// console.log(Data_for_tripsvilla)
// document
//   .getElementById("submit_search_button")
//   .addEventListener("click", () => {
//     fetchData();
//     let city = document.querySelector("#location").value;
//     let data_city = Data_for_tripsvilla.filter((el) => {
//       return el.city == city;
//     });
//     localStorage.setItem("data_city", JSON.stringify(data_city));
//   });


  function getCity(id){
    let name = id.split("_");
    // console.log(name[0]);
    localStorage.setItem('city_Name',name[0])
    window.location.href = "../Punit/homesPage.html"
  }