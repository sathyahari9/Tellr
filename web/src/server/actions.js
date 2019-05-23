
function genCode() {
  let ret = "";
  for (let i = 0; i < 5; i++) {
    let rand = Math.floor(Math.random() * 36) + 65;
    if (rand > 90) {
      rand -= 91;
    } else {
      rand = fromCharCode(rand);
    }
    ret = ret + rand;
  }
  return ret;
}

module.exports = {
  genCode: genCode
}