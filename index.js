// const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//         return response.json();
//     }).then(data => {
//         const html = data.map(item => {
//             return `<p>Name: ${item.name}</p>`
//         }).join('')
//         document.querySelector(".listContainer").innerHTML = html;
//     }).catch(err => {
//         console.log(err);
//     })
// }

// getData();

const toggler = document.getElementsByClassName("caret");
let i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

