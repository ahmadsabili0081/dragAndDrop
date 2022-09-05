let btnAdd = document.querySelector('.btnAdd');
let container = document.querySelector('.container');
let dragTodoStatus = document.querySelectorAll('.todo')
let todoListEls = document.querySelector('.todo');
let draggableTodo = null;
let modalCloseBtn = document.querySelector('.closeBtn');

btnAdd.addEventListener('click',(e) => {
  e.preventDefault();
  createModalFunc(e);
});

let modal = document.querySelector('.modal__todo');
let buttonAddEls = document.querySelector('.addTodoEls');
function createModalFunc(e){
  modal.style.display = "block"
}
buttonAddEls.addEventListener('click',() => {
  let inputValue = document.querySelector('.inputTodo').value;
   if(inputValue === ""){
    window.alert('Mohon maaf, isi form,jangan sampai kosong')
   }else{
    let btnList = document.createElement('button');
    btnList.classList = "btnListClose";
    btnList.innerHTML = `<i class="fa-solid fa-xmark">`
    let todoList = document.createElement('div');
    todoList.classList = "todoList";
    todoList.draggable = true;
    todoList.appendChild(document.createTextNode(inputValue));
    todoList.appendChild(btnList)
    todoListEls.appendChild(todoList);
    
    setTimeout(()=>{
     modal.style.display = "none";
    },0);


    let todoListElsCreate = document.querySelectorAll('.todoList');
    let deleteTodo = document.querySelectorAll('.todoList');
    deleteTodo.forEach((deleteTodo) => {
      deleteTodo.addEventListener('click',(e) => {
        if(e.target.classList.contains('btnListClose')){
          e.target.parentElement.remove();
        }
      }) 
    })

    todoListElsCreate.forEach((todoClick) => {
      todoClick.addEventListener('dragstart', dragStart)
      todoClick.addEventListener('dragend', dragEnd)
    });
    clearInputFunc()
   }
});

modalCloseBtn.addEventListener('click',(e) => {
  modal.style.display = "none";
})
function clearInputFunc(){
  let inputValue = document.querySelector('.inputTodo');
  inputValue.value = "";
}
function dragStart(){
  draggableTodo = this;
}
function dragEnd(){
  draggableTodo = null;
}
dragTodoStatus.forEach((todoDragStatus) => {
  todoDragStatus.addEventListener('dragover',(e) => {
    e.preventDefault();
  });
  todoDragStatus.addEventListener('dragenter',() => {
    console.log('Drag Enter')
  });
  todoDragStatus.addEventListener('dragleave',() => {
    console.log('Drag leave');
  });
  todoDragStatus.addEventListener('drop',() => {
    todoDragStatus.appendChild(draggableTodo)
  })
});

