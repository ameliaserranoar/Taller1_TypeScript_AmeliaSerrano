import { series } from "./data.js";
const tableBody = document.getElementById("series-body");
function mostrarSeries() {
    series.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="${serie.website}" target="_blank">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    });
}
function mostrarPromedioTemporadas() {
    const averageContainer = document.getElementById("average-container");
    const totalTemporadas = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const promedio = totalTemporadas / series.length;
    averageContainer.innerText = `Promedio de temporadas: ${promedio.toFixed(2)}`;
}
mostrarSeries();
mostrarPromedioTemporadas();
