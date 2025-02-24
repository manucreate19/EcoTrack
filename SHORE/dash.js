document.addEventListener('DOMContentLoaded', () => {
    // Highlight today's date in the calendar
    const highlightToday = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth(); // Get the current month
        const year = today.getFullYear(); // Get the current year

        const cells = document.querySelectorAll('.calendar td');
        cells.forEach(cell => {
            // Ensure the cell matches the exact day and contains no duplicate values
            const cellDay = parseInt(cell.textContent.trim(), 10);
            if (cellDay === day && cell.dataset.month == month && cell.dataset.year == year) {
                cell.classList.add('highlight');
            }
        });
    };

    // Add new task
    const addTask = () => {
        const taskInput = prompt('Enter your new task:');
        if (taskInput && taskInput.trim() !== '') {
            const taskList = document.querySelector('.tasks');
            const newTask = document.createElement('li');
            newTask.innerHTML = `<input type="checkbox"> ${taskInput}`;
            taskList.appendChild(newTask);
        } else {
            alert('Task cannot be empty!');
        }
    };

    // Mark tasks as completed
    const toggleTaskCompletion = () => {
        const taskList = document.querySelector('.tasks');
        taskList.addEventListener('change', e => {
            if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
                const taskItem = e.target.parentNode;
                taskItem.style.textDecoration = e.target.checked ? 'line-through' : 'none';
            }
        });
    };

    // Attach event listeners
    document.querySelector('.btn').addEventListener('click', addTask);
    toggleTaskCompletion();
    highlightToday();
});
