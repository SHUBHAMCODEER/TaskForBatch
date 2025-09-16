// =========================
// Part 3: JavaScript Tasks
// =========================

// 1. Change age using getElementById
let age = document.getElementById("age");
age.textContent = 23;

// 2. Change name color using getElementsByClassName
let name = document.getElementsByClassName("username");
name[0].style.color = "red";

// 3. Update all hobbies using getElementsByTagName
let changeHobby = document.getElementsByTagName("li");
changeHobby[0].innerText = "Cooking";
changeHobby[1].innerText = "Singing";
changeHobby[2].innerText = "Watching Movies";

// 4. Change image source using querySelector + setAttribute
let img = document.querySelector("img");
img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

// 5. Add a new class ("highlight") to all hobbies using querySelectorAll

let hobbies = document.querySelectorAll("li");
hobbies[0].setAttribute("class", "highlight");
hobbies[1].setAttribute("class", "highlight");
hobbies[2].setAttribute("class", "highlight");

console.log(hobbies[0].getAttribute("class"));
console.log(hobbies[1].getAttribute("class"));
console.log(hobbies[2].getAttribute("class"));

// 6. Read image source using getAttribute and log it in console
let imgsrc = document.getElementsByTagName("img");
console.log(imgsrc[0].getAttribute("src"));

// 7. Add alt text to image using setAttribute
let altText = document.querySelector("img");
altText.setAttribute("alt", "profile-image");
console.log(altText.getAttribute("alt"));

// 8. BONUS: Use setAttribute("id", "highlighted") on the name span (or any element)
//    This should apply the styles from style.css
let highlightName = document.getElementsByClassName("username");
highlightName[0].setAttribute("id", "highlighted");
console.log(highlightName[0].getAttribute("id"));


// ===============================
// Part 4: Button Action (Optional)
let button = document.getElementById("change-info");
button.addEventListener("click", function () {
  age.textContent = 24;
  name[0].style.color = "blue";
  changeHobby[0].innerText = "Traveling";
  changeHobby[1].innerText = "Photography";
  changeHobby[2].innerText = "Blogging";
  img.setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  );
  hobbies[0].setAttribute("class", "highlight");
  hobbies[1].setAttribute("class", "highlight");
  hobbies[2].setAttribute("class", "highlight");
  altText.setAttribute("alt", "new-profile-image");
  highlightName[0].setAttribute("id", "highlighted");
});
// ===============================
// Make all the above changes happen
// when clicking the "Change Info" button