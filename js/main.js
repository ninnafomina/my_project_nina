const API = 'https://swapi.dev/api/';
 const APIPeople = 'https://swapi.dev/api/people/';

 const renderList = (list) => {
     const $listWrapper = document.querySelector('#people_list');
     $listWrapper.innerHTML = '';

     list.forEach(item => {
         const $a = document.createElement('a');
         $a.href='#';
         $a.className = 'list-group-item list-group-item-action';
         $a.innerText = item.name;

         $listWrapper.appendChild($a);
     });
 };

 fetch(APIPeople)
     .then((response) => {
         return response.json();
     })
     .then((data) => {
         renderList(data.results);
     });