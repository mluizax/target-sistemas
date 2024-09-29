//const billing = require('./dados.json');

const billing = [
	{
		"day": 1,
		"value": 22174.1664
	},
	{
		"day": 2,
		"value": 24537.6698
	},
	{
		"day": 3,
		"value": 26139.6134
	},
	{
		"day": 4,
		"value": 0.0
	},
	{
		"day": 5,
		"value": 0.0
	},
	{
		"day": 6,
		"value": 26742.6612
	},
	{
		"day": 7,
		"value": 0.0
	},
	{
		"day": 8,
		"value": 42889.2258
	},
	{
		"day": 9,
		"value": 46251.174
	},
	{
		"day": 10,
		"value": 11191.4722
	},
	{
		"day": 11,
		"value": 0.0
	},
	{
		"day": 12,
		"value": 0.0
	},
	{
		"day": 13,
		"value": 3847.4823
	},
	{
		"day": 14,
		"value": 373.7838
	},
	{
		"day": 15,
		"value": 2659.7563
	},
	{
		"day": 16,
		"value": 48924.2448
	},
	{
		"day": 17,
		"value": 18419.2614
	},
	{
		"day": 18,
		"value": 0.0
	},
	{
		"day": 19,
		"value": 0.0
	},
	{
		"day": 20,
		"value": 35240.1826
	},
	{
		"day": 21,
		"value": 43829.1667
	},
	{
		"day": 22,
		"value": 18235.6852
	},
	{
		"day": 23,
		"value": 4355.0662
	},
	{
		"day": 24,
		"value": 13327.1025
	},
	{
		"day": 25,
		"value": 0.0
	},
	{
		"day": 26,
		"value": 0.0
	},
	{
		"day": 27,
		"value": 25681.8318
	},
	{
		"day": 28,
		"value": 1718.1221
	},
	{
		"day": 29,
		"value": 13220.495
	},
	{
		"day": 30,
		"value": 8414.61
	}
]

let lowestValue = Infinity;
let greaterValue = -Infinity;
let sumBilling = 0;
let billingDays = 0;

billing.forEach(day => {
    if (day.value > 0) {
        if (day.value < lowestValue) lowestValue = day.value;
        if (day.value > greaterValue) greaterValue = day.value;
        sumBilling += day.value;
        billingDays++;
    }
});

const monthlyAverage = sumBilling / billingDays;
let daysAboveAverage = billing.filter(day => day.value > monthlyAverage).length;

console.log(`Menor valor de faturamento ocorrido em um dia do mês: ${lowestValue}`);
console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${greaterValue}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${daysAboveAverage}`);