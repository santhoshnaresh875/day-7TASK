let req = new XMLHttpRequest();

req.open('GET','https://restcountries.com/v3.1/all');

req.send();

req.onload = () => {
    let data = JSON.parse(req.response);
    // console.log(data);

    let population = data.filter((country) => country.population < 200000);
    console.log(population);
}