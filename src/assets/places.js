export default [
    {
        id: 1,
        name: 'RMH',
        category: {
            name: 'Ресторан',
            id: 2
        },
        averageCheck: 2000,
        address: 'Дворцовая, 10',
        coords: [54.318537, 48.396902],
        review: [
            {
                id: 1,
                star: 4,
                author: 'Виталий',
                text: 'Хорошо,очень понравилось',
            },
            {
                id: 2,
                star: 5,
                author: 'Наталья',
                text: 'Отдыхала тут с друзьями,было отлично',
            },
            {
                id: 3,
                star: 3.5,
                author: 'Норман Осборн',
                text: 'Бармен нас обманул!',
            },
            {
                id: 4,
                star: 5,
                author: 'Катя',
                text: 'Отлично',
            }
        ]
    },
    {
        id: 2,
        name: 'Day&Night',
        category: {
            name: 'Кафе',
            id: 1
        },
        averageCheck: 1500,
        address: 'Московское шоссе, 100б',
        coords: [54.305573, 48.354262],
      review: [
        {
          id: 2,
          star: 5,
          author: 'Виталий',
          text: 'Хорошо,очень понравилось',
        },
        {
          id: 54,
          star: 4,
          author: 'Анатолий',
          text: 'Все понравилось,очень вкусные коктейли',
        }]
    },
    {
        id: 3,
        name: 'Miruki',
        category: {
            name: 'Ресторан',
            id: 2
        },
        review: [
            {
                id: 1,
                star: 3.5,
                author: 'Гоша',
                text: 'Декор не плохой,но в сушах рыба сырая!!',
            },
            {
                id: 2,
                star: 5,
                author: 'Светлана',
                text: 'Парень пригласил туда на свидание,ресторан понравился,а вот парень не очень',
            },
            {
                id: 3,
                star: 5,
                author: 'Юля',
                text: 'Все понравилось,наверное,не помню просто,выпила много)',
            },
        ],
        averageCheck: 2500,
        address: 'Минаева, 15',
        coords: [54.308009, 48.390588],
    },
    {
        id: 4,
        name: 'Gonzo',
        category: {
            name: 'Бар',
            id: 4
        },
        averageCheck: 1500,
        address: 'Гончарова, 48',
        coords: [54.319828, 48.399610],
        review: [
            {
                id: 1,
                star: 2,
                author: 'Ашот',
                text: 'Пришли,не понравилось,пошли в Records',
            }
        ]
    },
    {
        id: 5,
        name: 'Yankee',
        category: {
            name: 'Ресторан',
            id: 2
        },
        averageCheck: 1200,
        address: 'Московское шоссе, 108',
        coords: [54.305945, 48.359940],
        review: [
            {
                id: 1,
                star: 4.6,
                author: 'Катя',
                text: 'Было весело,даже танцевала на барной стойке',
            },
            {
                id: 2,
                star: 3,
                author: 'Артем',
                text: 'Все понравилось,особенно как танцевала девушка на баре)',
            },
        ]
    },
    {
        id: 6,
        name: 'Синема Парк',
        category: {
            name: 'Кинотеатр',
            id: 3
        },
        averageCheck: 250,
        address: 'Московское шоссе, 108',
        coords: [54.307367, 48.361561],
        review: [
            {
                id: 1,
                star: 5,
                author: 'Марат',
                text: 'Ходил на мстителей,кинотеатр отпад,очень все реалистично,правда почти все герои в фильме погибли(',
            },
            {
                id: 2,
                star: 5,
                author: 'Дима',
                text: 'Неплохо',
            },
        ],
    },
    {
        id: 7,
        name: 'Мувиз',
        category: {
            name: 'Кинотеатр',
            id: 3
        },
        averageCheck: 100,
        address: 'Карла Маркса, 4а',
        coords: [54.317368, 48.399852],
        review: [
            {
                id: 1,
                star: 3,
                author: 'Илья',
                text: 'Хороший кинотеатр,там можно без билета заходить и смотреть ,уже года 2 так смотрю фильмы)',
            }
        ]
    },
];
