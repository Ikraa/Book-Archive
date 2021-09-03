//============Search Book Function==============
const searchBook=()=>{
const searchField=document.getElementById('search-input');
const searchText=searchField.value;
    // console.log(searchText);
    searchField.value='';
    const url=`https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);

    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySearchResult(data.docs))
}
//=================Display Search Book Function=======
const displaySearchResult=docs=>{
    const searchResult=document.getElementById('search-result');
    docs.forEach(book=> {
        console.log(book);
    });
}
