export default [
    {
        id: 1,
        name: 'RMH',
        category: {
            name: 'Ресторан',
            id: 2
        },
        averageCheck: 1500,
        address: 'Дворцовая, 10',
        review: [
            {
                id: 3,
                rating: 3.5,
                author: 'aaa',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 2,
                rating: 5,
                author: 'bbb',
                text: 'Lorem ipsum dolor sit amet',
            },
          {
            id: 4,
            rating: 3.5,
            author: 'ccc',
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 6,
            rating: 5,
            author: 'ddd',
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 8,
            rating: 4,
            author: 'iii',
            text: 'Lorem ipsum dolor sit amet',
          }
        ]
    },
    {
        id: 2,
        name: 'Макдональдс',
        category: {
            name: 'Кафе',
            id: 1
        },
        averageCheck: 500,
        address: 'Гончарова, 21А',
        review: [
            {
                id: 33,
                rating: 3,
                author: 'fff',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 33,
                rating: 4,
                author: 'jjj',
                text: 'Lorem ipsum dolor sit amet',
            },
        ]
    },
    {
        id: 3,
        name: 'Day&Night',
        category: {
            name: 'Ресторан',
            id: 2
        },
        review: [
            {
                id: 33,
                rating: 3.5,
                author: 'hhh',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 24,
                rating: 5,
                author: 'rrr',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 35,
                rating: 5,
                author: 'sss',
                text: 'Lorem ipsum dolor sit amet',
            },
        ],
        averageCheck: 2000,
        address: 'Московское шоссе, 100Б'
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
        review: [
            {
                id: 33,
                rating: 2,
                author: 'ooo',
                text: 'Lorem ipsum dolor sit amet',
            }
        ]
    },
    {
        id: 5,
        name: 'Yankee',
        category: {
            name: 'Бар',
            id: 4
        },
        averageCheck: 1000,
        address: 'Московское шоссе, 108',
        review: [
            {
                id: 33,
                rating: 4.6,
                author: 'qqq',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 33,
                rating: 4.3,
                author: 'ttt',
                text: 'Lorem ipsum dolor sit amet',
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
        review: [
            {
                id: 33,
                rating: 4.5,
                author: 'yyy',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 33,
                rating: 5,
                author: 'iii',
                text: 'Lorem ipsum dolor sit amet',
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
        averageCheck: 150,
        address: 'Карла Маркса, 4А',
        review: [
            {
                id: 33,
                rating: 1.4,
                author: 'xxx',
                text: 'Lorem ipsum dolor sit amet',
            }
        ]
    },
];
