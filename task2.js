// 1. vypocet procentualniho podilu zeme na globalni populaci

const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

function populationPercentage(countryPopulation, totalPopulation = 8000000000) {
  let result = ((countryPopulation / totalPopulation) * 100).toFixed(2);
  return result;
}
/* kontrola - China
populationPercentage(countriesPopulation[0].population);
*/

/***************************************************************************************************** */

// 2. deep copy objektu countriesPopulation

const copyCountries = countriesPopulation.slice();

/* kontrola: 

copyCountries.splice(0, 5);

console.log(copyCountries);
console.log(countriesPopulation);

--> puvodni countriesPopulation se nezmeni

*/

/***************************************************************************************************** */
// 3. serazeni zemi podle poctu obyvatel, serazuji primo pole copyCountries!

copyCountries.sort((a, b) => a.population - b.population);

/* kontrola
console.log(copyCountries);
*/

/****************************************************************************************************** */
// 4. prirazeni vlastnosti "Id"

copyCountries.map(
  (item) => (item.id = item.country.slice(0, 3) + copyCountries.indexOf(item))
);

/* alternativne:
copyCountries.forEach(function (item) => item.id = item.country.slice(0, 3) + copyCountries.indexOf(item);
});
*/

/* kontrola
console.log(copyCountries);
*/

/******************************************************************************************************** */
// 5. pridani vlastnosti "percentage"

copyCountries.map(
  (item) => (item.percentage = populationPercentage(item.population))
);

/* kontrola
console.log(copyCountries);
*/

/********************************************************************************************************** */
// 6. filtrovani zemi podle kriterii

const filteredArray = copyCountries.filter(
  (item) =>
    item.country.length > 4 &&
    item.country.length <= 8 &&
    item.percentage > 1.5 &&
    item.percentage < 10
);

/* kontrola
console.log(copyCountries);
*/
