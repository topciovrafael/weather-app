function incarcarePagina() {
    // Create main container div
    let content = document.createElement("div");
    content.setAttribute("id", "content");
    document.body.appendChild(content);

    // Create search section
    let parteSearch = document.createElement("div");
    parteSearch.setAttribute("id", "parte-search");
    content.appendChild(parteSearch);

    let inputOras = document.createElement("input");
    inputOras.setAttribute("type", "text");
    inputOras.setAttribute("id", "nume-oras");
    parteSearch.appendChild(inputOras);

    let iconCautare = document.createElement("i");
    iconCautare.classList.add("fa-solid", "fa-magnifying-glass");
    iconCautare.setAttribute("id", "cautare");
    parteSearch.appendChild(iconCautare);

    // Create city display section
    let divOras = document.createElement("div");
    divOras.setAttribute("id", "oras");
    divOras.textContent = "Timisoara, Romania";
    content.appendChild(divOras);

    // Create weather details section
    let divGrade = document.createElement("div");
    divGrade.setAttribute("id", "grade");
    content.appendChild(divGrade);

    // Large box section (chenar-mare)
    let divChenarMare = document.createElement("div");
    divChenarMare.setAttribute("id", "chenar-mare");
    divGrade.appendChild(divChenarMare);

    let divTemperatura = document.createElement("div");
    divTemperatura.setAttribute("id", "temperatura");
    divTemperatura.textContent = "19°C";
    divChenarMare.appendChild(divTemperatura);

    let divStare = document.createElement("div");
    divStare.setAttribute("id", "stare");
    divStare.textContent = "Rainy";
    divChenarMare.appendChild(divStare);

    let divFeelsLike = document.createElement("div");
    divFeelsLike.setAttribute("id", "feels-like");
    divFeelsLike.textContent = "Feels like";
    divChenarMare.appendChild(divFeelsLike);

    let divValFeels = document.createElement("div");
    divValFeels.setAttribute("id", "val-feels");
    divValFeels.textContent = "19°C";
    divChenarMare.appendChild(divValFeels);

    // Small box section 1 (prim-chenar-mic)
    let divPrimChenarMic = document.createElement("div");
    divPrimChenarMic.setAttribute("id", "prim-chenar-mic");
    divGrade.appendChild(divPrimChenarMic);

    // Wind section
    let divVant = document.createElement("div");
    divVant.setAttribute("id", "vant");
    divPrimChenarMic.appendChild(divVant);

    let divWindLabel = document.createElement("div");
    divWindLabel.textContent = "Wind";
    divVant.appendChild(divWindLabel);

    let divValWind = document.createElement("div");
    divValWind.setAttribute("id", "val-wind");
    divValWind.textContent = "5km/h";
    divVant.appendChild(divValWind);

    // Precipitation section
    let divSansePloaie = document.createElement("div");
    divSansePloaie.setAttribute("id", "sanse-ploaie");
    divPrimChenarMic.appendChild(divSansePloaie);

    let divPrecipitationLabel = document.createElement("div");
    divPrecipitationLabel.textContent = "Precipitation";
    divSansePloaie.appendChild(divPrecipitationLabel);

    let divValRain = document.createElement("div");
    divValRain.setAttribute("id", "val-rain");
    divValRain.textContent = "1mm";
    divSansePloaie.appendChild(divValRain);

    // UV Index section
    let divUVIndex = document.createElement("div");
    divUVIndex.setAttribute("id", "uv-index");
    divPrimChenarMic.appendChild(divUVIndex);

    let divUVIndexLabel = document.createElement("div");
    divUVIndexLabel.textContent = "UV Index";
    divUVIndex.appendChild(divUVIndexLabel);

    let divValUV = document.createElement("div");
    divValUV.setAttribute("id", "val-uv");
    divValUV.textContent = "2";
    divUVIndex.appendChild(divValUV);

    // Small box section 2 (doi-chenar-mic)
    let divDoiChenarMic = document.createElement("div");
    divDoiChenarMic.setAttribute("id", "doi-chenar-mic");
    divGrade.appendChild(divDoiChenarMic);

    let divUmiditate = document.createElement("div");
    divUmiditate.setAttribute("id", "umiditate");
    divDoiChenarMic.appendChild(divUmiditate);

    let divHumidityLabel = document.createElement("div");
    divHumidityLabel.textContent = "Humidity";
    divUmiditate.appendChild(divHumidityLabel);

    let divValHum = document.createElement("div");
    divValHum.setAttribute("id", "val-hum");
    divValHum.textContent = "50%";
    divUmiditate.appendChild(divValHum);

    let divRasarit = document.createElement("div");
    divRasarit.setAttribute("id", "rasarit");
    divDoiChenarMic.appendChild(divRasarit);

    let divSunriseLabel = document.createElement("div");
    divSunriseLabel.textContent = "Sunrise";
    divRasarit.appendChild(divSunriseLabel);

    let divValSunrise = document.createElement("div");
    divValSunrise.setAttribute("id", "val-sunrise");
    divValSunrise.textContent = "05:44";
    divRasarit.appendChild(divValSunrise);

    let divApus = document.createElement("div");
    divApus.setAttribute("id", "apus");
    divDoiChenarMic.appendChild(divApus);

    let divSunsetLabel = document.createElement("div");
    divSunsetLabel.textContent = "Sunset";
    divApus.appendChild(divSunsetLabel);

    let divValSunset = document.createElement("div");
    divValSunset.setAttribute("id", "val-sunset");
    divValSunset.textContent = "21:19";
    divApus.appendChild(divValSunset);

    // Weekly forecast section
    let divScris = document.createElement("div");
    divScris.setAttribute("id", "scris");
    divScris.textContent = "Weekly Forecast";
    content.appendChild(divScris);

    let divSaptamana = document.createElement("div");
    divSaptamana.setAttribute("id", "saptamana");
    content.appendChild(divSaptamana);

    // Populate days of the week
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    daysOfWeek.forEach(day => {
        let divZi = document.createElement("div");
        divZi.classList.add("zi");
        divZi.textContent = day;
        divSaptamana.appendChild(divZi);
    });
}

export default incarcarePagina;
