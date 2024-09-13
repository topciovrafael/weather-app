import './style.css';
import overcast_img from "./bg.jpg";
import storm_img from "./storm.jpg";
import rain_img from "./rain.jpg";
import sunny_img from "./gb.jpg"
import night_img from "./night.jpg"
import incarcarePagina from './pagina';

incarcarePagina();

let oras;
let API_KEY='97950b7d44a643daa6f90928241309';
let info=[];

let containerLoader=document.createElement("div");
    containerLoader.classList.add("loader-container");
    let loader=document.createElement("div");
    loader.classList.add("loader");
    document.body.appendChild(containerLoader);
    containerLoader.appendChild(loader);

function deschidereLoader(){
    loader.style.display='flex';
    containerLoader.style.display='flex';
}

function inchidereLoader(){
    loader.style.display='none';
    containerLoader.style.display='none';
}


//fetch(`http://api.weatherapi.com/v1/gifs/translate?api_key=yAJhEj6BrWp9dLtXosAFg1Jg48kRmCT9&s=cats`, {mode: 'cors'})
async function vreme(oras){
    deschidereLoader();
    document.getElementById("content").style.border="3px solid black";
            document.getElementById("content").style.backgroundColor='rgba(255, 255, 255, 0.7)';
            document.getElementById("content").style.color="black";
            document.getElementById("nume-oras").style.borderBottomColor="black";
            document.getElementById("nume-oras").style.caretColor="black";
            document.getElementById("nume-oras").style.color="black";
    const url = `http://api.weatherapi.com/v1/current.json?key=7dad2eb8b23f480c8b0163859243006&q=${oras}`;
    await fetch(url).then(response => {
        if (!response.ok) {
            alert("The city is not found!");
        }
        return response.json();
    })
    .then(data => {
        //console.log(data);
        //const current = data.current;

        //const forecast = data.forecast.forecastday[0];
       // const astro = forecast.astro;
        document.getElementById("oras").innerHTML=data.location.name+', '+data.location.country;
        document.getElementById("temperatura").innerHTML=Math.round(data.current.temp_c)+"°C";
        console.log(data.current.condition.text+"23132");
        if(data.current.condition.text=="Sunny"){
            document.getElementById("stare").innerHTML=data.current.condition.text+' <i class="fa-solid fa-sun"></i>';
            document.body.style.backgroundImage = "url('gb.jpg')";
        }else if(data.current.condition.text=="Rainy"){
            document.getElementById("stare").innerHTML=data.current.condition.text+' <i class="fa-solid fa-cloud-rain"></i>';
            document.body.style.backgroundImage = "url('rain.jpg')";
        }else if(data.current.condition.text=="Overcast"){
            document.getElementById("stare").innerHTML=data.current.condition.text+' <i class="fa-solid fa-cloud"></i>';
            document.body.style.backgroundImage = "url('bg.jpg')";
        }
        if(!data.current.is_day){
            document.body.style.backgroundImage = "url('night.jpg')";
            document.getElementById("content").style.border="3px solid white";
            document.getElementById("content").style.backgroundColor="transparent";
            document.getElementById("content").style.color="white";
            document.getElementById("nume-oras").style.borderBottomColor="white";
            document.getElementById("nume-oras").style.caretColor="white";
            document.getElementById("nume-oras").style.color="white";
            document.getElementById("content").style.backdropFilter="blur(2px)";
        }
        document.getElementById("val-feels").innerHTML=Math.round(data.current.feelslike_c)+"°C";
        document.getElementById("val-wind").innerHTML=Math.round(data.current.wind_kph)+"km/h";
        document.getElementById("val-rain").innerHTML=Math.round(data.current.precip_mm)+"mm";
        document.getElementById("val-uv").innerHTML=Math.round(data.current.uv);
        document.getElementById("val-hum").innerHTML=Math.round(data.current.humidity)+"%";
        //document.getElementById("val-sunrise").innerHTML=astro.sunrise;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=7dad2eb8b23f480c8b0163859243006&q=${oras}`)
    .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data);
        document.getElementById("val-sunrise").innerHTML=data.astronomy.astro.sunrise;
        document.getElementById("val-sunset").innerHTML=data.astronomy.astro.sunset;
        //document.getElementById("oras").innerHTML=data.astronomy.location.name+', '+data.astronomy.location.country;
    })
    const date = new Date();

    let day = date.getDate()+7;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const options = {
        month: 'long',
        day: 'numeric',
      };

    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${oras}&days=8`)
    .then(response => {
        return response.json();
    }).then(data =>{
        console.log(data);
        let zile=[];
        
        let i=1;
        zile = document.querySelectorAll('.zi');
        zile.forEach((zi,index )=> {
            let ziua=new Date(data.forecast.forecastday[index].date);
            zi.innerHTML=ziua.toLocaleDateString('en-US', options);
            i++;
            let gradMare=document.createElement("div");
            let gradMic=document.createElement("div");
            let iconita=document.createElement("div");
            gradMare.innerHTML=Math.round(data.forecast.forecastday[index].day.maxtemp_c)+"°C";
            gradMic.innerHTML=Math.round(data.forecast.forecastday[index].day.mintemp_c)+"°C";
            if(data.forecast.forecastday[index].day.condition.text=="Sunny"){
                iconita.innerHTML=`<i class="fa-solid fa-sun"></i>`;
            }else if(data.forecast.forecastday[index].day.condition.text=="Moderate rain"){
                iconita.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
            }else if(data.forecast.forecastday[index].day.condition.text=="Overcast"||data.forecast.forecastday[index].day.condition.text=="Patchy rain nearby"||data.forecast.forecastday[index].day.condition.text=="Partly Cloudy "){
                iconita.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
            }
            zi.appendChild(iconita);
            zi.appendChild(gradMare);
            zi.appendChild(gradMic);
            gradMare.classList.add("maxima");
            gradMic.classList.add("minima");
            console.log(data.forecast.forecastday);

            console.log(Math.round(data.forecast.forecastday[index].day.maxtemp_c));
        
        });
        console.log(zile);
        //incarcarePagina();
        setTimeout(() => {
            inchidereLoader();
        }, 500);
        //document.getElementById("oras").innerHTML=data.astronomy.location.name+', '+data.astronomy.location.country;
    })
}



let buton=document.getElementById("cautare");
buton.addEventListener('click', function(){
    let ss=document.getElementById("nume-oras").value;
    vreme(ss);
});

vreme('Timisoara');
