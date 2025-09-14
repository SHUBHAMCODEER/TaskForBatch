// =========================
// Part 3: JavaScript Tasks
// =========================

// 1. Change age using getElementById
 let Myage = document.getElementById("user-age");
 Myage.innerText = 20;
 
// 2. Change name color using getElementsByClassName
let NameColor = document.getElementsByClassName("username");
NameColor[0].style.color = "orange" ;

// 3. Update all hobbies using getElementsByTagName
 let changeHobby = document.getElementsByTagName('li');
 changeHobby[0].innerText = "Reading Book";
 changeHobby[1].innerText = "Singing";
 changeHobby[2].innerText = "Watching Movies";

// 4. Change image source using querySelector + setAttribute
let changeImgSource = document.querySelector("img");
changeImgSource.setAttribute("src" , "replaced-pic.jpeg")

// 5. Add a new class ("highlight") to all hobbies using querySelectorAll
let newclass = document.querySelectorAll("li");
newclass[0].setAttribute("class","highlight");
newclass[1].setAttribute("class","highlight");
newclass[2].setAttribute("class","highlight");
// console.log(newclass[0].getAttribute("class"));
// console.log(newclass[1].getAttribute("class"));
// console.log(newclass[2].getAttribute("class"));


// 6. Read image source using getAttribute and log it in console
let readImgSource = document.getElementsByTagName("img");
// readImgSource[0].getAttribute("src");
console.log(readImgSource[0].getAttribute("src"));

// 7. Add alt text to image using setAttribute
let addAltText = document.querySelector("img");
addAltText.setAttribute("alt","profile-photo");
// console.log(addAltText.getAttribute("alt"));

// 8. BONUS: Use setAttribute("id", "highlighted") on the name span (or any element)
//    This should apply the styles from style.css
let nameStyle = document.querySelectorAll("p");
nameStyle[1].setAttribute("id","highlighted");
// console.log(nameStyle[0].getAttribute("id"));

// ===============================
// Part 4: Button Action (Optional)
// ===============================
// Make all the above changes happen
// when clicking the "Change Info" button