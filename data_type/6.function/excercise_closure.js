function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}
let addOne = increment
console.log(addOne)