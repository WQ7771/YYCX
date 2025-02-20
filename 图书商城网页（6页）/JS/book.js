document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.sj_list .item');
    const filters = document.querySelectorAll('.cate_search_item ul li');
    let currentPage = 1;
    let currentFilter = '';

    // Delegate pagination click events
    document.querySelector('.pages').addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const page = event.target.textContent;
            updatePage(page);
        }
    });

    // Delegate filter click events
    document.querySelector('.cate_search_item ul').addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.preventDefault();
            const selectedFilter = event.target.textContent;
            filterItems(selectedFilter);
        }
    });

    // Initial load
    updatePage(1);

    // Update page content
    function updatePage(page) {
        currentPage = page;
        const start = (page - 1) * 10;
        const end = start + 10;
        items.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Filter items
    function filterItems(filter) {
        currentFilter = filter;
        items.forEach(item => {
            const itemName = item.querySelector('.item_name').textContent.toLowerCase();
            const filterText = filter.toLowerCase();
            if (itemName.includes(filterText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        updatePage(currentPage);  // Ensure pagination works with filtering
    }
});
