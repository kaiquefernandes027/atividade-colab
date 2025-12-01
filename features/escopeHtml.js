function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        document.getElementById('taskForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('taskTitle').value;
            const description = document.getElementById('taskDescription').value;
            const priority = document.getElementById('taskPriority').value;
            const date = document.getElementById('taskDate').value;
            if (title.trim()) {
                addTask(title, description, priority, date);
                this.reset();
                document.getElementById('taskTitle').focus();
            }
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                filterTasks(this.dataset.filter);
            });
        });

        const today = new Date().toISOString().split('T')[0];
        document.getElementById('taskDate').setAttribute('min', today);

        renderTasks();
        updateStats();
        document.getElementById('taskTitle').focus();