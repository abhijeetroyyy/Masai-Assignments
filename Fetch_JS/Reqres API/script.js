let container = document.getElementById("container")
let fetchusrbutton = document.getElementById("fetch-usr-btn")
let userdatadisplay = document.getElementById("user-data");


fetchusrbutton.addEventListener("click", fetchuser);
async function fetchuser() {
    let response = await fetch("https://reqres.in/api/users")
    let res = await response.json();
    showuserdata(res.data)
}

function showuserdata(users) {
    userdatadisplay.innerHTML = ""
    users.forEach((user) => {
        userdatadisplay.innerHTML += `
        <div class="usrcrd">
                <img class="usravt" src="${user.avatar}" alt="">
                <div class="usr-name">${user.first_name} ${user.last_name}</div>
                <div class="usr-email">${user.email}</div>
            </div>
        `
    });
}