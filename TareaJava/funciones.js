<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Funciones en JS</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f9f9;
      color: #333;
      margin: 0;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #006d77;
    }
    .card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      padding: 20px;
      margin: 20px auto;
      width: 90%;
      max-width: 500px;
    }
    button {
      background: #06d6a0;
      color: #fff;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background: #05b187;
    }
    pre {
      background: #edf6f9;
      padding: 10px;
      border-radius: 6px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h1>Funciones en JavaScript</h1>

  <div class="card">
    <h2>1. Tabla de multiplicar</h2>
    <input type="number" id="numeroTabla" placeholder="Número" />
    <input type="number" id="hastaTabla" placeholder="Hasta" />
    <button onclick="mostrarTabla()">Generar</button>
    <pre id="resultadoTabla"></pre>
  </div>

  <div class="card">
    <h2>2. Suma de pares (1–50)</h2>
    <button onclick="mostrarSumaPares()">Calcular</button>
    <pre id="resultadoPares"></pre>
  </div>

  <div class="card">
    <h2>3. Suma de primos (1–100)</h2>
    <button onclick="mostrarSumaPrimos()">Calcular</button>
    <pre id="resultadoPrimos"></pre>
  </div>

  <div class="card">
    <h2>4. Operaciones con binarios</h2>
    <input type="text" id="bin1" placeholder="Binario 1 (ej: 1010)" />
    <input type="text" id="bin2" placeholder="Binario 2 (ej: 0011)" />
    <select id="operacion">
      <option value="suma">Suma</option>
      <option value="resta">Resta</option>
      <option value="multiplicacion">Multiplicación</option>
      <option value="division">División</option>
    </select>
    <button onclick="mostrarOperacionBinaria()">Calcular</button>
    <pre id="resultadoBinario"></pre>
  </div>

  <div class="card">
    <h2>5. Conversión Hex ↔ Bin</h2>
    <input type="text" id="hex" placeholder="Hex (ej: 1F)" />
    <button onclick="hexABin()">Hex → Bin</button>
    <input type="text" id="bin" placeholder="Bin (ej: 11111)" />
    <button onclick="binAHex()">Bin → Hex</button>
    <pre id="resultadoConversion"></pre>
  </div>

  <script>
    // 1) Tabla de multiplicar
    function generarTabla(numero, hasta) {
      let tabla = [];
      let i = 1;
      while (i <= hasta) {
        tabla.push(`${numero} x ${i} = ${numero * i}`);
        i++;
      }
      return tabla;
    }
    function mostrarTabla() {
      const numero = parseInt(document.getElementById("numeroTabla").value);
      const hasta = parseInt(document.getElementById("hastaTabla").value);
      const resultado = generarTabla(numero, hasta).join("\n");
      document.getElementById("resultadoTabla").innerText = resultado;
    }

    // 2) Suma de pares
    function sumaPares() {
      let suma = 0;
      for (let i = 2; i <= 50; i += 2) {
        suma += i;
      }
      return suma;
    }
    function mostrarSumaPares() {
      document.getElementById("resultadoPares").innerText = sumaPares();
    }

    // 3) Suma de primos
    function esPrimo(n) {
      if (n < 2) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true
