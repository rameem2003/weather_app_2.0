const search_btn = document.getElementById("search");
const my_location = document.getElementById("my_loc");
const theme_btn = document.getElementById("theme_btn");


my_location.addEventListener("click", () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("This Browser Not Support Geolocation");
    }
});


const onSuccess = (position) => {
    console.log(position);

    const {latitude, longitude} = position.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eda1ef54ac6b95c3b2e8d2ef681e6569&units=metric`).then((response) => response.json()).then((data) => {
        console.log(data);

        const wrapper = document.getElementById("wrapper");
        const containt = document.getElementById("containt");

        const city = document.getElementById("city")
        const temp = document.getElementById("temp")
        const state = document.getElementById("state")
        const temp_max = document.getElementById("temp_max")
        const temp_min = document.getElementById("temp_min")
        const icon = document.getElementById("icon")
        const humi = document.getElementById("humi")
        const speed = document.getElementById("speed")


        wrapper.style.height = "660px"
        containt.style.visibility = "visible"

        let formateCity = data.name

        city.innerHTML = `${formateCity.replace("District", "")}, ${data.sys.country}`;

        temp.innerHTML = `${data.main.temp}°C`

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`


        state.innerHTML = `${data.weather[0].main}`;

        temp_max.innerHTML = `<i class="fas fa-thermometer-full"></i> ${data.main.temp_max} °C`;

        temp_min.innerHTML = `<i class="fas fa-thermometer-half"></i> ${data.main.temp_min} °C`;

        humi.innerHTML = `<i class="fas fa-tint"></i> ${data.main.humidity} %`;

        speed.innerHTML = `<i class="fas fa-wind"></i> ${data.wind.speed} KMH`;

    })
}

const onError = (error) => {
    alert(error.massage)
}


search_btn.addEventListener("click", () => {
    const search_input = document.getElementById("cityName").value;

    const wrapper = document.getElementById("wrapper");
    const containt = document.getElementById("containt");

    const city = document.getElementById("city")
    const temp = document.getElementById("temp")
    const state = document.getElementById("state")
    const temp_max = document.getElementById("temp_max")
    const temp_min = document.getElementById("temp_min")
    const icon = document.getElementById("icon")
    const humi = document.getElementById("humi")
    const speed = document.getElementById("speed")


    wrapper.style.height = "660px"
    containt.style.visibility = "visible"


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_input}&units=metric&appid=eda1ef54ac6b95c3b2e8d2ef681e6569`).then((response) => response.json()).then((data) => {
        console.log(data);


        city.innerHTML = `${data.name}, ${data.sys.country}`;

        temp.innerHTML = `${data.main.temp}°C`

        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`


        state.innerHTML = `${data.weather[0].main}`;

        temp_max.innerHTML = `<i class="fas fa-thermometer-full"></i> ${data.main.temp_max} °C`;

        temp_min.innerHTML = `<i class="fas fa-thermometer-half"></i> ${data.main.temp_min} °C`;

        humi.innerHTML = `<i class="fas fa-tint"></i> ${data.main.humidity} %`;

        speed.innerHTML = `<i class="fas fa-wind"></i> ${data.wind.speed} Km/h`;
    })

})


// toggle function

theme_btn.addEventListener("click", () => {
    const search_input = document.getElementById("cityName");


    const body = document.querySelector("body");
    const wrapper = document.getElementById("wrapper");
    const tog = document.querySelector(".tog")
    const icon = document.getElementById("icon")

    wrapper.classList.toggle("dark")
    body.classList.toggle("dark")

    icon.classList.toggle("dark");
    search_input.classList.toggle("dark")
    search_btn.classList.toggle("dark")
    my_location.classList.toggle("dark")


    tog.classList.toggle("fa-sun")
})

