//============Search Book Function==============
const searchBook = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displaySearchResult(data.docs)
            // console.log(data.docs);
            console.log(data.docs.author_name[]);
        })
}
//=================Display Search Book Function=======
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/554106-M.jpg" class="card-img-top" alt="photo">
        <div class="card-body">
          <h5 class="card-title">title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p>${docs.author_name}</p>
        </div>
      </div>`;
      searchResult.appendChild(div);
    });
}

// ${docs.cover_i}https://covers.openlibrary.org/b/id/554106-M.jpg