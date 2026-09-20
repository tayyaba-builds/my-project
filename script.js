let url = "https://jsonplaceholder.typicode.com/users";
let response = fetch(url)
response.then((v) => {

    return v.json()
}).then((contests) => {
    console.log(contests)
    let ihtml ="";
    for ( let item of contests) {
        console.log(contests);
        ihtml += `<div class="card m-2" style="width: 22rem; ">
                <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=1024x1024&w=is&k=20&c=ffZ9DMUWJuqSOgFds4ltM_71PRVfBBu5vhPznWewDOM=" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Email:${item.email}</p>
                    <p> class="card-text">city:${item.address.city}</p>
                    <a href="https://${item.website}" target="_blank" class="btn btn-primary">Go somewhere</a>
                </div>
</div>`;   
    }
document.getElementById("cardContainer").innerHTML = ihtml;
})