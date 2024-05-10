const form = document.querySelector('#newTaskForm');
const input = document.querySelector("#newTaskInput");
const listEl =document.querySelector("#tasks");
const titleTag = document.title;
const body = document.body;
const modeIcon = document.querySelector('#ModeIcon');
window.addEventListener("blur",()=>{
    document.title = "dont forget to do your list";
});

window.addEventListener("focus",()=>{
    document.title = titleTag;
});

window.addEventListener('load',()=>{



    form.addEventListener('submit',(e) => {
        e.preventDefault();
        const task = input.value;

        if(!task)
          alert("please fill out this input")
        else {

            input.value = ''

            const taskEl = document.createElement("div");
            taskEl.classList.add("task");

            const taskContetnEl = document.createElement("div");
            taskContetnEl.classList.add('content');

            taskEl.appendChild(taskContetnEl);
            const taskInputEl = document.createElement('input');
            taskInputEl.classList.add('text');
            taskInputEl.value= task;
            taskInputEl.setAttribute("readonly","readonly")
            taskInputEl.type ="text";
            taskContetnEl.appendChild(taskInputEl);

            const taskActionEl = document.createElement('div');
            taskActionEl.classList.add('actions');

            const taskEditEl = document.createElement('button');
            taskEditEl.classList.add('edit');
            taskEditEl.name = "Edit";
            const EditIcon = document.createElement('i');
            EditIcon.classList.add('fas');
            EditIcon.classList.add('fa-edit');
            taskEditEl.appendChild(EditIcon);

            const taskdeleteEl = document.createElement('button');
            taskdeleteEl.classList.add('delete');
            const deletIcon = document.createElement('i');
            deletIcon.classList.add('fas');
            deletIcon.classList.add('fa-trash');
            taskdeleteEl.appendChild(deletIcon);



            taskActionEl.appendChild(taskEditEl)
            taskActionEl.appendChild(taskdeleteEl)
            taskEl.appendChild(taskActionEl)


            listEl.appendChild(taskEl);

            taskEditEl.addEventListener('click',()=>{
               if(taskEditEl.name === "Edit"){
                   taskInputEl.removeAttribute("readonly");
                   taskInputEl.focus();
                   EditIcon.classList.add('fas');
                   EditIcon.classList.add('fa-save');
                   EditIcon.classList.remove('fa-edit');
                   taskEditEl.name = "save"
               }
               else {
                   taskInputEl.setAttribute("readonly","readonly");
                   EditIcon.classList.remove('fa-save');
                   EditIcon.classList.add('fa-edit');
                   taskEditEl.name = "Edit";
               }
            });

            taskdeleteEl.addEventListener('click',()=>{
                listEl.removeChild(taskEl);
            });


        }

    });
});


// add light mode

modeIcon.addEventListener('click',()=>{
    if (modeIcon.classList.contains('fa-moon')) {
        body.style.backgroundColor = "#c5cf2e";
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        input.style.backgroundColor = '#e0e5ec';
        input.style.color = 'var(--dark)';
        let e =document.getElementsByClassName('task');
        let v =document.getElementsByClassName('text');
        for(let i =0 ; i<e.length;i++)
        {
            e[i].style.backgroundColor = '#e0e5ec';
            v[i].style.color = 'var(--dark)'
        }


    }

    else{
        body.style.backgroundColor= "#c5cf2e";
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        body.style.backgroundColor= "var(--dark)";
        input.style.backgroundColor = "var(--darker)";
        input.style.color = 'var(--light)';
        let e =document.getElementsByClassName('task');
        let v =document.getElementsByClassName('text');
        for(let i =0 ; i<e.length;i++)
        {
            e[i].style.backgroundColor = 'var(--darker)';
            v[i].style.color = 'var(--light)'
        }
    }




})
