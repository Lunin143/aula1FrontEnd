let dados = [
    {"gênero": "Masculino", "altura": 182},
    {"gênero": "Feminino", "altura": 165},
    {"gênero": "Masculino", "altura": 175},
    {"gênero": "Feminino", "altura": 160},
    {"gênero": "Masculino", "altura": 190},
    {"gênero": "Feminino", "altura": 172},
    {"gênero": "Masculino", "altura": 178},
    {"gênero": "Feminino", "altura": 155},
    {"gênero": "Masculino", "altura": 185},
    {"gênero": "Feminino", "altura": 168},
    {"gênero": "Masculino", "altura": 174},
    {"gênero": "Feminino", "altura": 162},
    {"gênero": "Masculino", "altura": 188},
    {"gênero": "Feminino", "altura": 159},
    {"gênero": "Masculino", "altura": 180}
]

let generoFeminino = dados.filter(femin => femin.gênero === "Feminino");

let qntFeminino = generoFeminino.length;

let generoMasculino = dados.filter(masc => masc.gênero === "Masculino");

let maiorAltura = dados.reduce((maior, pessoa) => 
    pessoa.altura > maior.altura ? pessoa : maior);

let menorAltura = dados.reduce((menor, pessoa) =>
    pessoa.altura < menor.altura ? pessoa : menor);

let sumAlturaHomem = generoMasculino.reduce((total, alturas) => total + alturas.altura, 0);

let mediaAlturaHomem = sumAlturaHomem / generoMasculino.length;

console.log("Maior altura: " + maiorAltura.altura + "cm.");
console.log("Menor altura: " + menorAltura.altura + "cm.");
console.log("A média da altura das pessoas do gênero masculino é: " + mediaAlturaHomem + "cm.");
console.log("O número de pessoas do gênero feminino é: " + qntFeminino + " pessoas.");
