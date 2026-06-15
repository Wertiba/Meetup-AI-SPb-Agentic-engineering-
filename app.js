const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const resume = ref(RESUME_DATA);
    const selectedProject = ref(null);

    const openProject = (project) => {
      selectedProject.value = project;
      document.body.style.overflow = 'hidden';
    };

    const closeProject = () => {
      selectedProject.value = null;
      document.body.style.overflow = '';
    };

    return {
      resume,
      selectedProject,
      openProject,
      closeProject
    };
  }
});

// Монтируем приложение
app.mount('#app');

// Вспомогательные функции для обратной совместимости
function sortByYear(milestones) {
  return [...milestones].sort((a, b) => a.year - b.year);
}

function renderTimeline(milestones, container) {
  if (!container) return container;
  container.textContent = 'Vue 3 is handling the render.';
  return container;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sortByYear, renderTimeline };
}
