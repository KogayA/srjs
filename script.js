let arr = [];
do {
  let x = prompt("Введите команду: add/del/stop");
  if (!x) {
    break;
  }
  let y = x.split(", ");
  if (y[0] == "add") {
    arr.push(y[1]);
  }
  if (y[0] == "del") {
    const i = arr.findIndex((el) => el == y[1]);
    if (i + 1) {
      arr.splice(i, 1);
    }
  }
  alert(arr);
  console.log(arr);
} while (y[0] !== "stop");
