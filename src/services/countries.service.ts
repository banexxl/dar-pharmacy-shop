const getAllCountries = async () => {

          return await fetch('https://countriesnow.space/api/v0.1/countries/states', {
                    method: 'GET',
                    headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*'
                    }
          })
                    .then(res => res.json())
                    .then(json => {
                              return json
                    })
}

export default getAllCountries