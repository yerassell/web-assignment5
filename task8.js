let tasks = [];
const title = document.getElementById("title");
const description = document.getElementById("description");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");

addbtn.addEventListener("click", function () {
    if (title.value.trim() === "") {
        return;
    }

    tasks.push({title: title.value.trim(),description: description.value.trim(),completed: false});

    showTasks();

    title.value = "";
    description.value = "";
});

function showTasks() {
    list.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");

        const titleList = document.createElement("p");
        const descList = document.createElement("p");
        const deleteBtn = document.createElement("button");

        titleList.textContent = task.title;
        descList.textContent = task.description;
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delbtn";

        if (task.completed) {
            titleList.classList.add("completed");
            descList.classList.add("completed");
        }

        titleList.addEventListener("click", function () {
            task.completed = !task.completed;
            showTasks();
        });

        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            showTasks();
        });

        li.appendChild(titleList);
        li.appendChild(descList);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });

}
