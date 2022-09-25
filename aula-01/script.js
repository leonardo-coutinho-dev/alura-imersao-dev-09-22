// let labelValue = document.querySelectorAll('.label');
// let inputValue = document.querySelectorAll('.input');

// console.log(labelValue, inputValue);

let  containerEntryValue = document.querySelectorAll('.entry-values-container');

console.log(containerEntryValue);

let fstContainer = containerEntryValue[0];
let sndContainer = containerEntryValue[1];
let thdContainer = containerEntryValue[2];
let fthContainer = containerEntryValue[3];

console.log(fstContainer.children[0], sndContainer, thdContainer, fthContainer);

let newArrayVar = [];

// let newArray = containerEntryValue.forEach((item) => {
//   newArrayVar.push(item);
//   console.log(newArrayVar);
// });

for (let index = 0; index < 10; index++) {
  newArrayVar.push(containerEntryValue[0]);
}

console.log(newArrayVar);

let containerFormContent = document.getElementById('container-form-content');

console.log(containerFormContent.innerHTML);


let addInputValue = () => {
  let FormContent= fstContainer.children[0];
  containerFormContent.insertAdjacentHTML('afterend', FormContent);
  console.log('clicou');
}