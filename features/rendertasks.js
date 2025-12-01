function renderTasks() {
            const container = document.getElementById('tasksContainer');
            const filteredTasks = getFilteredTasks();
            
            if (filteredTasks.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                        </svg>
                        <h3>${currentFilter === 'all' ? 'Nenhuma tarefa cadastrada' : 'Nenhuma tarefa encontrada'}</h3>
                        <p>${currentFilter === 'all' ? 'Comece adicionando sua primeira tarefa!' : 'Tente outro filtro'}</p>
                    </div>
                `;
                return;
            }

            const priorityLabels = {
                high: '🔴 Alta',
                medium: '🟡 Média',
                low: '🔵 Baixa'
            };

            container.innerHTML = filteredTasks.map(task => `
                <div class="task-card priority-${task.priority} ${task.completed ? 'completed' : ''}">
                    <div class="task-header">
                        <h3>${escapeHtml(task.title)}</h3>
                    </div>
                    ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ''}
                    ${task.date ? `<div class="task-date">📅 ${formatDate(task.date)}</div>` : ''}
                    <div class="task-meta">
                        <span class="task-priority priority-${task.priority}">${priorityLabels[task.priority]}</span>
                        <div class="task-actions">
                            <button class="btn-small btn-complete" onclick="toggleComplete(${task.id})">${task.completed ? '↩️' : '✓'}</button>
                            <button class="btn-small btn-delete" onclick="deleteTask(${task.id})">🗑️</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
