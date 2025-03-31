function selectOption(option, showDropdowns) {
    document.querySelectorAll('.option').forEach(el => {
        el.classList.remove('selected');
        el.querySelector('input').checked = false;
        let dropdowns = el.querySelector('.dropdowns');
        if (dropdowns) dropdowns.style.display = 'none';
    });
    option.classList.add('selected');
    option.querySelector('input').checked = true;
    if (showDropdowns) {
        let dropdowns = option.querySelector('.dropdowns');
        if (dropdowns) dropdowns.style.display = 'block';
        document.querySelector('.total').textContent = `Total: $${price}.00 USD`;
    }
}