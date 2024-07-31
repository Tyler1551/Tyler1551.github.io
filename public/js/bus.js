window.onload = (event) =>{
    const key = '6u83f0xdujWnqBZM';
    const url = 'http://opendata.translinkniplanner.co.uk/Ext_API/XML_TRIP_REQUEST2?ext_macro=trip&type_origin=any&name_origin=10000011&type_destination=any&name_destination=10000013&excludedMeans=0';
    


    // Keep getting a CORS Error and I am going insane. 
    // Maybe use python script to call api and return data to js and populate front-end
    
    axios.get(url, {
        headers: {
            'X-API-TOKEN': key
        }
    }).then(response =>{
        console.log(response)
    });
}

