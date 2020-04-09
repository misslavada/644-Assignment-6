/*eslint-env browser*/

//STEP 1
function btnClick() {
    alert('I have been clicked');
}
//STEP 2
let button = document.getElementById('button');
button.onclick = () => {
    alert("I have been clicked");
};
//STEP 3
let button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
    alert("I have been clicked");
});
//STEP 4
let button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
    alert("I have been clicked");
});
//STEP 5 *******COME BACK TO THIS*******
// document.addEventListener('DOM')
// let button3 = document.getElementById('button3');
// button3.addEventListener('click', () => {
//     alert("I have been clicked");
// });
//STEP 6
let link = document.querySelector('a');
link.addEventListener('click', event => {
    alert('You selected a link');
    event.preventDefault();
});
//STEP 7
let button4 = document.getElementById('button4');
let textBox = document.getElementById('textBox');
button4.addEventListener('click', e => {
    button4.disabled = true;
    alert(textBox.value);
});
//STEP 8
document.getElementById('button5').addEventListener("click", e => {
    window.open('newpage.html', 'New Page', "width=300px; height=300px;")

});
//STEP 9
let start = document.getElementById('buttonStart');
let stop = document.getElementById('buttonStop');
start.addEventListener ('click', e => {
    let timer = setInterval(() => {
        console.log('Learning JavaScript is...fun?');
    stop.addEventListener('click', e => {
        let stopTimer = clearInterval(timer);
        });
    }, 2000);
});
//STEP 10
let select = (id => {
    return document.getElementById(id);
});
select('button8').addEventListener('click', () => {
    let selection = select('dropDown').value;
    alert(selection);
});

