document.addEventListener("DOMContentLoaded", function(){
    let newDiv = document.createElement("div");
    newDiv.classList.add('header-container');
    document.body.appendChild(newDiv); 
    
    let textColors = ["red", "green", "yellow", "orange", "blue", "indigo"];

    // h1
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode("This is a h1!");
    h1.classList.add("h1");
    h1.appendChild(h1Text);
    newDiv.appendChild(h1);

    // changes colour everytime it is clicked.
    h1.addEventListener("dblclick", () => {
        randomColor(h1)
    }
    );

    function randomColor(element){
        let x = Math.floor(Math.random() * textColors.length);
        element.style.color=`${textColors[x]}`
    }

    // h2
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode("This is an h2!");
    h2.classList.add("h2");
    h2.appendChild(h2Text);
    newDiv.appendChild(h2);

    //h3
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("This is a h3!");
    h3.classList.add("h3");
    h3.appendChild(h3Text);
    newDiv.appendChild(h3)

    //h4
    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode("This is a h4!");
    h4.classList.add("h4");
    h4.appendChild(h4Text);
    newDiv.appendChild(h4);

    //h5
    let h5 = document.createElement("h5");
    let h5Text = document.createTextNode("This is a h5!");
    h5.classList.add("h5");
    h5.appendChild(h5Text);
    newDiv.appendChild(h5);

    //h6
    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode("This is a h6!");
    h6.classList.add("h6");
    h6.appendChild(h6Text);
    newDiv.appendChild(h6);

    let listButton = document.querySelector(".listButton");

    let listContainer = document.createElement("ul");

    document.body.appendChild(listContainer);

    listButton.addEventListener("click", addList);

    function addList(){
        let listItem = document.createElement("LI");
        listItem.classList.add("list-item");
        let listContent = document.createTextNode(`This is list Item ${document.querySelectorAll(".list-item").length + 1}`);
        listItem.appendChild(listContent);
        listContainer.appendChild(listItem);

        let newListItems = document.querySelectorAll(".list-item");
        newListItems.forEach((item)=>{
            item.addEventListener("click",()=>{
                randomColor(item)
            });
            item.addEventListener("dblclick", ()=>{
                item.style.display="none";
            })

        })
    
    }



});
