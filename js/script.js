/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
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
    if(i <= endIndex && i >= startIndex){
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none"
    }
  }
}

showPage(studentItems);

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

      event.target.className = 'active';
      newLink.className = '';



    });
    showPage(studentItems, 10);
  }
}

appendPageLinks(pages());

// Remember to delete the comments that came with this file, and replace them with your own code comments.
