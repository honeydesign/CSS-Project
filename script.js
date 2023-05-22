// an algorithm to store an array and remove the first item

// function removeFirstItem (arr , item) {}

const removeFirstItem = (arr, item) => {


    arr.push(item)

    console.log(JSON.stringify(arr.shift()))




}

removeFirstItem([], [2, 3, 4])