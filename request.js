// This function loads Chuck data from the Chuck API
function fetchChuckJSON() {
    // Feel free to download this HTML and edit it, to use another Chuck ID
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
      .then(function(response) {
        return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
      })
      .then(function(Chuck) {
        console.log('data decoded from JSON:', Chuck);
  
        // Build a block of HTML
        const ChuckHtml = `
            <img src="${Chuck.icon_url}" />
            <p><strong>${Chuck.value}</strong></p>
        `;
        document.querySelector('#Chuck').innerHTML = ChuckHtml;
      });
  }
  
  fetchChuckJSON();