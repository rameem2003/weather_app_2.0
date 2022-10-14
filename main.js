const search_btn = document.getElementById("search");
const my_location = document.getElementById("my_loc");


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

        temp_max.innerHTML = `${data.main.temp_max} °C`;

        temp_min.innerHTML = `${data.main.temp_min} °C`;

        humi.innerHTML = `${data.main.humidity} %`;

        speed.innerHTML = `${data.wind.speed} Km/h`;
    })
})