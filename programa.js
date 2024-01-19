alert('Te daré diez intentos para adivinar el número secreto');

const numeroMaximoPosible = 100;
let secretNumber = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let userNumber;
let intentos = 1;
let maximosIntentos = 10;

console.log(secretNumber);

// Bucle while (Mientras mi condición no se cumpla, entonces)()
while (userNumber != secretNumber) {
  // Elimina la declaración de la variable userNumber dentro del bucle
  userNumber = prompt(`Dime un número entre 1 y ${numeroMaximoPosible}`);
  console.log(userNumber);

  if (userNumber == secretNumber) {
    // Utilizar un solo mensaje en la consola
    alert(`Felicidades, adivinaste el número secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
    console.log(`¡Felicidades! Adivinaste el número secreto. En ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
  } else {
    // Función anidada (otra función dentro de la función)
    if (userNumber < secretNumber) {
      alert("Ups, el número secreto es incorrecto. Te daré una pista: el número es mayor");
      console.log("Ups, el número secreto es incorrecto");
    } else {
      alert("Ups, el número secreto es incorrecto. Te daré una pista: el número es menor");
      console.log("Ups, el número secreto es incorrecto");
    }
  }

  // Contador de intentos si el usuario no acierta
  intentos++;

  // Verifica si se superó el número máximo de intentos
  if (intentos > maximosIntentos) {
    alert(`Superaste el número máximo de ${maximosIntentos} intentos, vuelve mañana`);
    break; // Sale del bucle cuando se supera el número máximo de intentos
  }
}
