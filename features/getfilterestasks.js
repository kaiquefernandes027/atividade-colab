function getFilteredTasks() {
            switch(currentFilter) {
                case 'pending':
                    return tasks.filter(t => !t.completed);
                case 'completed':
                    return tasks.filter(t => t.completed);
                case 'high':
                    return tasks.filter(t => t.priority === 'high' && !t.completed);
                default:
                    return tasks;
            }
        }
// buscar-tarefa: commit 2
