dados = [
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

genero_feminino = [pessoa["gênero"] for pessoa in dados if pessoa["gênero"] == "Feminino"]

qnt_femin = len(genero_feminino)

alturas_masculinas = [pessoa["altura"] for pessoa in dados if pessoa["gênero"] == "Masculino"]

if alturas_masculinas:
    media_altura_masc = int(sum(alturas_masculinas) / len(alturas_masculinas))

alturas = [pessoa["altura"] for pessoa in dados]

maior_altura = max(alturas)

menor_altura = min(alturas)


print(f"Maior altura: {maior_altura}cm.")
print(f"Menor altura: {menor_altura}cm.")
print(f"A média da altura das pessoas do gênero masculino é: {media_altura_masc}cm.")
print(f"O número de pessoas do gênero feminino é: {qnt_femin} pessoas.")
    