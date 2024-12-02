const chats = [
    {
        id: 1,
        name: 'Robert Plant',
        img: '/assets/profile-pictures/robert.webp',
        messages: [
            {
                time: "22:10",
                status: 'read',
                id: 1,
                text: 'Hola Robert',
                type: 'sent'
            },
            {
                time: "22:11",
                status: 'received',
                id: 2,
                text: 'Que tal?',
                type: 'received'
            },
            {
                time: "22:12",
                status: 'read',
                id: 3,
                text: 'Probando mensajes con Robert 🎤',
                type: 'sent'
            }
        ]
    },
    {
        id: 2,
        name: 'Jimmy Page',
        img: '/assets/profile-pictures/jimmy.jpg',
        messages: [
            {
                time: "22:10",
                status: 'read',
                id: 1,
                text: 'Hola Jimmy',
                type: 'sent'
            },
            {
                time: "22:11",
                status: 'sent',
                id: 2,
                text: 'Que tal?',
                type: 'received'
            },
            {
                time: "22:12",
                status: 'sent',
                id: 3,
                text: 'Probando mensajes con jimmy 🎸',
                type: 'sent'
            }
        ]
    },
    {
        id: 3,
        name: 'John Bonham',
        img: '/assets/profile-pictures/bonham.jpg',
        messages: [
            {
                time: "22:10",
                status: 'read',
                id: 1,
                text: 'Hola John',
                type: 'sent'
            },
            {
                time: "22:11",
                status: 'sent',
                id: 2,
                text: 'Que haces',
                type: 'received'
            },
            {
                time: "22:12",
                status: 'read',
                id: 3,
                text: 'Probando mensajes con john 🥁 ',
                type: 'sent'
            }
        ]
    },
    {
        id: 4,
        name: 'John Paul Jones',
        img: '/assets/profile-pictures/john-paul-jones.jpg',
        messages: [
            {
                time: "22:10",
                status: 'read',
                id: 1,
                text: 'Que onda crack',
                type: 'sent',

            },
            {
                time: "22:11",
                status: 'received',
                id: 2,
                text: 'Que tal?',
                type: 'received'
            },
            {
                time: "22:12",
                status: 'received',
                id: 3,
                text: 'Probando mensjaes con JPJ.',
                type: 'sent'
            }
        ]
    },

]



export default chats