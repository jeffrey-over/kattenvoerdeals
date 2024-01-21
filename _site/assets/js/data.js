// AJAX-verzoek om JSON-bestand te laden
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // JSON-parsing
    var dealInfo = JSON.parse(xhr.responseText);

    // Dynamisch updaten van de HTML met de deal-informatie
    document.getElementById('dealInfoContainer').innerHTML +=
      `<div class="mt-4">
        <p class="text-gray-700 font-semibold">${dealInfo.merk}</p>
        <p class="text-gray-700 font-semibold">${dealInfo.product}</p>
        <p class="text-gray-700 font-semibold">${dealInfo.bedrijf}</p>
        <p class="text-gray-700 font-semibold"><s>${dealInfo.oude_prijs}</s></p>
        <p class="text-green-500 font-semibold">${dealInfo.nieuwe_prijs}</p>
        <p class="text-gray-400 text-sm">${dealInfo.prijs_per_kg}</p>

        <a href="${dealInfo.deal_link}" style="display: inline-block;" class="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Bekijk deal
        </a>
      </div>`;

        // Dynamisch instellen van de afbeelding-URL
       document.getElementById('dealImage').src = dealInfo.afbeelding_url;

  }
};

xhr.open('GET', 'data/dagdeal.json', true);
xhr.send();


///
  // Vul de tabel in met gegevens uit data.txt
  // Vul de tabel in met gegevens uit data.json
fetch('data/data.json')
.then(response => response.json())
.then(data => {
  const tbody = document.getElementById('dataTableBody');

  data.forEach(item => {
    const row = document.createElement('tr');

    Object.values(item).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
})
.catch(error => console.error('Er is een fout opgetreden bij het ophalen van de data:', error));
