let input = document.querySelector(".input");
let btn = document.querySelector(".bouton");
let ul = document.querySelector("ul");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let li = document.createElement('li');
    let p = document.createElement('p');
    let btn2 = document.createElement('button');

    p.innerText = input.value;
    btn2.innerText = "Supprimer";

    li.appendChild(p);
    li.appendChild(btn2);

    
    ul.appendChild(li);
    btn2.addEventListener('click', () => {
        ul.removeChild(li);
    })
})
