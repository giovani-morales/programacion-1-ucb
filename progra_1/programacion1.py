#Convertir un número decimal a binario, octal y hexadecimal
decimal = 42

binario = bin(decimal)
octal = oct(decimal)
hexadecimal = hex(decimal)

print("Decimal:", decimal)
print("Binario:", binario)
print("Octal:", octal)
print("Hexadecimal:", hexadecimal)

#Sumar dos números en binario y mostrar el resultado en decimal
bin1 = "1010"  # 10 en decimal
bin2 = "1101"  # 13 en decimal

suma_decimal = int(bin1, 2) + int(bin2, 2)
print("Resultado en decimal:", suma_decimal)

#Convertir un número hexadecimal a binario y viceversa
# Hexadecimal a binario
hex_num = "2F"
binario = bin(int(hex_num, 16))
print("Hexadecimal:", hex_num, "-> Binario:", binario)

# Binario a hexadecimal
bin_num = "101111"
hexadecimal = hex(int(bin_num, 2))
print("Binario:", bin_num, "-> Hexadecimal:", hexadecimal)

#Operaciones aritméticas básicas (suma, resta, multiplicación, división) en binario
a = "1010"  # 10
b = "0011"  # 3

# Conversión
a_dec = int(a, 2)
b_dec = int(b, 2)

# Operaciones
suma = bin(a_dec + b_dec)
resta = bin(a_dec - b_dec)
multiplicacion = bin(a_dec * b_dec)
division = bin(a_dec // b_dec)  # División entera

print("Suma:", suma)
print("Resta:", resta)
print("Multiplicación:", multiplicacion)
print("División:", division)

#Implementar una tabla de multiplicar usando while
num = 7
i = 1

while i <= 10:
    print(f"{num} x {i} = {num * i}")
    i += 1

#Calcular la suma de los números pares entre 1 y 50
suma_pares = 0

for i in range(1, 51):
    if i % 2 == 0:
        suma_pares += i

print("Suma de pares entre 1 y 50:", suma_pares)

#Calcular la suma de los números primos entre 1 y 100
def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

suma_primos = 0

for i in range(1, 101):
    if es_primo(i):
        suma_primos += i

print("Suma de primos entre 1 y 100:", suma_primos)
