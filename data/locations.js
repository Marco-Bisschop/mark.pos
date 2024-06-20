const locations = [

    {
        id: 1,
        name: 'Location 1',
        image:'./src/img/location-1.jpg',
        description: 'This id the description for location 1',
        displayPositions: [
            {
                id: 1,
                name: "Position 1",
                description: "This is display position 1 in location 1"
            },
            {
                id: 2,
                name: "Position 2",
                description: "This is display position 2 in location 1"
            },
        ]
    },
    {
        id: 2,
        name: 'Location 2',
        image:'./src/img/location-1.jpg',
        description: 'This id the description for location 2',
        displayPositions: [
            {
                id: 1,
                name: "Position 1",
                description: "This is display position 1 in location 2"
            },
            {
                id: 2,
                name: "Position 2",
                description: "This is display position 2 in location 2"
            },
        ]
    },
    {
        id: 5,
        name: 'Location 5',
        image:'./src/img/location-5.jpg',
        description: 'This id the description for location 5',
        displayPositions: []
    }
]

module.exports = {locations}