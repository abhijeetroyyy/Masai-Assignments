let container = document.getElementById("container")
let select = document.getElementById("select");
select.addEventListener("change",function(){
    // console.log(select.value)
    fetchdata(select.value)
})
async function fetchdata(order){
    // console.log(order);
    let API_link="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
    
    if(order !=undefined){
        API_link+="?sort=population&order="+ order;
    }
    
    
    try{
        let res = await fetch(API_link);
        let data = await res.json();
        // console.log(data.countries)
        showdata(data.data)
    }
    catch(error){
        console.log(error)
    }
}
fetchdata();
function showdata(data){
    container.innerHTML=""
    data.forEach(element => {
        let contrydiv = document.createElement("div");
        contrydiv.className="contrydiv";

        let rank = document.createElement("h4")
        rank.innerHTML=element.Rank;

        let country = document.createElement("h3")
        country.innerHTML=element.country;

        let population = document.createElement("p")
        population.innerHTML=element.population;

        contrydiv.append(rank,country,population);

        container.append(contrydiv);
    });
}
