function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "削除";

    // 削除ボタンのスタイル
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.backgroundColor = "#ff4d4d";
    deleteButton.style.color = "#e6e6e5";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "5px";
    deleteButton.style.cursor = "pointer";

    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}