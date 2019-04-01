// Function that loads page with URL containing list tags
let updateUrl = () => {
    // Creating new URL window object
    const url = new URL(window.location);

    let li = document.querySelectorAll('li');

    let list = [];
    // Adding all list items to list array
    for(let tag of li) {
        list.push(tag.textContent.toLowerCase());
    }
    //Joining list items and saving them in new variable
    let query_string = list.join(',');

    window.addEventListener('hashchange' , () => {
        // I couldnt figure out how to manipulate with html elements through URL
        for(let listItem of li) {
            console.log(listItem);
        }
    })
    // Connnecting my list variable with url.hash
    url.hash = "tags="+query_string;
    // Replacing existing window location with 
    window.location.replace(url);
}
// Calling a function so it loads new url when the page is loaded
updateUrl();

let input = document.querySelector('#addItem');
let btn = document.querySelector('#submit');
// Event which adds new list item and updates url on click
btn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.textContent = input.value;
    document.querySelector('ul').appendChild(item);
    updateUrl();
});

let listItems = document.querySelectorAll('li');
// Event which removes the specific list element on click 
for(let list of listItems) {
    list.addEventListener('click' , () => {
    document.querySelector('ul').removeChild(list);
    updateUrl();
    })
};
