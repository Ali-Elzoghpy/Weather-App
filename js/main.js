`use strict`
let myBtn = document.getElementById("inbtBtn")

myBtn.addEventListener("keyup",function(){
 let type = myBtn.value;

 getData(type)
 twoDays(type)
 twoDays2(type )

})

 
let fisrtArr;
  async function getData( type =`cairo`) {
    let req = await fetch(`https://api.weatherapi.com/v1/current.json?key=e9a79536d4664869916220926242112&q=${type}`)
    let data = await req.json()
    fisrtArr = data
    display()

  


  }
  getData()



  function display() {

    let temp = ""
    const days=  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month= ["January","February","March","April","May","June","July",
      "August","September","October","November","December"];
let date = new Date()
let today = days[date.getDay()]

let moth= month[date.getMonth()]





    temp += `   

            <div class=" rounded rounded-end-0  rounded-bottom-0   bg-card1 p-2 d-flex justify-content-between">
              <h6 >${today}</h6>
              <h6 class="">${date.getDate()} <span class="ms-1  "> ${moth}</span> </h6>

            </div>
            <div class="card-body  rounded rounded-end-0 rounded-top-0 p-4">
              <p class=" fs-3"> ${fisrtArr.location.name}</p>
                <h1 class=" my-size fw-bolder ">   ${fisrtArr.current.temp_c}<sub class="sub1">o</sub><span class="ms-md-2 ">C</spn> </h1>
            
        <img src=" https://${fisrtArr.current.condition.icon}" class="w-25   alt="">
              <p class="text-info">${fisrtArr.current.condition.text}</p>
              <div class="card-end  bg-end   "><i class="fa-solid fa-umbrella  "></i> 20%
                <i class="fa-solid fa-wind ms-2"></i> 18km/h 
                <i class="fa-regular fa-compass ms-2"></i> East</div>

            </div>


          `




    document.getElementById("1st").innerHTML = temp



  }
 let scoundArr = []
async function twoDays(type=`cairo`) {
  let req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e9a79536d4664869916220926242112&q=${type}&days=3`)
  let data =  await req.json()
  scoundArr = data.forecast
  

  display2()
   
}
twoDays()
function display2(){

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date( `${scoundArr.forecastday[1].date}` )



 let temp = ""

  temp += `
        

          <div class="rounded rounded-start-0 rounded-end-0 bg-card2   p-2 text-center">
            <h6 class="text-light ">${days[date.getDay()]}</h6>

          </div>

          <div class=" text-center rounded-top-0 mt-4 pt-4">
            <img src=" https://${scoundArr.forecastday[1].day.condition.icon}" class="w-10 "  alt="">
               <h3 class=" text-white fw-bolder">   ${scoundArr.forecastday[1].day.maxtemp_c}<sub class="sub2">o</sub>C</h3>
               <h5 class=" fw-bolder">   ${scoundArr.forecastday[1].day.mintemp_c}<sub class="sub2">o</sub>C</h5>
         
            <div class="card-end my-3 "><small class="text-info">${scoundArr.forecastday[1].day.condition.text}</small></div>
          

`
document.getElementById("2nd").innerHTML = temp 

}
 let thierdArr = []
async function twoDays2(type=`cario`) {
  let req = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e9a79536d4664869916220926242112&q=${type}&days=3`)
  let data =  await req.json()
  thierdArr = data.forecast



  display3()
   
}
twoDays2( )
function display3(){

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date( `${thierdArr.forecastday[2].date}` )



 let temp = ""

  temp += `
        

          <div class="rounded rounded-start-0 rounded-end bg-card1   p-2 text-center">
            <h6 class=" ">${days[date.getDay()]}</h6>

          </div>

          <div class=" text-center rounded-top-0 mt-4 pt-4">
            <img src=" https://${thierdArr.forecastday[2].day.condition.icon}" class="w-10 "  alt="">
               <h3 class=" text-white fw-bolder">   ${thierdArr.forecastday[2].day.maxtemp_c}<sub class="sub2">o</sub>C</h3>
               <h5 class=" bg-end fw-bolder">   ${thierdArr.forecastday[2].day.mintemp_c}<sub class="sub2">o</sub>C</h5>
         
            <div class="card-end my-3 "><small class="text-info">${thierdArr.forecastday[2].day.condition.text}</small></div>
          

`
document.getElementById("3rd").innerHTML = temp 

}






