import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "민지",
  age: 30,
};

const user2 = {
  age: 20,
};

/*
- __snapshots__ 폴더에 "Hello.test.js.snap" 파일이 생성됨
해당 파일에 저장된 스냅샷과 조금이라도 다르면 테스트 통과 못한다.
만약 user의 name을 민지 -> 해린으로 변경하면 오류 발생한다.

- 만약 오류 발생시 콘솔창에서 'w' 키 입력 > 'u' 를 입력 > 새로운 스냅삿 생성
이는 신중하게 해야한다. 버그를 놓칠 수 있기 때문이다.
*/

test("snapshot : name 있음", () => {
  const view = render(<Hello user={user} />);
  expect(view).toMatchSnapshot();
});

test("snapshot : name 없음", () => {
  const view = render(<Hello />);
  expect(view).toMatchSnapshot();
});

test("hello 라는 글자가 포함되는가?", () => {
  render(<Hello user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
