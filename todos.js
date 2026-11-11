const loadData = () => {
    const url = ('https://jsonplaceholder.typicode.com/todos')
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data));
}
// {
//     "userId": 9,
//     "id": 169,
//     "title": "ea odio perferendis officiis",
//     "completed": true
// }
const displayData = (data) => {
    const section = document.getElementById("section-container")
    section.innerHTML = ''
    data.forEach((todo) => {
        console.log(todo);
        const todocard = document.createElement("div")
        todocard.innerHTML = `
       <div class="todocard">
            <h3>title:${todo.title} </h3>
            <p>${todo.completed === true ? `<i class="fa-solid fa-square"></i>` : ` <i class="fa-regular fa-square"></i>`} </p>
        </div>
       `
        section.appendChild(todocard)
    })
}
loadData()