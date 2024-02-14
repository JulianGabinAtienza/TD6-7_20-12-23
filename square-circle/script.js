function toggleClassAndId(element) {
    if (element.classList.contains('circle')) {
        element.classList.remove('circle');
        element.id = 'square';
    } else {
        element.classList.add('circle');
        element.removeAttribute('id');
    }
}