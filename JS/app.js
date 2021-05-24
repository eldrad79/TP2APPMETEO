async function main () {
// 1 choper l'adrese ip de l'ordinateur via l'API : https://api.ipify.org?format=json
const ip = await fetch("https://api.ipify.org?format=json")
    .then(Response => Response.json())
    .then (json => json.ip)
// 2 Choper la ville grace a l'adresse IP : https://freegeoip.app/json/{IP_or_hostname}
const ville = await fetch('https://freegeoip.app/json/' + ip)
      .then(Response => Response.json())
      .then(json => json.city)
// 3 Choper les informations meteo grace a la ville : http://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=bc9752ae85bb91066c7caa0ae2b4c27d
const meteo = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&appid=bc9752ae85bb91066c7caa0ae2b4c27d`)
.then(response => response.json())
.then(json => json)
console.log(meteo)
console.log(ville)
};
// 4 afficher le resultat.
main();