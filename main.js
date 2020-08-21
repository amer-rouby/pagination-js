let users =[];
let page = 1;
let size = 5;

let tabledata = document.getElementById("add-table");
let next = document.getElementById("next");
let prevous = document.getElementById("prevous");
let sizedata = document.getElementById("size");

next.addEventListener("click", getUserNext);
prevous.addEventListener("click", getUserprevous);
sizedata.addEventListener("click", getUsernSize);

function getUserData() {
    let out =`
    <tr>
    <th>Firs Name</th>
    <th>Last Name</th>
    <th>Phone</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Address</th>
</tr>
    `;
    for(let user of users){
        out += `
            <tr>
                <td>${user.name.first}</td>
                <td>${user.name.last}</td>
                <td>${user.phone}</td>
                <td>${user.gender}</td>
                <td>${user.email}</td>
                <td>${user.location.city}</td>
            </tr>

        `; 
    }
    
    tabledata.innerHTML = out;
}

function getUserNext(){
    page += 1;
    getDataFech(page, size)
}

function getUserprevous(){
    page -= 1;
    getDataFech(page, size)
}

function getUsernSize(event){
    size = event.currentTarget.value;
    getDataFech(page, size)
}

function getDataFech(page, size){
    fetch(`https://randomuser.me/api/?results=${size}&page=${page}`)
    .then(res => res.json())
    .then(data => {
        users = data.results;
        getUserData(users);
    })
}

getDataFech(page, size)