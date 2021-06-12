// FOR SINGLE LIST

// const list  = document.querySelector('.list');

// console.log(list, list.childNodes)

// for(let li of list.childNodes) {
//     if(li.tagName === 'LI') {
//         li.onclick = function () {
//             console.log(li.innerText)
//         }
//     }
// }


// list.addEventListener('click', function (event) {
//     console.log(event.target.innerText)
// });

// FOR ALL LISTS

const container = document.querySelector('.ul_parent');

container.addEventListener('click', function (event) {
    console.log({
        evHandler: 'ul_parent',
        eventTarget: event.target
    })
});

document.body.addEventListener('click', function (event) {
    console.log({
        evHandler: 'body',
        eventTarget: event.target
    })
})


// console.log(container)

// for(let list of container) {
//     list.addEventListener('click', function (event) {
//         console.log(event.target.innerText)
//     });
// }
