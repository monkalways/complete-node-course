const obj = {
  name: 'Andrew',
  birthday: new Date()
};

const stringObj = JSON.stringify(obj);
console.log(typeof obj.birthday);
console.log(stringObj);

const anotherObj = JSON.parse(stringObj);

console.log(typeof anotherObj.birthday);
console.log(anotherObj);