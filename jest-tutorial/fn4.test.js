// npm test fn4.test.js
/************************ Mock Functions *************************/

/*
- jest.fn : 목 함수를 만들 수 있다.
- mockFn.mock.calls: 함수가 몇번 호출되었는지, 호출될 때 전달된 인수가 무엇인지 알 수 있다.
*/
describe("mockFn.mock.calls", () => {
  const mockFn = jest.fn();

  mockFn();
  mockFn(1);

  test("함수는 2번 호출된다.", () => {
    expect(mockFn.mock.calls.length).toBe(2);
  });

  test("2번째로 호출된 함수에 전달된 첫번째 인수는 1이다.", () => {
    expect(mockFn.mock.calls[1][0]).toBe(1);
  });
});

describe("목 함수 예제", () => {
  const mockFn = jest.fn();

  const forEachAdd1 = (arr) => {
    arr.forEach((num) => {
      mockFn(num + 1);
    });
  };
  forEachAdd1([10, 20, 30]);

  test("함수 호출은 3번이다.", () => {
    expect(mockFn.mock.calls.length).toBe(3);
  });
  test("전달된 값은 11, 21, 31 이다.", () => {
    expect(mockFn.mock.calls[0][0]).toBe(11);
    expect(mockFn.mock.calls[1][0]).toBe(21);
    expect(mockFn.mock.calls[2][0]).toBe(31);
  });
});

/*
- mockFn.mock.results
목 함수에게 넘겨준 콜백함수의 반환값을 확인할 수 있다.
*/
describe("mockFn.mock.results", () => {
  const mockFn = jest.fn((num) => num + 1);

  mockFn(10);
  mockFn(20);
  mockFn(30);

  test("함수 호출은 3번이다.", () => {
    // [
    //   { type: 'return', value: 11 },
    //   { type: 'return', value: 21 },
    //   { type: 'return', value: 31 }
    // ]
    console.log(mockFn.mock.results);
  });

  test("10에서 1 증가한 값이 반환된다.", () => {
    expect(mockFn.mock.results[0].value).toBe(11);
  });
  test("20에서 1 증가한 값이 반환된다.", () => {
    expect(mockFn.mock.results[1].value).toBe(21);
  });
  test("30에서 1 증가한 값이 반환된다.", () => {
    expect(mockFn.mock.results[2].value).toBe(31);
  });
});

/*
- mockReturnValueOnce
목 함수를 호출했을 때 반환값을 미리 지정해둘 수 있다.
*/
describe("mockReturnValueOnce", () => {
  const mockFn = jest.fn();

  mockFn
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(20)
    .mockReturnValueOnce(30)
    .mockReturnValueOnce(40);

  mockFn();
  mockFn();
  mockFn();
  mockFn();

  test("함수 호출은 4번이다.", () => {
    //   [
    //     { type: 'return', value: 10 },
    //     { type: 'return', value: 20 },
    //     { type: 'return', value: 30 },
    //     { type: 'return', value: 40 }
    //   ]
    console.log(mockFn.mock.results);
  });
});

describe("mockReturnValueOnce 예제1", () => {
  const mockFn = jest.fn();

  mockFn
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);

  const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

  test("홀수는 1, 3, 5", () => {
    expect(result).toStrictEqual([1, 3, 5]);
  });
});

/*
- mockResolvedValue
비동기 함수에 대한 목 함수를 만들 수 있다.
*/
describe("mockResolvedValue", () => {
  const mockFn = jest.fn();

  mockFn.mockResolvedValue({ name: "민지" });

  test("이름은 민지.", () => {
    mockFn().then((res) => {
      expect(res.name).toBe("민지");
    });
  });
});

describe("목킹 모듈 만들기", () => {
  // fn을 목킹 모듈로 만든다.
  const fn = require("./fn");
  jest.mock("./fn");

  // 실제 fn 함수가 호출되지 않는다.
  fn.createUser.mockReturnValue({ name: "민지" });

  test("유저를 만든다.", () => {
    // 그럼 실제 유저가 생성되지는 않는다.
    const user = fn.createUser("민지");
    expect(user.name).toBe("민지");
  });
});

/*
- toBeCalled
- toBeCalledTimes
- toBeCalledWith
- lastCalledWith
*/
describe("toBeCalled, toBeCalledTimes, toBeCalledWith, lastCalledWith", () => {
  const mockFn = jest.fn();

  mockFn(10, 20);
  mockFn();
  mockFn(30, 40);

  test("한번 이상 호출?", () => {
    expect(mockFn).toBeCalled();
  });
  test("정확히 3번 호출?", () => {
    expect(mockFn).toBeCalledTimes(3);
  });
  test("10, 20을 전달받은 함수가 있는가?", () => {
    expect(mockFn).toBeCalledWith(10, 20);
  });
  test("마지막 함수는 30, 40을 받았는가?", () => {
    expect(mockFn).lastCalledWith(30, 40);
  });
});
