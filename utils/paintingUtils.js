// Поиск по тексту в полях title, artist, description
const applySearch = (paintings, searchTerm) => {
    if (!searchTerm) return paintings;
    return paintings.filter(painting => painting.title.toLowerCase().includes(searchTerm) || painting.artist.toLowerCase().includes(searchTerm) || painting.description.toLowerCase().includes(searchTerm));
};

// Применение фильтров
const applyFilters = (paintings, filters) => {
    let filtered = [...paintings];

    // Фильтрация по жанру
    if (filters.genre) {
        const genreTerm = filters.genre.toLowerCase();
        filtered = filtered.filter(painting =>
            painting.genre.some(g => g.toLowerCase().includes(genreTerm))
        );
    }

    // Фильтрация по художнику
    if (filters.artist) {
        const artistTerm = filters.artist.toLowerCase();
        filtered = filtered.filter(painting =>
            painting.artist.toLowerCase().includes(artistTerm)
        );
    }

    // Фильтрация по минимальному году
    if (filters.minYear) {
        const minYear = parseInt(filters.minYear);
        if (!isNaN(minYear)) {
            filtered = filtered.filter(painting => painting.year >= minYear);
        }
    }

    // Фильтрация по максимальному году
    if (filters.maxYear) {
        const maxYear = parseInt(filters.maxYear);
        if (!isNaN(maxYear)) {
            filtered = filtered.filter(painting => painting.year <= maxYear);
        }
    }

    // Фильтрация по минимальной цене
    if (filters.minPrice) {
        const minPrice = parseInt(filters.minPrice);
        if (!isNaN(minPrice)) {
            filtered = filtered.filter(painting => painting.price >= minPrice);
        }
    }

    // Фильтрация по максимальной цене
    if (filters.maxPrice) {
        const maxPrice = parseInt(filters.maxPrice);
        if (!isNaN(maxPrice)) {
            filtered = filtered.filter(painting => painting.price <= maxPrice);
        }
    }

    // Фильтрация по featured статусу
    if (filters.featured !== undefined) {
        const isFeatured = filters.featured === 'true';
        filtered = filtered.filter(painting => painting.isFeatured === isFeatured);
    }

    return filtered;
};

// Валидация и применение сортировки
const applySorting = (paintings, sortBy, sortOrder = 'asc') => {
    if (!sortBy) return paintings;

    const validSortFields = ['title', 'artist', 'year', 'price', 'id'];
    const validOrders = ['asc', 'desc'];

    // Валидация поля сортировки
    const sortField = sortBy.toLowerCase();
    if (!validSortFields.includes(sortField)) {
        throw new Error(`Недопустимое поле для сортировки: ${sortBy}. Допустимые поля: ${validSortFields.join(', ')}`);
    }

    // Валидация порядка сортировки
    const order = sortOrder.toLowerCase();
    if (!validOrders.includes(order)) {
        throw new Error(`Недопустимый порядок сортировки: ${sortOrder}. Допустимые значения: ${validOrders.join(', ')}`);
    }

    const sorted = [...paintings].sort((a, b) => {
        let valueA = a[sortField];
        let valueB = b[sortField];

        // Для строк приводим к нижнему регистру для корректного сравнения
        if (typeof valueA === 'string') {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }

        if (valueA < valueB) return order === 'asc' ? -1 : 1;
        if (valueA > valueB) return order === 'asc' ? 1 : -1;
        return 0;
    });

    return sorted;
};

// Применение пагинации
const applyPagination = (paintings, page, limit) => {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;

    return {
        data: paintings.slice(startIndex, endIndex), // Выборка данных для текущей страницы
        pagination: {
            currentPage: pageNum,
            totalPages: Math.ceil(paintings.length / limitNum),
            itemsPerPage: limitNum,
            totalItems: paintings.length,
            hasNextPage: pageNum < Math.ceil(paintings.length / limitNum),
            hasPrevPage: pageNum > 1
        }
    };
};

module.exports = {
    applySearch,
    applyFilters,
    applyPagination,
    applySorting
};
