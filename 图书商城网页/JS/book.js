document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.sj_list .item');
    const filters = document.querySelectorAll('.cate_search_item ul li');

    // 分页按钮点击事件
    document.querySelectorAll('.pages a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.textContent;
            updatePage(page);
        });
    });

    // 筛选按钮点击事件
    filters.forEach(filter => {
        filter.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedFilter = event.target.textContent;
            filterItems(selectedFilter);
        });
    });

    // 初始加载第一页
    updatePage(1);

    function updatePage(page) {
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

    function filterItems(filter) {
        items.forEach(item => {
            const itemName = item.querySelector('.item_name').textContent.toLowerCase();
            const filterText = filter.toLowerCase();
            if (itemName.includes(filterText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

