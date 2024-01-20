let todolist = []

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
  
    // Check if input fields are empty
    if (!todoItem.trim() || !todoDate.trim()) {
      alert('Please enter both the todo and due date.');
      return; // Stop execution if input is empty
    }
  
    todolist.push({ item: todoItem, dueDate: todoDate });
    inputElement.value = '';
    dateElement.value = '';
  
    displayItems();
  }

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for ( let i = 0; i < todolist.length; i++){
        let {item,dueDate} = todolist[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button onclick = "todolist.splice(${i},1);
            displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}