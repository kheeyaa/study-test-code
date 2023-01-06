import { render } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  // 목함수 사용하여 테스트 수행
  // 시간에 따라 변할 수 있는건 목함수를 사용해 테스트를 진행하면 된다.
  Date.now = jest.fn(() => 12345);

  const view = render(<Timer />);
  expect(view).toMatchSnapshot();
});
