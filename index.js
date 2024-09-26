// String de entrada
const input = "Chinelo";

function verifyString(string) {
  if (typeof string !== "string") {
    console.log("Informe apenas valores que sejam string");
  }

  let quantity = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "a") {
      quantity++;
    }
  }

  if (quantity === 0) {
    console.log(`A palavra ${string} não possui letra a`);
  } else {
    console.log(`A palavra ${string} possui ${letraA} letras a`);
  }

}

verifyString(input);