// npm test fn3.test.js
const fn = require("./fn");

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

/*
- only : 해당 테스트 케이스만 실행된다.
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

  // 나머지는 스킵되고 아래 테스트 케이스만 실행된다.
  // test.only("성별은 여성", () => {
  //   expect(user.gender).toBe("남");
  // });
});

/*
- skip : 해당 테스트만 스킵하고 실행된다.
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

  // 나머지는 실행되고 아래 테스트 케이스만 스킵된다.
  test.skip("성별은 여성", () => {
    expect(user.gender).toBe("남");
  });
});
