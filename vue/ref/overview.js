/*  ref约等于下面代码,可以检测ref何时被访问或修改 */
const myRef = {
    _value: 0,
    get value() {
      track()//用于追踪依赖，记录使用地点
      return this._value
    },
    set value(newValue) {
      this._value = newValue
      trigger()//触发依赖的更新
    }
  }
  /* 深层响应 */
  import { ref } from 'vue'

  const obj = ref ({
    nested: {count: 0},
    arr:['foo','bar']
  })

  function mutateDeeply(){
    obj.value.nested.count++
    obj.value.arr.push('baz')
  }