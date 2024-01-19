alert('Te daré diez intentos para adivinar el número secreto');

let numeroMaximoPosible = 100;
let secretNumber = Math.floor(Math.random()*100)+1;
let userNumber;
let intentos = 1;
let maximosIntentos = 10;
//let palabraIntento = "intento";
console.log(secretNumber)

// Bucle while (Mientras mi condición no se cumpla, entonces)()
while (userNumber != secretNumber) {
  // Elimina la declaración de la variable userNumber dentro del bucle
  userNumber = prompt(`Dime un número entre 1 y ${numeroMaximoPosible}`);
  console.log(userNumber);

  if (userNumber == secretNumber) {
    //se está usando un operador ternario para simplificar un condicional if/else. El signo ? significa if y los dos puntos son para ejemplificar else 
    alert(`Lo lograste. En ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
  } else {
    // Función anidada (otra función dentro de la función)
    if (userNumber < secretNumber) {
      alert("Ups, el número secreto es incorrecto. Te daré una pista: el número es mayor");
    } else {
      alert("Ups, el número secreto es incorrecto. Te daré una pista: el número es mayor");
    }
  }

  // Contador de intentos si el usuario no acierta
  intentos = intentos + 1;
  palabraIntento = "intentos";
  // Verifica si se superó el número máximo de intentos
  if (intentos > maximosIntentos) {
    alert(`Superaste el número máximo de ${maximosIntentos} intentos, vuelve mañana`);
    break; // Sale del bucle cuando se supera el número máximo de intentos
  }
}