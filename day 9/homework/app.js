// 1
function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return "Found"
        }
    }

    return "Not Found"
}

console.log(linearSearch([10, 25, 7, 43, 18, 5, 31], 43))


// 2
function findIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }

    return -1
}

console.log(findIndex([4, 8, 15, 16, 23, 42], 23))


// 3
function countNumber(arr, num) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++
        }
    }

    return count
}

console.log(countNumber([12, 5, 8, 12, 20, 7, 12], 12))


// 4
function findMaxIndex(arr) {
    let max = arr[0]
    let maxIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            maxIndex = i
        }
    }

    return `Number: ${max}, Index: ${maxIndex}`
}

console.log(findMaxIndex([3, 17, 9, 25, 14, 6, 30]))


// 5
function findFirstGreater(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            return arr[i]
        }
    }

    return -1
}

console.log(findFirstGreater([21, 4, 15, 9, 32, 7, 18], 10))