// This is scientist Kelvins temperature reading today
 // Todays temperature
 const kelvin = 293;
 //celsius is 273 less than kelvin.
 const celsius = kelvin-273;
 // The formular below converts celsius to fahrenheit
 let fahrenheit = celsius * (9 / 5) + 32;
 //The fahrenheit values has been rounded to a whole figure
  fahrenheit = (Math.floor(fahrenheit));
  console.log(fahrenheit);
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
  let newton = celsius * (33/100);
  newton = (Math.floor(newton));
  console.log(`The temperature is ${newton} degree newton today`);
 