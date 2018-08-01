document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('filter');
    const tag = document.getElementsByClassName('container__content__item__description__tags');
    const tags = document.getElementsByClassName('container__content__item__description__tags-item');
    const content = document.getElementById('content');
    const contentId = document.getElementById('container');

    // Change color of buttons after click
    list.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('container__filters-item-active');
        }
    });

    const filterTags = ev => {
        if (ev.target.tagName === 'LI') {
            // Filter HTMLCollection as Array
            const filteredCollection = Array.prototype.filter.call(tags, tags => tags.innerHTML === ev.target.innerHTML);
                console.log(filteredCollection);
            // Check if elements have tag names and remove them if they don't
            if (filteredCollection.length === 0) {
                while (content.firstChild) {
                    content.removeChild(content.firstChild);
                }
            }
        }
    }

    // Add event listener to filters
    list.addEventListener('click', filterTags);
});