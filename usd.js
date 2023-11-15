let req = new XMLHttpRequest();

req.open('GET', 'https://restcountries.com/v3/all');

req.send();

req.onload = () => {

        let data = JSON.parse(req.response);
        const usd = data.filter((country) => {
            // // Check if USD is one of the currencies of the country
            return (country.currencies && country.currencies.hasOwnProperty('USD'));
        });
        usd.forEach((country) => {
            console.log(country.name.common);
        });
};