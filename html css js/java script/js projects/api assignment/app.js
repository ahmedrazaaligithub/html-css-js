document.getElementById("btn").addEventListener('click',()=>{
    
    const city = document.getElementById('city').value;

    
    const weather = fetch(`https://api.weatherapi.com/v1/forecast.json?key=3de7a47ee5bd4401901115244230501&q=${city}&days=3`)
    weather.then((weatherData) => {
        return weatherData.json()
    }).then((weatherElement) => {

        
        console.log(weatherElement)
        let table = document.getElementById('cityy')
        table.innerHTML = `
        <div class="card-body text-center">
              <h5 class="card-title">City: ${city}</h5> <span> <img src='${weatherElement.current.condition.icon}'></span>
              <h6 class="card-subtitle mb-2 text-white">Current weather</h6>
              <p class="card-text py-2">
              ${weatherElement.current.feelslike_c} <sup>0</sup>C &
              ${weatherElement.current.feelslike_f} <sup>0</sup>F
      
             
            </div>
        `
    let wind=weatherElement.current.wind_dir
    if (wind=="SW"){
        breakit.innerHTML="(South West)"
     }
    else if (wind=="N"){
        breakit.innerHTML="(North)"
    }
    else if (wind=="NNE"){
        breakit.innerHTML="(North North East)"
    }
    else if (wind=="NE"){
        breakit.innerHTML="(North East)"
    }
    else if (wind=="ENE"){
        breakit.innerHTML="(East North East)"
    }
    else if (wind=="E"){
        breakit.innerHTML="(East)"
    }
    else if (wind=="ESE"){
        breakit.innerHTML="(East South East)"
    }
    else if (wind=="SE"){
        breakit.innerHTML="(South East)"
    }
    else if (wind=="SSE"){
        breakit.innerHTML="(South South East)"
    }
    else if (wind=="S"){
        breakit.innerHTML="(South)"
    }
    else if (wind=="SSW"){
        breakit.innerHTML="(South South West)"
    }
    else if (wind=="SW"){
        breakit.innerHTML="(South West)"
    }
    else if (wind=="SWS"){
        breakit.innerHTML="(South West South)"
    }else if (wind=="WSW"){
        breakit.innerHTML="(West South West)"
    }
    else if (wind=="W"){
        breakit.innerHTML="(West)"
    }
    else if (wind=="NWN"){
        breakit.innerHTML="(North West North)"
    }
    else if (wind=="NW"){
        breakit.innerHTML="(North West)"
    }
    else{
        breakit.innerHTML="(North North West)"
    }
    h1.innerHTML=`Forcast:${wind}`

    let html = ''
        weatherElement.forecast.forecastday.forEach(e => {
            html += `    <tr class="text-center">
        <td>${e.date}</td>
        <td>${e.astro.sunrise}</td>
        <td>${e.day.daily_chance_of_rain}%</td>
        <td>${e.day.avgtemp_c} <sup>0</sup>C</td>
        <td>${e.day.avgtemp_f} <sup>0</sup>F</td>
    </tr>`
            forecast.innerHTML = html

        });

    })

})
