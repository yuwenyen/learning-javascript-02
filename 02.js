const a = ["庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"];
const b= ["申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未"];
var year = 2019;
console.log(a[year%10], b[year%12]);