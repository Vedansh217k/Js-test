let tasks = [];
function getRandomColor() {
  const colors = [
    "#FF5733", "#33FF57", "#339BFF", "#F39C12",
    "#8E44AD", "#1ABC9C", "#FF33F6", "#2ECC71",
    "#FF6F61", "#2980B9", "#E67E22", "#16A085"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
/**
 * Adds Tasks in the ToDo list.
 */
function addtask(task){
    const input = document.getElementById("tasksinput");
    const list = document.getElementById("Tasks");
    
        const task = input.value.trim()
        if(task !==""){
            tasks.push(task);
            console.log(tasks);

            const li = document.createElement('li');
            li.textContent = `${taskObj.task} (${taskObj.status})`;

            li.style.borderColor = getRandomColor();
            li.classList.add("libg");

            const status = document.createElement("span")

            list.appendChild(li);
            input.value = "";
        }
        else{
            alert("Please enter task");
        }
}
const todo = [];
let current = 0;

        
    


