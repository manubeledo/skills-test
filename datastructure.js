const squares = (input) => {
    let output = []
    input.map(element => {
        output.push(element*element)
    });
    return output
}

const sum = (input) => {
    let output = 0
    input.map(element => {
        output += element.count 
    })
    return output
}

const moviesWithActor = (movies, actor) => {
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

const treesAreEqual = (a, b) => {
    if (a == null && b == null) {
        return true
    }
    if ((a == null && b != null) || (a != null && b == null)) {
        return false
    }
    if(a.value != b.value){
        return false
    }
    return treesAreEqual(a.left, b.left) && treesAreEqual(a.right, b.right)
}

// str = "3h5n-8v-7-m"

const formatted = (str, n) => {
    let strArr = []

    strArr = str.split("-").join("")

    let quantityOfCharacters = strArr.length
    
    let quotient  = Math.floor(quantityOfCharacters/n);
    let reminder = quantityOfCharacters%n;
    
    let output = []
    
    if (reminder == 0) {
        for (let i = 0 ; i < quotient ; i++){
        output.push(strArr.slice((n*i),(n*i)+n))
        }
    } else {
        output.push(strArr.slice(0, reminder))
        for (let i = 0 ; i < quotient ; i++){
           output.push(strArr.slice((n*i)+reminder,(n*i)+n+reminder))
        }
    }
    return output.join("-")
}

export { squares, sum, moviesWithActor, treesAreEqual, formatted }