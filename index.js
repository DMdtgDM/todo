
const add = document.querySelector(".add");
const clear = document.querySelector(".clear");
const input = document.querySelector("input");
const works = document.querySelector(".works");
const title = document.querySelector(".title");


if (localStorage.getItem("workArray") == '') {}

else if (localStorage.getItem("workArray") == null) {
    localStorage.setItem("workArray", '');
} else {
    array = localStorage.getItem("workArray").split(",");
    array.forEach( (list, index) => {
        creatLi(list, index=index);
    })  
}

add.addEventListener("click", () => {
    workArray = localStorage.getItem("workArray");
    creatAndAdd(workArray);
})

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        workArray = localStorage.getItem("workArray");
        creatAndAdd(workArray);
    }
})

clear.addEventListener("click", () => {
    localStorage.removeItem("workArray");
    window.open("./index.html");
    window.close();
})

function creatAndAdd(workArray) {
    
    if (workArray == ''){
        workArray = [];    
    } else {
        workArray = workArray.split(",");     
    }

    value = input.value; 
    if (value.includes(",")) {
        value = value.replace(",", " ");
    }  
    if (workArray.includes(value) || value.trim() == "") {
        return;
    } else {
        set(workArray, value);
        input.value = "";
    } 
}

function set(array, value = null) {

    value != null  ? array.push(value) : array = array;
    localStorage.setItem("workArray", array);
    creatLi(array);
}

function creatLi(a, index) {

    const div = document.createElement("div");
    const li = document.createElement("li");
    const del = document.createElement("span");
    const node2 = document.createTextNode("X");
    div.classList.add("mainDiv");
    del.classList.add("delete");
    
    typeof(a) == "object" ? index = a.length - 1: index=index;
    typeof(a) == "object" ? content = a[a.length - 1]: content=a;

    div.classList.add("main" + index);
    del.classList.add("del" + index);
    const node = document.createTextNode(content);
    del.appendChild(node2);
    li.appendChild(node);
    div.appendChild(li);
    div.appendChild(del);
    works.appendChild(div);


    document.querySelector(".del" + index).addEventListener("click", () => {
        workArray = localStorage.getItem("workArray").split(",");
        iteration(workArray, index);
        works.removeChild(document.querySelector(".main" + index));
        window.open("./index.html");
        window.close();
    })

}

function iteration(workArray, index=null) {

    workArray2 = []
    for (let i = 0; i < workArray.length; i++) {
        i == index ? console.log("Passed") : workArray2.push(workArray[i]);
    } 
    localStorage.setItem("workArray", workArray2)

}
