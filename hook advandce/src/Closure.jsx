const CreateCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

let counter = CreateCounter();
// counter truy cập vào 1 phạm vi duy nhất (lexical scope) được tạo ra bởi
// CreateCounter, khi gọi counter() ở hàm 11,12,13 thì hàm truy cập vào biến
// count duy nhất được lưu trong môi trường thực thi hiện tại.
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

// counter và môi trường của nó (bao gồm biến count) được gọi là 1 closure
// tất cả được đóng gói và đưa vào V8 Engine machine

export default CreateCounter;
