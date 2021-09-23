async function printWithDelay(arr, delay){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
        await pause(delay)
    }
}

function pause(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

printWithDelay([1, 2, 3], 5000)