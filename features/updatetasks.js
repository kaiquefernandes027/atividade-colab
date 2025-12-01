function updateStats() {
            document.getElementById('totalTasks').textContent = tasks.length;
            document.getElementById('completedTasks').textContent = tasks.filter(t => t.completed).length;
            document.getElementById('pendingTasks').textContent = tasks.filter(t => !t.completed).length;
        }