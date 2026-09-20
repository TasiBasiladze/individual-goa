function linearSearch(array, target){
    for(let i of array){
        if (i === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1, 2, 3], 3))
console.log(linearSearch([1, 2, 3], 4))

function binarySearch(array, target){
    let left = 0
    let right = array.length - 1
    while (right > left){
        let mid = Math.floor((left + right) / 2)
        if(array[mid] === target){
            return array[mid]
        }
        if(array[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return -1
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 8))
console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 600))