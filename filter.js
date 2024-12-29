const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45];

const numeroMaiorCinco = numeros.filter((valor) => {
  return valor > 20;
});

for (const [i, v] of numeroMaiorCinco.entries()) {
  console.log(`index ${i} and value ${v}`);
}
