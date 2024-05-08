let container = document.querySelector(".container")
let button = document.getElementById("fetchdata")
// button.addEventListener("onclick",fetchdata())   
async function fetchdata(){
    let API_LINK="https://jsonplaceholder.typicode.com/todos"
    try{
        let res = await fetch(API_LINK);
        let data = await res.json();
        console.log(data)
        showdata(data)
    }
    catch(error){
        console.log(error)
    }
}
// fetchdata()

function showdata(data){
    data.forEach((element) => {
        let subdiv= document.createElement("div")
        subdiv.className="subdiv";
        let title = document.createElement("h3")
        title.innerHTML=element.title;
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.checked= element.completed;
        subdiv.append(title,checkbox);
        container.append(subdiv);
    });
}