const loadData = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
const loadPost = ()=>{
    const url = ("https://jsonplaceholder.typicode.com/posts")
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayPost(data)
})
    
}

const displayPost =(posts)=>{
    posts.forEach((post)=>{
        console.log(post);
    })

}