let ajax = new XMLHttpRequest();
ajax.open('GET', '/employees', true);
ajax.onreadystatechange = () =>{
    let response = JSON.parse(ajax.responseText);
    //let disponible = document.getElementById('disponiveis');
    for(let i = 0; i < response.length; i++){
        $('#disponiveis').append(`
            <div class="todo" draggable="true">
            <button id="add_btn" data-target-modal="#todo_form" value="${response[i].Nome}">${response[i].Nome} ${response[i].Sobrenome}</button>
            <span class="close">&times;</span>
            </div>`);
        }
    const todos = document.querySelectorAll('.todo'); 
    const all_status = document.querySelectorAll('.status');
    let draggableTodo = null; 

    todos.forEach(
        (todo) => {
            todo.addEventListener('dragstart', dragStart);
            todo.addEventListener('dragend', dragEnd);
        });

    function dragStart(){
        draggableTodo = this; 
        console.log(this);
        setTimeout(() => {
            this.style.display = 'none'; 
        }, 0);
    }

    function dragEnd(){
        draggableTodo = null; 
        setTimeout(() => {
            this.style.display = 'block'; 
        }, 0);
    }

    all_status.forEach(status => {
        status.addEventListener('dragover', dragOver);
        status.addEventListener('dragenter', dragEnter);
        status.addEventListener('dragleave', dragLeave);
        status.addEventListener('drop', dragDrop);
    }); 

    function dragOver(e){
        e.preventDefault(); 
    }

    function dragEnter(){
        this.style.border = '1px dashed #ccc';
    }

    function dragLeave(){
        this.style.border = 'none';
    }

    function dragDrop(){
        this.style.border = 'none';
        this.appendChild(draggableTodo);
    }

    // Modal 

    const btns = document.querySelectorAll("[data-target-modal]");
    const close_modals = document.querySelectorAll(".modal-btn"); 
    const overlay = document.querySelector("#overlay");

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector(btn.dataset.targetModal).classList.add('active');
            overlay.classList.add("active");
        })
    });

    close_modals.forEach(btn => {
        btn.addEventListener('click', () => {
            //Duas maneiras de remover o Modal.
            document.querySelector(btn.dataset.targetModal).classList.remove('active');
            // btn.closest(".modal").classList.remove("active"); 
            overlay.classList.remove("active"); 
        })
    });

    window.onclick = (e) => {
        if (e.target == overlay) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => modal.classList.remove('active'));
            overlay.classList.remove("active");  
        }
    }
}

ajax.send();