// npm test
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

/************************ 테스트 전후로 해야할 작업 *************************/
/*
- beforeEach : 각 테스트 전에 실행된다.
- afterEach : 각 테스트 직후에 실행된다.
*/
describe("beforeEach & afterEach", () => {
  let num = 10;

  beforeEach(() => {
    num = 0;
  });

  test("0+1 은 1이다.", () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
  });

  test("0+2 은 2이다.", () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
  });

  test("0+3 은 3이다.", () => {
    num = fn.add(num, 3);
    expect(num).toBe(3);
  });

  test("0+4 은 4이다.", () => {
    num = fn.add(num, 4);
    expect(num).toBe(4);
  });
});

/**
- beforeAll : 최초 테스트 이전에 한번 실행된다.
- afterAll : 마지막 테스트 후에 한번 실행된다.
 */
describe("beforeAll & afterAll", () => {
  let user;

  beforeAll(async () => {
    user = await fn.connectUserDb();
  });

  afterAll(() => {
    return fn.disconnectDb();
  });

  test("이름은 민지", () => {
    expect(user.name).toBe("민지");
  });

  test("나이는 20", () => {
    expect(user.age).toBe(20);
  });

  test("성별은 여성", () => {
    expect(user.gender).toBe("여");
  });
});
