// set  initial count
let count = 0;

// select value and button

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function (e){
          const Styles = e.currentTarget.classList;
          if (Styles.contains("decrease")) {
            count--;
          }
          else if (Styles.contains("increase")) {
            count++;
          }
          else{
               count = 0;
          }
          if (count > 0){
            value.style.color = "green";
          }
          if (count > 0){
            value.style.color = "red";
          }

          if (count === 0){
            value.style.color = "#222 ";
          }

          if (count < 0){
            value.textContent = count; 
          }
          
    });
});
