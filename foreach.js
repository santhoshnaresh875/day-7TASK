let req = new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all');
req.send();
req.onload = () => {
    let data = JSON.parse(req.response);
    // console.log(data);
    data.forEach(country => {
        console.log("Name of the country :");
        console.log(country.name.official);
        console.log("Capital of the country :");
        console.log(country.capital);
        console.log("Flag of the country :");
        console.log(country.flag);
        // console.log("Flags of the country :");
        // console.log(country.flags);
        console.log('\n');
    });
}