const studentName = 'Anna Veronica';
const studentNumber = '1166946';
const result= studentName + '-'+ studentNumber;

console.log(result);

let headerContent = document.querySelector('h1');

headerContent.innerHTML = studentName + '-'+ studentNumber;
headerContent.classList.add('heading1');


let pContent = document.querySelector('p');
headerContent.classList.add('p');

