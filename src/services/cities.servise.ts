import { Cities } from "interfaces/cities";

const getCitiesFromCountry = async (country: string): Promise<Cities | void> => {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
                    "country": country
          });

          const fetchCities = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
          })
                    .then(response => response.json())
                    .then((result: Cities) => { return result })
                    .catch(error => console.log('error', error));


          return fetchCities

}

export default getCitiesFromCountry
