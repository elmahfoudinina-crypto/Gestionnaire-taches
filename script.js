let tasks = [
    {
        id: 1,
        title: "Apprendre JavaScript",
        description: "Réviser les tableaux et les objets",
        completed: false
    },
    {
        id: 2,
        title: "Créer une page HTML",
        description: "Utiliser les éléments HTML5",
        completed: true
    },
    {
        id: 3,
        title: "Manipuler le DOM",
        description: "Créer et supprimer des éléments",
        completed: false
    }
];

const taskForm = document.getElementById("taskForm");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const submitBtn = document.getElementById("submitBtn");
const tasksContainer = document.getElementById("tasksContainer");


function displayTasks() {

    tasksContainer.innerHTML = "";

    tasks.forEach(task => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>${task.completed ? "Terminée" : "En cours"}</p>
        `;

        div.innerHTML += `
            <button>Modifier</button>
            <button>Supprimer</button>
        `;

        tasksContainer.appendChild(div);

    });

}


displayTasks();


taskForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const title = titleInput.value;
    const description = descriptionInput.value;
    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false
    };
    tasks.push(newTask);
    titleInput.value = "";
    descriptionInput.value = "";
    displayTasks();





});




