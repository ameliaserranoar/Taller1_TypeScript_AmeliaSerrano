import { series } from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-body")!;

function mostrarSeries(): void {
    series.forEach((serie) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="${serie.website}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
  
      row.addEventListener("click", () => {
        mostrarDetalleSerie(serie.id);
      });
  
      tableBody.appendChild(row);
    });
  }

function mostrarPromedioTemporadas(): void {
    const averageContainer: HTMLElement = document.getElementById("average-container")!;
    const totalTemporadas = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const promedio = totalTemporadas / series.length;
  
    averageContainer.innerText = `Promedio de temporadas: ${promedio.toFixed(2)}`;
  }

  function mostrarDetalleSerie(serieId: number): void {
    const serie = series.find(s => s.id === serieId);
    if (!serie) return;
  
    const card = document.getElementById("serie-detail")!;
    const img = document.getElementById("serie-image") as HTMLImageElement;
    const title = document.getElementById("serie-title")!;
    const desc = document.getElementById("serie-description")!;
    const link = document.getElementById("serie-link") as HTMLAnchorElement;
  
    img.src = serie.image;
    title.textContent = serie.name;
    desc.textContent = serie.description;
    link.href = serie.website;
  
    card.style.display = "block";
  }
  

mostrarSeries();
mostrarPromedioTemporadas();


