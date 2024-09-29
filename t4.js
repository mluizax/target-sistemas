const stateRevenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(stateRevenue).reduce((acc, valor) => acc + valor, 0);

for (let state in stateRevenue) {
    let percentual = (stateRevenue[state] / total) * 100;
    console.log(`${state}: ${percentual.toFixed(2)}%`); }