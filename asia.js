let req = new XMLHttpRequest();

req.open('GET','https://restcountries.com/v3.1/all');

req.send();

req.onload = () => {
    let data = JSON.parse(req.response);
    // console.log(data);

    let asianContinent = data.filter((country) => country.continents.includes('Asia') || country.region.includes('Asia'));
    console.log("Asian continent countires is: ");
    console.log(asianContinent);
}