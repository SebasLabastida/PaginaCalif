document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("calificaciones-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario
 
        // Obtener los valores del formulario
        const matricula = document.getElementById("matricula").value;
        const nombre = document.getElementById("nombre").value;
        const ingles = parseFloat(document.getElementById("ingles").value);
        const matematicas = parseFloat(document.getElementById("matematicas").value);
        const espanol = parseFloat(document.getElementById("espanol").value);
 
        // Calcular el promedio
        const promedio = (ingles + matematicas + espanol) / 3;
 
        // Mostrar resultados en la tabla
        mostrarResultados(matricula, nombre, ingles, matematicas, espanol, promedio);
    });
});
 
function mostrarResultados(matricula, nombre, ingles, matematicas, espanol, promedio) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
<h2>Resultados</h2>
<table>
<tr>
<th>Matrícula</th>
<th>Nombre</th>
<th>Inglés</th>
<th>Matemáticas</th>
<th>Español</th>
<th>Promedio</th>
</tr>
<tr>
<td>${matricula}</td>
<td>${nombre}</td>
<td>${ingles}</td>
<td>${matematicas}</td>
<td>${espanol}</td>
<td>${promedio.toFixed(2)}</td>
</tr>
<tr>
<td colspan="5">Promedio General</td>
<td>${promedio.toFixed(2)}</td>
</tr>
</table>
    `;
}
