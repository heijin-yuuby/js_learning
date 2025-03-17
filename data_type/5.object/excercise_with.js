var settings = {
  width: 800,
  height: 600,
  theme: "dark",
};
// 在此处添加with语句，将width属性值改为原来的1.5倍，
with (settings) {
  width = width * 1.5;
  height = height + 100;
  theme = "light";
}
console.log(settings);
// 把height属性值增加100，并将theme属性值改为'light'

// 然后输出修改后的settings对象
