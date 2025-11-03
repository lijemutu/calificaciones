document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calificaciones-form');
    const tablaContainer = document.getElementById('tabla-container');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const totalAciertos = parseInt(document.getElementById('total-aciertos').value);
        if (isNaN(totalAciertos) || totalAciertos <= 0) {
            alert('Por favor, introduce un número válido de aciertos.');
            return;
        }
        generarTabla(totalAciertos);
    });

    function generarTabla(totalAciertos) {
        let tablaHTML = '<table>';
        tablaHTML += '<thead><tr><th>Aciertos</th><th>Calificación</th></tr></thead>';
        tablaHTML += '<tbody>';

        for (let i = totalAciertos; i >= 0; i--) {
            const calificacion = (i * 10) / totalAciertos;
            tablaHTML += `<tr><td>${i}</td><td>${calificacion.toFixed(2)}</td></tr>`;
        }

        tablaHTML += '</tbody></table>';
        tablaContainer.innerHTML = tablaHTML;
    }

    const promedioForm = document.getElementById('promedio-form');
    const promedioResultado = document.getElementById('promedio-resultado');

    promedioForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const espanol = parseFloat(document.getElementById('espanol').value);
        const artes = parseFloat(document.getElementById('artes').value);
        const ingles = parseFloat(document.getElementById('ingles').value);

        if (isNaN(espanol) || isNaN(artes) || isNaN(ingles) ||
            espanol < 0 || espanol > 10 ||
            artes < 0 || artes > 10 ||
            ingles < 0 || ingles > 10) {
            alert('Por favor, introduce calificaciones válidas entre 0 y 10 para todas las materias.');
            return;
        }

        const promedio = (espanol + artes + ingles) / 3;
        promedioResultado.innerHTML = `Promedio del Bloque: ${promedio.toFixed(2)}`;
    });

    const cienciasMatematicasForm = document.getElementById('ciencias-matematicas-form');
    const cienciasMatematicasResultado = document.getElementById('ciencias-matematicas-resultado');

    cienciasMatematicasForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ciencias = parseFloat(document.getElementById('ciencias').value);
        const matematicas = parseFloat(document.getElementById('matematicas').value);

        if (isNaN(ciencias) || isNaN(matematicas) ||
            ciencias < 0 || ciencias > 10 ||
            matematicas < 0 || matematicas > 10) {
            alert('Por favor, introduce calificaciones válidas entre 0 y 10 para Ciencias y Matemáticas.');
            return;
        }

        const promedioCienciasMatematicas = (ciencias + matematicas) / 2;
        cienciasMatematicasResultado.innerHTML = `Promedio de Ciencias y Matemáticas: ${promedioCienciasMatematicas.toFixed(2)}`;
    });
});