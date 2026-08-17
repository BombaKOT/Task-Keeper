document.querySelector(".adding").onkeypress = function(event){
    if(event.key == "Enter"){
        // console.log(event.key);
        let li = document.createElement("li");
        let img = document.createElement("img");
        let span = document.createElement("span");
        span.innerHTML = document.querySelector(".adding").value;
        img.setAttribute("src", "./garbage.svg")
        li.appendChild(span);
        li.appendChild(img);
        document.querySelector(".uh").appendChild(li);
        document.querySelector(".adding").value = "";
    }
}

document.querySelector(".uh").onclick = function(event){
    if(event.target.tagName == "LI" ||  event.target.tagName == "SPAN"){
        event.target.classList.toggle("k");
    }
    if(event.target.tagName == "IMG"){
        event.target.parentElement.remove();
    }
}

document.querySelector(".but").onclick = function(){
    document.querySelector(".uh").innerHTML = "";
}

document.querySelector(".ton").onclick = function(){
    let lele = document.querySelectorAll("li");
    console.log(lele);
    for(let i = 0; i< lele.length; i = i + 1){
        lele[i].classList.toggle("k");
    }
}
