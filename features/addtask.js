        function addTask(title, description, priority, date) {
            const task = {
                id: Date.now(),
                title: title.trim(),
                description: description.trim(),
                priority: priority,
                date: date,
                completed: false,
                createdAt: new Date().toISOString()
            };
            tasks.unshift(task);
            saveTasks();
            renderTasks();
            updateStats();
        }