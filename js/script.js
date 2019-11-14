
const studentItems = document.getElementsByClassName('student-item');

const pages = () => {
  const pageNumbers = Math.ceil(studentItems.length/10) ;
  return pageNumbers;


}

const showPage = (list,page) => {
  let itemsPerPage = 10;


  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage;


  for(let i = 0; i < list.length; i++){
    if(i < endIndex && i >= startIndex){
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none"
    }
  }
}

showPage(studentItems, 1);

const appendPageLinks = (pages) => {
  const newDiv = document.createElement('div');
  const mainDiv = document.querySelector('.page');
  newDiv.className = 'pagination';
  mainDiv.appendChild(newDiv);
  const newUL = document.createElement('ul');
  newDiv.appendChild(newUL);

  for(let i = 1; i <= pages; i++){
    const newLI = document.createElement('li');
    const newLink = document.createElement('a')

    newUL.appendChild(newLI);
    newLink.href = '#';
    newLink.textContent = i;
    newLI.appendChild(newLink);


    
    newLink.addEventListener('click', () => {
      showPage(studentItems, i);
      const aLinks = document.querySelectorAll('a');

      for (let i = 0; i < aLinks.length; i++){
        if(aLinks[i].innerHTML === event.target.innerHTML){
          aLinks[i].className = 'active';
        } else {
          aLinks[i].className = '';
        }
      }




    });

  }
}

window.onload = function(){
  const aLink = document.querySelectorAll('a');
  aLink[0].className = 'active';
}
appendPageLinks(pages());
