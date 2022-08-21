
//catch element

//catch by id
const stopWatchView = document.querySelector('#stop-watch-view');
 console.log(stopWatchView);

 const pTag =document.querySelector('p');
  console.log('pTag',pTag);
 
  const myClass = document.querySelector('.my-class');
   console.log('myclass',myClass);

   const allParagraph =document.querySelectorAll('p');
   console.log('p1',allParagraph[0]);
   console.log('p2',allParagraph[1]);
    console.log('p2',allParagraph[2]);
    //catch by tagName
    const myLIst = document.querySelectorAll('li');
    console.log('mylist',myLIst);
  
    const allListItems = document.querySelectorAll('.list-item');
console.log(allListItems);

let counter = 1;
allListItems.forEach(function (listItem) {
  console.log('list item', listItem);
  listItem.innerHTML = counter++;
});
