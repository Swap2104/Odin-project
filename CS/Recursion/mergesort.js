

let arr3 = []
let arr4 = []
let arr5 = []
let arr6 = []
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr3
    }
    let arr1 = arr.slice(0, Math.ceil(arr.length / 2))
    let arr2 = arr.slice(Math.ceil(arr.length / 2))
    // console.log(`array1: ${arr1}`)
    // console.log(`array2: ${arr2}`)

    if (arr1.length == 1) {
        if (arr1[0] < arr2[0]) {
            if (arr3.length == 0) {
                arr3.push(arr1[0])
                // console.log(`array3: ${arr3}`)
                arr1 = []
            } else {
                arr4.push(arr1[0])
                // console.log(`array4: ${arr4}`)
                arr1 = []
            }
        } else {
            if (arr3.length == 0) {
                arr3.push(arr2[0])
                // console.log(`array3: ${arr3}`)
                arr2 = []
            } else {
                arr4.push(arr2[0])
                // console.log(`array4: ${arr4}`)
                arr2 = []

                if (arr1.length == 1 && arr2.length == 0) {
                    arr4.push(arr1[0])
                    // console.log(`array4: ${arr4}`)
                    arr1 = []
                }
                if (arr1.length == 0 && arr2.length == 1) {
                    arr4.push(arr2[0])
                    // console.log(`array4: ${arr4}`)
                    arr1 = []
                }
            }

        }

    }
    if (arr1.length == 1 && arr2.length == 0) {
        arr3.push(arr1[0])
        // console.log(`array3: ${arr3}`)
    }
    if (arr1.length == 0 && arr2.length == 1) {
        arr3.push(arr2[0])
        // console.log(`array3: ${arr3}`)
    }

    if (arr3.length >= 2 && arr4.length >= 2) {
        arr5= arr3.concat(arr4);
        arr5.sort(function(a, b){return a-b})
        arr3=[]
        arr4=[]
        // arr6.push(arr5)
        arr6=arr6.concat(arr5)
        arr6.sort(function(a, b){return a-b})
        // console.log(`array5: ${arr5}`)
    }

    mergeSort(arr1)
    mergeSort(arr2)
    return arr6
}
console.log(`Sorted ${mergeSort([1, 7, 4, 2, 6, 5, 3, 0])}`)


