let updateUrl = () => {
    const url = new URL(window.location);

    let li = document.querySelectorAll('li');

    let list = [];

    for(let tag of li) {
        list.push(tag.textContent.toLowerCase());
    }
    let query_string = list.join(',');

    console.log(url.hash);

    window.addEventListener('hashchange' , () => {

        for(let i = 0; i < li.length; i++) {
            list[i] = window.location.hash
        }
        console.log(li);
        console.log(list);
    
    })
    url.hash = "tags="+query_string;

    window.location.replace(url);
}
updateUrl();

let input = document.querySelector('#addItem');
let btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.textContent = input.value;
    document.querySelector('ul').appendChild(item);
    updateUrl();

    let listItems = document.querySelectorAll('li');
    
    for(let list of listItems) {
        list.addEventListener('click' , () => {
        document.querySelector('ul').removeChild(list);
        updateUrl();
        })
    }
})


    