const button = document.getElementById("send");
const daynight = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body");

daynight.addEventListener('click', () => {
    if (body.classList.toggle('dark-mode')) {
        daynight.textContent = '☀️';
    } else {
        daynight.textContent = '🌙';
    }
});

button.addEventListener('click', () => {
    const li = document.createElement("li");
    li.className = 'li-element';
    taskList.appendChild(li);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    li.appendChild(checkbox);

    let a = document.createElement('span');
    a.textContent = input.value;
    li.appendChild(a);

    const editDelete = document.createElement('div');
    li.appendChild(editDelete);

    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊';
    editDelete.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣';
    editDelete.appendChild(deleteBtn);

    editBtn.addEventListener('click', () => {
        a.textContent = prompt(`Измени значение ${a.textContent} на следующее`);
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            a.style.textDecoration = "line-through";
            a.style.color = "gray";
        } else {
            a.style.textDecoration = "none";
            a.style.color = "black";
        }
    });
});
