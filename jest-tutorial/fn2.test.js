// npm test fn2.test.js
const fn = require("./fn");

/************************ 비동기 코드 테스트 *************************/
/*
- done 함수
done이 호출되기 전까지는 테스트를 끝내지 않는다.
*/

describe("done", () => {
  test("n초 후에 받아온 이름은 민지다.", (done) => {
    const callback = (name) => {
      try {
        expect(name).toBe("민지");
        done();
      } catch (err) {
        done(err);
      }
    };
    fn.getName(callback);
  });
});

/*
  프로미스의 값을 확인하고 싶은 경우엔 프로미스를 반환해주어야 한다.
  */
describe("프로미스", () => {
  test("n초 후에 받아온 나이는 30이다.", () => {
    return fn.getAge().then((age) => {
      expect(age).toBe(30);
    });
  });
});

/*
  - resolves : resolve 된 프로미스의 결과값을 확인한다.
  - rejects : reject 된 프로미스 에러값을 확인한다.
  */
describe("resolves & rejects", () => {
  test("n초 후에 받아온 나이는 30이다.", () => {
    return expect(fn.getAge()).resolves.toBe(30);
  });

  test("n초 후에 에러를 받는다.", () => {
    return expect(fn.getError()).rejects.toMatch("error");
  });
});

/*
  - async / await
  */
describe("async / await", () => {
  test("n초 후에 받아온 나이는 30이다.", async () => {
    const age = await fn.getAge();
    expect(age).toBe(30);
  });

  test("n초 후에 받아온 나이는 30이다.", async () => {
    await expect(fn.getAge()).resolves.toBe(30);
  });
});
