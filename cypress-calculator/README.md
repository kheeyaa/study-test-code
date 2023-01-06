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

4. [`cypress/e2e/counter.cy.js`](./cypress/e2e/counter.cy.js) 테스트 코드 생성

이전엔 `__.spec.js` 형식이었지만 지금은 `__.cy.js` 로 바뀐것 같다.

<img width="240" alt="스크린샷 2023-01-06 오후 4 47 53" src="https://user-images.githubusercontent.com/76723666/210954943-72a52abe-dda7-404e-952e-3874ab553610.png">

5. `E2E Testing` 버튼 클릭 > 크롬으로 열기 > 메뉴 `Specs` 에서 테스트 코드들을 확인할 수 있다.

6. 실행하고 싶은 테스트 코드 선택 하면 테스트가 진행된다.

## 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.
