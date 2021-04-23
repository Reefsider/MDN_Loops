let name = 'Mustafa';
let i = 0;
let para = document.createElement('p');

let phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here
 const input = document.querySelector('input');
 const button = document.querySelector('button');
 
 button.addEventListener('click', function() {
     let searchName = input.value.toLowerCase();
     input.value = '';
     input.focus();
   i=0;
     do {
        if (phonebook[i].name.toLowerCase() === searchName) {
            para.textContent = phonebook[i].name + '\'s number is ' + phonebook[i].number + '.';
      break;   
        } else {
            para.textContent = 'Contact not found.';
        
        }
            i++;
        } while (i < phonebook.length);
 })




// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);