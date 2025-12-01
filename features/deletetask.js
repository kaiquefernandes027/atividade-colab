function deleteTask(id) {
            if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
                tasks = tasks.filter(task => task.id !== id);
                saveTasks();
                renderTasks();
                updateStats();
            }
        }