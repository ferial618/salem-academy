/* JS to enable nested dropdown toggle (put after bootstrap.bundle.min.js) */
document.addEventListener('DOMContentLoaded', function () {
  // Toggle submenu on click
  document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const submenu = el.nextElementSibling;
      if (!submenu) return;

      // toggle this submenu
      submenu.classList.toggle('show');

      // close other open submenus at the same level
      const parentMenu = el.closest('.dropdown-menu');
      parentMenu.querySelectorAll('.dropdown-menu.show').forEach(function (open) {
        if (open !== submenu) open.classList.remove('show');
      });
    });
  });

  // When parent dropdown closes, make sure to close any open submenus
  document.querySelectorAll('.dropdown').forEach(function (dd) {
    dd.addEventListener('hide.bs.dropdown', function () {
      dd.querySelectorAll('.dropdown-menu.show').forEach(function (open) {
        open.classList.remove('show');
      });
    });
  });
});
