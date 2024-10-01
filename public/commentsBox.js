const userId = {
    name: null,
    indentity: null,
    image: null,
    message: null,
    date: null
}

const userComment = document.querySelector(".userComment");
const publishButton = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
var commentsCounter = 0;


userComment.addEventListener("input", () =>{
    if(!userComment.value){
        publishButton.setAttribute("disabled", "disabled");
        publishButton.classList.remove("abled");
    }

    else 
    {
        publishButton.removeAttribute("disabled");
        publishButton.classList.add("abled");
    }
});

function addPost () {
    if (!userComment.value) return;
    userId.name = userName.value;

    if (userId.name == "Anonymous")
    {
        userId.indentity = false;
        userId.image = "./imagenes/user1.png";
    }

    else {
        userId.indentity = true;
        userId.image = "./imagenes/user.png";
    }
   

userId.message = userComment.value;
userId.date = new Date().toLocaleString();
let contadorLikes = 0;
let published = 
`<div class="parents">
    <img class="anonUser" src="${userId.image}">
    <div>
        <h1>${userId.name}</h1>
        <p>${userId.message}</p>
        <div class="engagements"><img class="likeButton" src="./imagenes/like.png"><span class="likesCounter">${contadorLikes}</span><img src="./imagenes/share.png"></div>
        <span class="date">${userId.date}</span>
    </div>
 </div>`;
 

 comments.innerHTML = comments.innerHTML + published;
//  document.querySelector("likeButton").addEventListener("click", () =>{
//     contadorLikes++
//     `<div class="engagements"><img class="likeButton" src="./imagenes/like.png"><span class="likesCounter">${contadorLikes}</span><img src="./imagenes/share.png"></div>`
// })
 userComment.value = "";
 commentsCounter = commentsCounter + 1;
 document.querySelector("#comment").textContent = commentsCounter;
 publishButton.setAttribute("disabled", "disabled");
 publishButton.classList.remove("abled");
}


publishButton.addEventListener("click", addPost);