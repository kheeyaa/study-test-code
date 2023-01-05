// npm test fn1.test.js
const fn = require("./fn");

/************************ Matcher *************************/
/*
- toBe
값이 일치하는지 확인한다.
*/

describe("toBe", () => {
  test("1은 1이다.", () => {
    expect(1).toBe(1);
  });

  test("2 + 3 = 5.", () => {
    expect(fn.add(2, 3)).toBe(5);
  });

  test("3 + 3 = 5가 아니다.", () => {
    expect(fn.add(3, 3)).not.toBe(5);
  });
});

/*
- toEqual
객체는 재귀적으로 돌면서 값을 확인해아 하기 때문에 toEqual을 써야한다.
*/
describe("toEqual", () => {
  test("이름과 나이를 받아서 객체를 반환해줘 (toEqual을)", () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
      name: "Mike",
      age: 30,
    });
  });
});

/*
- toStrictEqual
보다 엄격하게 확인하고자 한다면 toStrictEqual를 사용하자.
프로퍼티가 undefined인 경우에도 확인해서 오류를 잡아준다.
*/
describe("toStrictEqual", () => {
  test("이름과 나이를 받아서 객체를 반환해줘 (toStrictEqual)", () => {
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
      name: "Mike",
      age: 30,
    });
  });
});

/*
- toBeNull
- toBeUndefined
- toBeDefined
*/
describe("toBeNull", () => {
  test("null은 null입니다.", () => {
    expect(null).toBeNull();
  });
});

/*
- toBeFalsy
- toBeTruthy
*/
describe("toBeFalsy & toBeTruthy", () => {
  test("0은 false 입니다.", () => {
    expect(null).toBeFalsy();
  });

  test("비어있지 않은 문자열은 true입니다. ", () => {
    expect(fn.add("hello", "world")).toBeTruthy();
  });
});

/*
- 
- toBeGreaterThan 크다
- toBeGreaterThanOrEqual 크거나 같다
- toBeLessThan 작다
- toBeLessThanOrEqual 작거나 같다
*/
describe("toBeLessThanOrEqual", () => {
  test("ID는 10자 이하여야 합니다.", () => {
    const id = "뉴진스";
    expect(id.length).toBeLessThanOrEqual(10);
  });

  test("비밀번호 4자리", () => {
    const pw = "1234";
    expect(pw.length).toBe(4);
  });
});

/*
- toBeCloseTo
소수점 연산 후 값을 비교하는 경우에 사용한다.
*/
describe("toBeCloseTo", () => {
  test("0.1 + 0.2 = 0.3 ", () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

/*
- toMatch
정규표현식으로 문자열을 검사한다.
*/
describe("toMatch", () => {
  test("Hello World에 h문자가 들어있나?", () => {
    expect("Hello World").toMatch(/h/i);
  });
});

/*
- toContain
배열에 특정 요소가 있는지 확인한다.
*/
describe("toContain", () => {
  test("유저 리스트에 민지가 있나?", () => {
    const user = "민지";
    const userList = ["하니", "혜인", "해린", "민지"];

    expect(userList).toContain(user);
  });
});

/*
- toThrow
에러가 발생했는지 확인한다.
*/
describe("toThrow", () => {
  test("에러가 발생했나요?", () => {
    expect(() => fn.throwErr()).toThrow("예외 발생");
  });
});
