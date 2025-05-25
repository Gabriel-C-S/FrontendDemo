document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('closed');
    body.classList.toggle('sidebar-closed');
  });
});
