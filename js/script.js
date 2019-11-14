

//Gets list of students
const studentItems = document.getElementsByClassName('student-item');

//Calculates number of pages needed
const pages = () => {
  const pageNumbers = Math.ceil(studentItems.length/10) ;
  return pageNumbers;


}

//Function calculating starting and ending index to calculate number of students per page
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

//Calls showPage function
showPage(studentItems, 1);

//Function appending new div, list items, and links
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


//Event handler for onclick event on pagination links
    newLink.addEventListener('click', () => {
      showPage(studentItems, i);
      const aLinks = document.querySelectorAll('a');

//Adds 'active' class to clicked link
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

//page load function to set first page link class to 'active'
window.onload = function(){
  const aLink = document.querySelectorAll('a');
  aLink[0].className = 'active';
}

//Calls append page links function
appendPageLinks(pages());
