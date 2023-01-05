const fn = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({
    name,
    age,
    // gender: undefined
  }),
  throwErr: () => {
    throw new Error("예외 발생");
  },

  // 비동기
  getName: (callback) => {
    const name = "민지";
    setTimeout(() => {
      callback(name);
      //   throw new Error("오류 발생");
    }, 0);
  },
  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 0);
    });
  },
  getError: () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("error");
      }, 0);
    });
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "민지",
          age: 20,
          gender: "여",
        });
      }, 0);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 0);
    });
  },
};

module.exports = fn;
