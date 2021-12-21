export function getProductOfFinalPositions(arr) {
    let horizontal = 0;
    let depth = 0;
     arr.map(function(el, i) {
         switch (el) {
         case "forward":
             horizontal += Number(arr[i + 1])
             break;
         case "up":
             depth -= Number(arr[i + 1])
             break;
         case "down":
             depth += Number(arr[i + 1])
             break;
         default:
             break;
         }
     })
     return horizontal * depth
 }

export function getProductOfFinalPositions2(arr) {
    let aim = 0;
    let horizontal = 0;
    let depth = 0;
    arr.map(function(el, i) {
        let num = Number(arr[i + 1])
        switch (el) {
        case "down":
            aim += num
            break;
        case "up":
            aim -= num
            break;
        case "forward":
            horizontal += num
            depth += aim * num
            break;
        default:
            break;
        }
    })    
    return horizontal * depth
}