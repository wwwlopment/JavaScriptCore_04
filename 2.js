function closer(num) {
    return Math.abs(num - 10);
}

var m = prompt('Введіть перше число');
var n = prompt('Введіть друге число');
alert(closer(m) < closer(n) ? m : n);
