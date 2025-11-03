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
});