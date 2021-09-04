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
            console.log(data.docs.author_name);
        })
}
//=================Display Search Book Function=======
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    // clear result:
    searchResult.innerHTML="";
    docs.forEach(book => {
      // console.log(book);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `<div class="card h-100">
          ${book.cover_i ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top " alt="${book.title}">` : `<img class="placeholder w-100" src="https://www.pngkey.com/png/detail/350-3500680_placeholder-open-book-silhouette-vector.png" alt="" />`}
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
           
            <p><strong>Author:</strong> ${book.author_name}</p>
            <p class="card-text"><strong>First publish: </strong>${book.first_publish_year}</p>
          </div>
        </div>`;
      searchResult.appendChild(div);
    });
  }
