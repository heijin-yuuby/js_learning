const count = ref(1)
const obj = reactive({ count })

// ref 会被解包
console.log(obj.count === count.value) // true

// 会更新 `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 也会更新 `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3

// 访问某个响应式数组或map中的ref元素，不会解包
const books = reactive([ref('Vue 3 Guide')])

console.log(map.get('count',value))

const map = reactive(new Map([['count',ref(0)]]))

console.log(map.get('count'.value))
