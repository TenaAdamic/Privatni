const inputNesto = document.getElementById('input');

const listaIzlistaj = document.getElementById('lista');

const loadanje = document.getElementById('loading');


async function dobiPodatke(){

    try {

        loadanje.style.display = 'block';


        const response = await fetch('https://itunes.apple.com/search?term=indie&entity=song');

        const responseData = await response.json(); 

        while(listaIzlistaj.firstChild){
            listaIzlistaj.removeChild(listaIzlistaj.firstChild);
        }

        // filter the artist names in the results that match the input
        const filteredData = responseData.results.filter((item) => {
          // return item.artistName === inputNesto.value; // this works but requires exact match
          return item.artistName.includes(inputNesto.value); // this is better
        })

        for ( let i = 0; i < filteredData.length; i++ ){
          let elementListe = document.createElement('li');
          listaIzlistaj.appendChild(elementListe);
          elementListe.innerHTML = `<b>Artist</b>: ${filteredData[i].artistName}, <b>TrackName</b>: ${filteredData[i].trackName}`;
        }

        loadanje.style.display = 'none';

    } catch(error){
        alert(error);
    }


}

inputNesto.addEventListener('keyup', dobiPodatke);

