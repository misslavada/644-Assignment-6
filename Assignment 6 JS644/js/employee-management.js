let addInput = document.forms.addInput;
let table = document.querySelector('tbody.list');
let search = document.querySelector('.search input');
let generateTemplate = ((name, title, ext) => {
    let html = `
    <tr>
        <th scope="row">${name}</th>
        <td>${title}</td>
        <td>${ext}</td>      
        <td>
            <i class="far fa-trash-alt delete"></i>
        </td>
    </tr>`;
    table.innerHTML += html;
});
let addNew = document.forms['addInput'];

//EMPLOYEE INFO
let button = document.getElementById('addNewEmployee');

button.addEventListener('focus', e => {
    e.preventDefault();
    let addName = addInput.querySelector('input[name="name"]').value.trim();
    console.log(addName);
    if (addName == '') {//when here keeps adding to list but turns red upon enter or add -and cursor stays in place with enter
        addInput.name.style.border = '3px solid crimson';
        //stays red when no input but still adds to list empty string

    }

    let addTitle = addInput.querySelector('input[name="title"]').value.trim();
    console.log(addTitle);
    if (addTitle == '') {
        addInput.title.style.border = '3px solid crimson';
    }

    let addExtension = addInput.querySelector('input[name="extension"]').value.trim();
    console.log(addExtension);
    if (addExtension == '') {
        addInput.extension.style.border = '3px solid crimson';
    }
    if (addName !== '' && addTitle !== '' && addExtension !== '') {
        generateTemplate(addName, addTitle, addExtension);
        addInput.reset();
    }
    counterFunc();
});

addInput.name.onfocus = () => {
    addInput.name.style.border = '3px solid limegreen'; 
};
addInput.name.onblur = () => {
    addInput.name.style.border = 'none';
}
addInput.title.onfocus = () => {
    addInput.title.style.border = '3px solid limegreen'; 
};
addInput.title.onblur = () => {
    addInput.title.style.border = 'none';
}
addInput.extension.onfocus = () => {
    addInput.extension.style.border = '3px solid limegreen'; 
};
addInput.extension.onblur = () => {
    addInput.extension.style.border = 'none';
}

//onsubmit 
addNew.onsubmit = () => {
    if(addNew.name.value == ''){
        addNew.name.style.border = '3px solid crimson';
        return false;
    } else {
        return true;
    }
    
};
addNew.onsubmit = () => {
    if(addNew.title.value == ''){
        addNew.title.style.border = '3px solid crimson';
        return false;
    } else {
        return true;
    }
};
addNew.onsubmit = () => {
    if(addNew.extension.value == ''){
        addNew.extension.style.border = '3px solid crimson';
        return false;
    } else {
        return true;
    }
};


//DELETE ROW
table.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
        myFunction();
    }
});

//ADD AND REMOVE
let filterEMployees = (term) => {
    Array.from(table.children)
        .filter((employees) => {
            return !employees.textContent.toLowerCase().includes(term);
        })
        .forEach((employees) => employees.classList.add('filtered'));

Array.from(table.children)
.filter((employees) => {
    return employees.textContent.toLowerCase().includes(term);
})
.forEach((employees) => employees.classList.remove('filtered'));
  myFunction();
};
     
//SEARCH
search.addEventListener('keyup', () => {
    let term = search.value.trim().toLowerCase();
    filterEMployees(term);
  
});

//COUNTER
let count = document.querySelector('tbody');
console.log(count);

let rows = count.getElementsByTagName("tr");
console.log(rows);

let employee = Array.from(count.children).length;
console.log(employee);

let numEmployees = document.querySelector('.table-rows');
console.log(numEmployees);

    numEmployees.querySelector('span').textContent = `${rows.length}`;

function myFunction() {
    let count = document.querySelector('tbody');
console.log(count);

let rows = count.getElementsByTagName("tr");
console.log(rows);
let numEmployees = document.querySelector('.table-rows');


    numEmployees.querySelector("span").innerHTML = `${rows.length}`;
  }

