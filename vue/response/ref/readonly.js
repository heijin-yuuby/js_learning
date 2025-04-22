const original = reactive({ count: 0 })

const copy = readonly(original) //创建了original对象的只读代理，意味着copy所有属性不能被直接修改

watchEffect(() => {
  // 用来做响应性追踪
  console.log(copy.count)//只要copy.count依赖的响应式数据发生变化，这里就会重新打印count的值
})

// 更改源属性会触发其依赖的侦听器
original.count++ //触发watchEffect,在控制台输出更新后的值

// 更改该只读副本将会失败，并会得到一个警告
copy.count++ // warning!