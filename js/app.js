window.addEventListener('load', ()=>{
    let lat;
    let lon

    let location = document.getElementById('location')
    let temprature = document.getElementById('temp')
    let wether = document.getElementById('description')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/'

            let api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c37e82b78c501370b166db19bd7d268b`

            fetch(api)
            .then(res=> res.json())
            .then(data => {

                let {temp} = data.main;
                let [{description,icon}] = data.weather
                let kelvin = Math.floor(temp - 273.15)

                temprature.textContent = kelvin
                location.textContent = data.name
                wether.textContent = description
                let img = document.getElementById('icon')
                img.src = `http://openweathermap.org/img/w/${icon}.png`
            })
        })

    }
})
