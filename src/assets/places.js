export default [
    {
        id: 1,
        name: 'RMH',
        category: {
            name: 'Ресторан',
            id: 2
        },
        averageCheck: 2000,
        address: 'Гончарова,б20',
        review: [
            {
                id: 3,
                star: 3.5,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
          {
            id: 1,
            star: 5,
            author: 'user_name_111',
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 10,
            star: 5,
            author: 'user_name_111',
            text: 'Lorem ipsum dolor sit amet',
          },
          {
            id: 8,
            star: 3.5,
            author: 'user_name_111',
            text: 'Lorem ipsum dolor sit amet',
          },
            {
                id: 2,
                star: 5,
                author: 'user_name_222',
                text: 'Lorem ipsum dolor sit amet',
            }
        ]
    },
    {
        id: 2,
        name: 'Day&Night',
        category: {
            name: 'Ресторан',
            id: 1
        },
        averageCheck: 500,
        address: 'Московское шоссе, 50',
        review: [
            {
                id: 33,
                star: 3,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 33,
                star: 4,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
        ]
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
                id: 33,
                star: 3.5,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 24,
                star: 5,
                author: 'user_name_222',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 35,
                star: 5,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
        ],
        averageCheck: 3000,
        address: 'Минаева, 10'
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
                star: 2,
                author: 'user_name_111',
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
                star: 4.6,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 33,
                star: 4.3,
                author: 'user_name_111',
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
                star: 4.5,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            },
            {
                id: 33,
                star: 5,
                author: 'user_name_111',
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
        averageCheck: 100,
        address: 'Радищева,30',
        review: [
            {
                id: 33,
                star: 1.4,
                author: 'user_name_111',
                text: 'Lorem ipsum dolor sit amet',
            }
        ]
    },
];
