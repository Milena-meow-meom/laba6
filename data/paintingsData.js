const paintings = [
    {
        id: 1,
        title: "Танец",
        artist: "Анри Матисс",
        year: 1910,
        description: "Авангардная композиция, изображающая пять танцующих фигур на фоне синего и зеленого пейзажа.",
        genre: ["Экспрессионизм", "Авангард"],
        medium: "Масло, холст",
        dimensions: {
            width: 260,
            height: 391,
            unit: "см"
        },
        price: 150000000,
        imageUrl: "https://example.com/images/dance.jpg",
        isFeatured: true,
        createdAt: "2023-01-15"
    },
    {
        id: 2,
        title: "Герника",
        artist: "Пабло Пикассо",
        year: 1937,
        description: "Мощная антивоенная картина, созданная в ответ на бомбардировку Герники немецкой авиацией.",
        genre: ["Кубизм", "Сюрреализм"],
        medium: "Масло, холст",
        dimensions: {
            width: 349,
            height: 776,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/guernica.jpg",
        isFeatured: true,
        createdAt: "2023-01-20"
    },
    {
        id: 3,
        title: "Постоянство памяти",
        artist: "Сальвадор Дали",
        year: 1931,
        description: "Сюрреалистический пейзаж с плавящимися карманными часами, символизирующими относительность времени.",
        genre: ["Сюрреализм"],
        medium: "Масло, холст",
        dimensions: {
            width: 24,
            height: 33,
            unit: "см"
        },
        price: 85000000,
        imageUrl: "https://example.com/images/persistence-of-memory.jpg",
        isFeatured: false,
        createdAt: "2023-02-05"
    },
    {
        id: 4,
        title: "Крик",
        artist: "Эдвард Мунк",
        year: 1893,
        description: "Икона экспрессионизма, передающая экзистенциальную тревогу и отчаяние современного человека.",
        genre: ["Экспрессионизм", "Символизм"],
        medium: "Масло, темпера, пастель, картон",
        dimensions: {
            width: 91,
            height: 73.5,
            unit: "см"
        },
        price: 120000000,
        imageUrl: "https://example.com/images/scream.jpg",
        isFeatured: true,
        createdAt: "2023-02-10"
    },
    {
        id: 5,
        title: "Американская готика",
        artist: "Грант Вуд",
        year: 1930,
        description: "Икона американского искусства, изображающая фермера с дочерью перед домом в готическом стиле.",
        genre: ["Реализм", "Регионализм"],
        medium: "Масло, дерево",
        dimensions: {
            width: 78,
            height: 65.3,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/american-gothic.jpg",
        isFeatured: false,
        createdAt: "2023-02-15"
    },
    {
        id: 6,
        title: "Ночные ястребы",
        artist: "Эдвард Хоппер",
        year: 1942,
        description: "Культовая картина, изображающая людей в ночном кафе, олицетворяющая одиночество в современном городе.",
        genre: ["Реализм", "Модернизм"],
        medium: "Масло, холст",
        dimensions: {
            width: 84.1,
            height: 152.4,
            unit: "см"
        },
        price: 95000000,
        imageUrl: "https://example.com/images/nighthawks.jpg",
        isFeatured: false,
        createdAt: "2023-02-20"
    },
    {
        id: 7,
        title: "Рождение Венеры",
        artist: "Сандро Боттичелли",
        year: 1485,
        description: "Шедевр раннего Возрождения, изображающий богиню Венеру, появляющуюся из морской пены.",
        genre: ["Мифология", "Ренессанс"],
        medium: "Темпера, холст",
        dimensions: {
            width: 172.5,
            height: 278.5,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/birth-of-venus.jpg",
        isFeatured: true,
        createdAt: "2023-03-01"
    },
    {
        id: 8,
        title: "Подсолнухи",
        artist: "Винсент Ван Гог",
        year: 1888,
        description: "Серия натюрмортов с подсолнухами, ставшая символом творчества художника.",
        genre: ["Постимпрессионизм", "Натюрморт"],
        medium: "Масло, холст",
        dimensions: {
            width: 92,
            height: 73,
            unit: "см"
        },
        price: 110000000,
        imageUrl: "https://example.com/images/sunflowers.jpg",
        isFeatured: false,
        createdAt: "2023-03-05"
    },
    {
        id: 9,
        title: "Мона Лиза",
        artist: "Леонардо да Винчи",
        year: 1506,
        description: "Пожалуй, самая известная картина в мире, портрет Лизы дель Джокондо с загадочной улыбкой.",
        genre: ["Портрет", "Ренессанс"],
        medium: "Масло, тополиная доска",
        dimensions: {
            width: 77,
            height: 53,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/mona-lisa.jpg",
        isFeatured: true,
        createdAt: "2023-03-10"
    },
    {
        id: 10,
        title: "Тайная вечеря",
        artist: "Леонардо да Винчи",
        year: 1498,
        description: "Монументальная фреска, изображающая последнюю трапезу Христа с учениками.",
        genre: ["Религиозное искусство", "Ренессанс"],
        medium: "Темпера, гипс",
        dimensions: {
            width: 460,
            height: 880,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/last-supper.jpg",
        isFeatured: true,
        createdAt: "2023-03-15"
    },
    {
        id: 11,
        title: "Сад земных наслаждений",
        artist: "Иероним Босх",
        year: 1515,
        description: "Триптих, изображающий рай, земную жизнь и ад, наполненный символическими образами.",
        genre: ["Религиозное искусство", "Северное Возрождение"],
        medium: "Масло, дерево",
        dimensions: {
            width: 220,
            height: 389,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/garden-of-delights.jpg",
        isFeatured: false,
        createdAt: "2023-03-20"
    },
    {
        id: 12,
        title: "Сотворение Адама",
        artist: "Микеланджело",
        year: 1512,
        description: "Фреска в Сикстинской капелле, изображающая момент передачи жизни от Бога к Адаму.",
        genre: ["Религиозное искусство", "Высокое Возрождение"],
        medium: "Фреска",
        dimensions: {
            width: 280,
            height: 570,
            unit: "см"
        },
        price: 0,
        imageUrl: "https://example.com/images/creation-of-adam.jpg",
        isFeatured: false,
        createdAt: "2023-03-25"
    }
];

module.exports = paintings;