const value = 123456.789;
const converter = new Intl.NumberFormat(
    "pt-BR",
    {maximumSignificantDigits: 4}
);

const currencyConverter = new Intl.NumberFormat(
    "pt-BR",
    {style: "currency", currency: "BRL"}
);

console.log(converter.format(value));
console.log(currencyConverter.format(value));