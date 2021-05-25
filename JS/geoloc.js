async function geoloc () {
// 1 choper l'adrese ip de l'ordinateur via l'API : https://api.ipify.org?format=json
const ip = await fetch("https://api.ipify.org?format=json")
    .then(Resultat => Resultat.json())
    .then(json => json.ip)
// 2 Choper la ville grace a l'adresse IP : http://api.ipapi.com/api/161.185.160.93? access_key = YOUR_ACCESS_KEY
const ville = await fetch(`http://api.ipapi.com/api/${ip}?access_key=5c745a63453ef5be43d5e242fa9d158c`)
    .then(Resultat => Resultat.json())
    .then(json =>json.city)
// 3 Choper les informations meteo grace a la ville : http://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=bc9752ae85bb91066c7caa0ae2b4c27d
const meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&units=metric&appid=bc9752ae85bb91066c7caa0ae2b4c27d`)
.then(Resultat => Resultat.json())
.then(json => json) 

    let affichage = ville + " " + meteo.weather[0].description;
    document.querySelector("#villes").innerHTML = affichage;

}
geoloc()
// 4 afficher le resultat.

const btn = document.querySelector('button');
async function recherche () {
    const ville = document.querySelector('input').value;
    const meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=bc9752ae85bb91066c7caa0ae2b4c27d`)
    .then(Response=> Response.json())
    .then(json => json)
    
    let affichage = ville + " " + meteo.weather[0].description;
    document.querySelector("#villes").innerHTML = affichage;
}
btn.addEventListener('click' ,recherche);
document.querySelector('span').addEventListener('click', geoloc);