function popolaCategoria(prodotti, idContenitore) {
  // 1. Trova l'elemento HTML usando idDestinazione
  let contenitore = document.getElementById (idContenitore);

  if (contenitore) {
    let html = '<ul>';

    prodotti.forEach(item => {
      html += `<li>${item}</li>`;
    });

    html += '</ul>';

    contenitore.innerHTML = html;
  }
}
  


fetch('prodotti.json')
  .then(response => response.json())
  .then(data => {
    popolaCategoria(data.vini_sfusi.rossi, 'lista-vini-sfusi');
    popolaCategoria(data.vini_sfusi.bianchi, 'lista-vini-bianchi');
    popolaCategoria(data.bottiglie.bianche, 'lista-bottiglie-bianche');
    popolaCategoria(data.bottiglie.rosse, 'lista-bottiglie-rosse');
    popolaCategoria(data.gastronomia.liquori, 'lista-liquori');
    popolaCategoria(data.gastronomia.miele, 'lista-miele');
    popolaCategoria(data.gastronomia.salumi, 'lista-salumi');
    popolaCategoria(data.gastronomia.dolci, 'lista-dolci');
  })












