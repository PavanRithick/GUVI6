const asianCountries = countries.filter(country => country.region === "Asia");
console.log(asianCountries);

const lowPopulationCountries = countries.filter(country => country.population < 200000);
console.log(lowPopulationCountries);

countries.forEach(country => {
    console.log(`Name: ${country.name.common}, Capital: ${country.capital[0]}, Flag: ${country.flag}`);
});

const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
console.log(`Total Population: ${totalPopulation}`);

const usdCountries = countries.filter(country => 
    Object.values(country.currencies).some(currency => currency.name === "US Dollar"));