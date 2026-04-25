// 1. Chiediamo al broswer di leggere il file prodotti.json
fetch('prodotti.json')
  .then(response => response.json()) //Trasformiamo la risposta in un oggetto leggibile
  .then(data => {
    // 2. Troviamo il contenitore nell'HTML usando l'ID 
    const container = document.getElementById('lista-vini-sfusi');

    // 3. Prendiamo i dati che ci servono (vini sfusi rossi e bianchi)
    const rossi = data.vini_sfusi.rossi;
    const bianchi = data.vini_sfusi.bianchi;

    // 4. Creiamo il contenuto HTML da inserire
    let contenutoHTML = '<h4>Sfusi Rossi</h4><ul>';
    
    rossi.forEach(vino => {
      contenutoHTML += `<li>${vino}</li>`;
    });

    let contenutoHTML = '<h4>Sfusi Bianchi</h4><ul>';

    bianchi.forEach(vino => {
      contenutoHTML += `<li>${vino}</li>`;
    });

    contenutoHTML += '</ul>';

    // 5. Visualiziamo tutto nel container
    container.innerHTML = contenutoHTML;
  })
  .catch(error => console.error('Errore nel caricamento dei vini:', error));