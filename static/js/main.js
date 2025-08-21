const dropdown = document.querySelector('.header-search-dropdown');
const button = dropdown.querySelector('.header-search-button');
const buttonName = button.querySelector('.header-search-button-name');
const menu = dropdown.querySelector('.header-search-menu');
const hiddenInput = document.querySelector('input[name="type"]');
const menuItems = menu.querySelectorAll('li');


function updateSelectedItem(selectedItem) {
    menuItems.forEach(item => {
        item.classList.remove('selected');
    });
    
    selectedItem.classList.add('selected');
    
    buttonName.textContent = selectedItem.textContent; 
    hiddenInput.value = selectedItem.dataset.value;
    
    dropdown.classList.remove('open');
}

function initSelectedItem() {
    const defaultItem = Array.from(menuItems).find(item => 
        item.dataset.value === 'video' || item.textContent.trim() === 'Videos'
    );
    
    if (defaultItem) {
        updateSelectedItem(defaultItem);
    }
}

document.addEventListener('DOMContentLoaded', initSelectedItem);

button.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        updateSelectedItem(item);
    });
});

document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});