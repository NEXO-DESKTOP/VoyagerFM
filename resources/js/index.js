  // Function to load and read the CSV file
  async function loadCSV() {
    const filePath = "/favfile.csv";
    const response = await fetch(filePath);
    return response.text();
}

// Función para procesar el CSV y generar el HTML
function generateHTMLFromCSV(csvData) {
    // Dividir el CSV en líneas
    const lines = csvData.trim().split('\n');
    
    // Extraer los encabezados (primera línea)
    const headers = lines[0].split(',');

    // Inicializar una cadena para el HTML
    let htmlOutput = "";

    // Recorrer cada línea del CSV, comenzando desde la segunda línea (los datos)
    for (let i = 1; i < lines.length; i++) {
        // Separar cada línea en valores
        const values = lines[i].split(',');

        // Crear un objeto para almacenar los datos de la fila
        const rowData = {};
        headers.forEach((header, index) => {
            rowData[header.trim()] = values[index].trim();
        });

        // Generar el HTML para cada fila
        htmlOutput += `
        <div id="fav_fm_${rowData.ID}" class="leftBarSectionCard">
            <span class="sIcons">${rowData.Icon}</span> ${rowData.Name}
        </div>`;
    }

    // Insertar el HTML generado en el DOM
    document.getElementById('fav_fm_bar').innerHTML = htmlOutput;
}

// Cargar el archivo CSV y procesarlo
loadCSV('favfile.csv')
    .then(csvData => generateHTMLFromCSV(csvData))
    .catch(error => console.error('Error al cargar el CSV:', error));


// app.js

async function navigate() {
    let path = document.getElementById('currentPath').value;
    try {
        let entries = await Neutralino.filesystem.readDirectory(path);
        let fileList = document.getElementById('fileList');
        fileList.innerHTML = ''; // Limpiar la lista actual
        
        entries.forEach(entry => {
            let div = document.createElement('div');
            div.innerText = `${entry.type}: ${entry.entry}`;
            div.onclick = () => {
                if(entry.type === 'DIRECTORY') {
                    document.getElementById('currentPath').value = path + '/' + entry.entry;
                    navigate(); // Navegar al directorio
                } else {
                    alert('Seleccionaste el archivo: ' + entry.entry);
                }
            };
            fileList.appendChild(div);
        });
    } catch (err) {
        alert('Error al leer el directorio: ' + err.message);
    }
}

// Inicializar en la ruta raíz
document.getElementById('currentPath').value = NL_PATH;
navigate();