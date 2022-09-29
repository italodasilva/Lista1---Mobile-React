import re
def ConverterBinario(n):
    if n <= 1:
        return str(n)
    else:
        return ConverterBinario(n // 2) + str(n % 2)

txt = open("sorteio.txt", "r")
bin = open("resposta.json", "w")
linha = txt.readline()
while linha:
    temp = linha.replace("\n","")
    if re.match(r'^([\s\d]+)$', temp):
        numero = int(temp)
        bin.write(f"{ConverterBinario(numero)}\n")
    else:
        bin.write("Valor Digitado Inválido!\n")
    linha = txt.readline()