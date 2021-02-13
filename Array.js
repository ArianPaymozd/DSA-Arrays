const Memory = require('./memory')

let memory = new Memory()

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this.ptr = memory.allocate(this.length)
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr == null) {
            throw new Error('memory error')
        }
        memory.copy(this.ptr, oldPtr, size)
        memory.free(oldPtr)
        this._capacity = size
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize(this.length + 1) * Array.SIZE_RATIO
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }

    insert(value, index) {
        if (this.length >= this._capacity) {
            this._resize(this.length + 1) * Array.SIZE_RATIO
        }
        if (index < 0 || index >= this.length) {
            throw new Error('index error')
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('index error')
        }
        const value = memory.get(this.ptr + index)
        return value
    }

    pop() {
        if (this.length === 0) {
            throw new Error('index error')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('index error')
        }
        memory.copy(this.ptr + index - 1, this.ptr + index, this.length + index - 1)
        length--
    }
}

Array.SIZE_RATIO = 3

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push("tauhida");

    console.log(arr.get(0));
}

// main()

function URLify(string) {
    const characters = string.split('')
    characters.forEach(character => {
        const index = characters.indexOf(character)
        if (character === ' ') {
            characters.splice(index, 1, '%20')
        }
    });
    const newString = characters.join("")
    console.log(newString)
}

// URLify("tauhida parveen")

function filter(arr) {
    const length = arr.length
    for (let i = 0; i < length; i++) {
        console.log(i, arr[i])
        if (arr[i] < 5) {
            arr.splice(i, 1)
        }
        
    }
    console.log(arr)
}

// filter([3, 3, 3, 3])

function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

// sum([4, 6, -3, 5, -2, 1])

function merge(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i])
            
    }

    for (let j = 0; j < arr2.length; j++) {
        result.push(arr2[j])
    }

    let sortedResult = result.sort(function(a, b) {
        return a - b;
    })

    console.log(sortedResult)
}

// merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])

function removeChar(string, chars) {
    let stringArr = ''
    
    for (let i = 0; i < string.length; i++) {
        let checks = 0
        let requiredChecks = chars.length

        for (let j = 0; j < chars.length; j++) {
            
            if (chars[j].toLowerCase() !== string[i].toLowerCase()) {
                checks++
                if (checks === requiredChecks)
                stringArr += string[i]
            }
        }
    }
    console.log(stringArr)
}

// removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiouyb')

function products(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let factors = []
        let product = 0

        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                factors.push(arr[j])
            }
        }
        for(let x = 0; x < factors.length; x++) {
            if (product === 0) {
                product = factors[x]
            } else {
                product = product * factors[x]
            }
        }
        result.push(product)
    }
    console.log(result)
}

// products([1, 3, 9, 4])

function twoD(arr) {
    let indexes = []
    let subIndexes = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0 && !indexes.includes(i) && !subIndexes.includes(j)) {
                indexes.push(i)
                subIndexes.push(j)
            }
        }
    }

    console.log(indexes, subIndexes)
}

// twoD([[1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]])