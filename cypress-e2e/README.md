## Cypress 설정

1. [Cypress 공식문서 접속](https://docs.cypress.io/) > Getting Started > Installing Cypress

```
npm install cypress --save-dev
```

2. Cypress 실행

```
npx cypress open
```

3. 라이브 서버로 index.html 열기

4. `cypress/e2e/counter.cy.js` 테스트 코드 생성

이전엔 `__.spec.js` 형식이었지만 지금은 `__.cy.js` 로 바뀐것 같다.

<img width="240" alt="스크린샷 2023-01-06 오후 4 47 53" src="https://user-images.githubusercontent.com/76723666/210954943-72a52abe-dda7-404e-952e-3874ab553610.png">

5. `E2E Testing` 버튼 클릭 > 크롬으로 열기 > 메뉴 `Specs` 에서 테스트 코드들을 확인할 수 있다.

6. 실행하고 싶은 테스트 코드 선택 하면 테스트가 진행된다.

## 요구사항

counter라는 간단한 미션을 통해서 Cypress라는 E2E 도구에 익숙해져보세요. 아래의 간단한 기능을 구현하면 쉽게 Cypress도구를 사용해보실 수 있습니다.

- [ ] counter의 초기값은 0이다.
- [ ] - 버튼을 클릭 시 count가 1증가한다.
- [ ] - 버튼을 클릭 시 count가 1감소한다.
- [ ] - 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
- [ ] - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)
- [ ] reset 버튼을 클릭 시 counter가 0으로 초기화된다.
