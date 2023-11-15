let req = new XMLHttpRequest();

req.open('GET','https://restcountries.com/v3.1/all');

req.send();

req.onload = () => {
    let data = JSON.parse(req.response);
    // console.log(data);

    let totalPopulation = data.reduce((acc,curr) => acc + curr.population, 0);
    console.log("Total population is " + totalPopulation);
}