let addMassage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');
    let todoList = [];

    if(localStorage.getItem('todo')){
        todoList = JSON.parse(localStorage.getItem('todo'))
        displayMessages();
    }

    addButton.addEventListener('click', function(){
        let newToDo = {
            todo: addMassage.value,
            checked: false,
            
        };

        todoList.push(newToDo);
        displayMessages()
        localStorage.setItem('todo', JSON.stringify(todoList));
    });

    function displayMessages() {
        let displayMessage ='';
        todoList.forEach(function(item, i){
             displayMessage += `
            <li>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : '' } >
                <label for='item_${i}'}">${item.todo}</label>
                <span class="close">×</span>
            </li>
            `;
            todo.innerHTML = displayMessage;

        });
    }

    todo.addEventListener('change',function(event) {
        let idInput = event.target.getAttribute('id');
        let forLabel = todo.querySelector('[for=' + idInput + ']');
        let valueLabel = forLabel.innerHTML;
        todoList.forEach(function(item) {
            if (item.todo === valueLabel) {
                item.checked = !item.checked;
                localStorage.setItem('todo', JSON.stringify(todoList));
                
            }
        });
    });

    
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
        }
    }
