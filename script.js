
let addBtn = document.getElementById("submit")

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    task = document.getElementById("task").value;
    let ulElement = document.getElementById("tasks")
    let liElement = document.createElement("li");
    liElement.innerHTML =`<input type="checkbox" class="cb">
    <p>${task}</p>
    <button class="delete"><i class="fa-solid fa-xmark"></i></button>`
    ulElement.appendChild(liElement);

    let deleteBtn = document.getElementsByClassName("delete")
    for(let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener("click", function(){
        let parentLi = this.parentElement;
        ulElement.removeChild(parentLi); 
        })
    }   
    let checkboxBtn = document.querySelectorAll('.cb');
    checkboxBtn.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let parentLi = this.parentElement;
            let paragraph = parentLi.querySelector('p');
            
            if (this.checked) {
                paragraph.style.textDecoration = "line-through";
            } else {
                paragraph.style.textDecoration = "none";
            }
        });
    });

})


