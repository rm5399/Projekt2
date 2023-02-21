const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

function checkCountry(country, countries) {
  if (typeof country !== "string" || country.length < 1) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexe ${countries.indexOf(
        country
      )}.`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  }
}

// checkCountry("Egypt", countries);

function addCountry(country, countries) {
  if (typeof country !== "string" || country.length < 1) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} se již nachází v sezname krajin na indexu ${countries.indexOf(
        country
      )}.`
    );
  } else {
    countries.push(country);
    let indexKrajiny = countries.indexOf(country);
    let delkaSeznamu = countries.length;
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${indexKrajiny}. Celkový počet krajin v seznamu je ${delkaSeznamu}.`
    );
  }
}

// addCountry("Poland", countries);

function removeCountry(country, countries) {
  if (typeof country !== "string" || country.length < 1) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Aktuální počet krajin v seznamu je ${countries.length - 1}.`
    );
    countries.splice(countries.indexOf(country), 1);
    console.log(countries);
  } else if (countries.includes(country) === false) {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
}

// removeCountry("Vietnam", countries);
