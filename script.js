const intialLikes = 100;
const intialDislikes = 20;

let likesCount = intialLikes
let dislikesCount = intialDislikes 

const likesBtn = document.getElementById("likeBtn")
const dislikesBtn = document.getElementById("dislikeBtn")
const commentBox = document.getElementById("commentBox")
const sumbitBtn = document.getElementById("sumbit")
const clearBtn = document.getElementById("clear")
const commentsList = document.getElementById("commentList")


likesBtn.innerText ="👍" + likesCount;

likesBtn.addEventListener('click', () =>{
    likesCount++;
    likesBtn.innerText ="👍" + likesCount;
    setCookie()
    
})



dislikesBtn.innerText ="👎" + dislikesCount;

dislikesBtn.addEventListener('click', () =>{
    dislikesCount++;
    dislikesBtn.innerText = "👎" + dislikesCount;
    setCookie()
})



sumbitBtn.addEventListener('click', () =>{
    const eLemP = document.createElement("p");
    eLemP.innerText = commentBox.value.trim()
    commentsList.appendChild(eLemP)
    commentBox.value = "";
    setCookie();


})

clearBtn.addEventListener('click', () =>{
    commentBox.value = "";
    document.cookie = "voted=ture path=/; expires=" + new Date(Date.now() -1).toUTCString();
    console.log("cookie expired")
})


function setCookie(){
    const expireOn = new Date(Date.now() + 60000);
    const cookieString = "voted=true; path=/; expires=" + expireOn.toUTCString();
    document.cookie = cookieString
}

window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted") > -1){
        console.log("cookie exists")
        
        likesBtn.disabled = true;
        dislikesBtn.disabled = true;
        sumbitBtn.disabled = true;
    }
}