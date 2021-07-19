


function saveUser(user) {

    //load old data
    let data = readUsers();

    //merge
    data.push(user);

    //save
    let val = JSON.stringify(data); //parse into a JSON string
    localStorage.setItem("users", val);

}

function readUsers() {
    let data = localStorage.getItem("users");
    if (!data) {
        return [];
    }else{
    let list = JSON.parse(data); //parse string back into object
    return list;
    }
}

function clearUsers() {

    localStorage.removeItem("users");
}

function clearData() {

    //WARNING: this will clear all data

    localStorage.clear();

}