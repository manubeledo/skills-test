// // Punto 1

inputA = [2, 4, 6, 8, 10]; // Testing

const calculateSquare = (input) => {
    let output = []
    input.map(element => {
        output.push(element*element)
    });
    return output
}

console.log(calculateSquare(inputA))

// // Punto 2 

inputB = [{count: 1}, {count: 2}, {count: 3}] // Testing

const sumCounters = (input) => {
    let output = 0
    input.map(element => {
        output += element.count 
    })
    return output
}

console.log(sumCounters(inputB))

// // Punto 3

movies = {
    'big': {
    actors: ['Elizabeth Perkins', 'Robert Loggia', 'Tom Cruise'],
    },
    'forrest gump': {
    actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    },
    'cast away': {
    actors: ['Helen Hunt', 'Paul Sanchez', 'Tom Cruise'],
    },
    }

const actorInMovies = (movies, actor) => {
    let output = {}
    for (const key in movies) {
       if (movies[key].actors.includes(actor)) {
            output[key] = movies[key]
       } else { 
            output[key] = {}
            output[key].actors = movies[key].actors.concat(actor)
       }
    }
    return output
}

console.log(actorInMovies(movies, "Tom Cruise")); // Testing

// // Punto 4 

const listActors = (input) => {

let list = document.querySelector('body')

allActors = []

for (const key in movies) {
    movies[key].actors.forEach(element => {
        allActors.push(element)
    });
}

listActorsOrdered = new Set(allActors.sort())

listActorsOrdered.forEach(actorName => {
    list.innerHTML += `<h1>${actorName}</h1>`
});

}

listActors(movies) // Testing

// // Punto 5 

const getPosts = async () => {
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    let existLetterE = false
    data.map((element) => {
        if(element.userId == 7 && element.title[0] == 'e' ) { console.log(element.id); existLetterE = true}
    })
    existLetterE ? '' : console.log('undefined')
    } catch(err) {
        console.error('This is the error', err)
    }
}

getPosts() 