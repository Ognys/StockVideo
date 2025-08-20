const dropdown = document.querySelector('.header-search-dropdown');
const button = dropdown.querySelector('.header-search-button');
const buttonName = button.querySelector('.header-search-button-name');
const menu = dropdown.querySelector('.header-search-menu');
const hiddenInput = document.querySelector('input[name="type"]');

button.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

menu.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    buttonName.textContent = item.textContent;       // меняем текст кнопки
    hiddenInput.value = item.dataset.value;          // обновляем input
    dropdown.classList.remove('open');               // закрываем меню
  });
});