## 이 코드는 어떤 동작을 할 수 있을까?

기능 명세서 대로 잘 동작하는지 어떻게 알 수 있을까?

수동으로 확인하려면 3~4분이 걸릴것이다. 테스트코드가 있다면 10초도 걸리지 않는다. 기능 명세서가 많아질 수록 수동으로 확인하는데 걸리는 시간이 기하급수적으로 오래 걸린다.

테스트 코드는 인간의 실수를 잡아준다. 코드에 대한 두려움이 자신감으로 바뀌게 된다. 내가 구현한 기능들이 어떤 동작이 되고 안되는지 한눈에 확인할 수 있다.

## 테스트를 작성해야 하는 이유

### 테스트란?

애플리케이션이 요구사항에 맞게 검증하는 행위이다.

### 테스트의 예

- DB에 데이터를 입력하는 API를 개발 > API 호출 > DB값 검증
- 디자인 시안에 맞게 HTML/CSS 작성 > 브라우저에서 실제 렌더링된 결과를 확인
- 새로운 기능을 추가하기 위해 기존 모듈을 리팩토링 > 영향 받는 다른 모듈의 실행 결과를 확인
- 버그를 수정하기 위해 기존 함수를 수정 > 버그가 수정되었는지 확인하고, 영향을 받는 다른 모듈의 실행 결과를 확인
- 개발 환경에서 테스트된 애플리케이션을 리얼 환경에 배포 > 배포 과정에서 발생한 문제가 없는지 확인

### 개발과 테스트

> 개발자는 사실 코드를 작성하는 것 보다 더 많은 시간을 테스트하는데 사용한다.

## 왜 테스트를 작성하는가?

### 테스트의 자동화

#### 장점

- 사람이 수행해야 하는 반복된 테스트를 자동화 할 수 있다.
- 사람이 수행하는 것보다 훨씬 빠르게 테스트할 수 있다.
- 사람이 수행하는 것보다 더 신뢰할 수 있다.

#### 단점

- 감각적인 요소(시각, 청각)등 사용자 경험과 관련된 문제를 찾아낼 수 없다.
- 실제 환경에서 벌어지는 다양한 상황을 자동화하기 어렵다. (네트워크/ 디바이스 등)

### 테스트 자동화는 누가 하는가?

- QA
- 개발자
- 둘 다

## 개발자가 테스트를 작성해야 하는 이유

### 제품 품질

- 개발자는 작성한 프로그램의 퀄리티에 대한 책임이 있다.
- QA에 넘기기 전에 기본 요구사항을 모두 만족하는지에 대한 검증은 개발자가 해야한다.
- 자동화된 테스트를 작성해 두지 않으면, 어플리캐이선이 복잡해질 수록 테스트 비용이 증가한다.
- 개발 기간이나 인력이 한정되어 있기 때문에, 테스트를 소홀하게 되는 경우가 많다.
- 테스트 코드를 작성하지 않으면 QA와 커뮤니케이션 비용이 늘어나 업무 효율이 떨어지게 된다.

### 코드 품질

- 코드 품질을 위해서 계속 리팩토링등의 개선 작업이 필요하다.
- 이 과정에서 기존에 잘 동작하던 프로그램을 망칠 수 있기 때문에 적극적으로 코드를 개선하지 않게 된다.
- 신뢰할 수 있는 자동화된 테스트가 있으면 적극적으로 코드를 개선할 수 있다.

## 테스트의 종류

### 범위에 따라

1. Unit 테스트
2. Integration(통합) 테스트
3. E2E(End to End) 테스트

### Unit 테스트

![](https://martinfowler.com/bliki/images/unitTest/sketch.png)

- 모듈(함수/ 클래스) 단위의 테스트
- 작성 비용이 적게 들고 실행 속도가 빠르다.
- 실패했을 때 문제가 생긴 부분을 비교적 정확하게 파악할 수 있다.

### Integration(통합) 테스트

- 주로 단위 테스트보다 큰 범위의 테스트를 의미한다.
- 개별 모듈(함수/ 클래스)들이 연결되어 제대로 상호작용하는지를 테스트한다.
- 단위 테스트에 비해 실패시 문제가 생긴 부분을 정확하게 파악하기 어렵다.

### E2E(End to End) 테스트

- 실제 사용자가 사용하는 것과 같은 조건에서 전체 시스템을 테스트한다.
- unit/ integration 테스트에 비해 작성이 어렵고 실행 속도가 비교적 느리다.
- API 서버, DB 등 외부 서비스를 모두 사용하여 통합된 시스템을 테스트한다.

<video class="media-element tErWI93xEKrI2OkozPs7J " height="250" loop="" style="margin:0 auto;max-height:700px" width="444" muted=""><source src="https://preview.redd.it/9zf0asd0c3n51.gif?format=mp4&amp;s=fcf827ea34f45b00559816b541efd7980bc31137"></video>

## 좋은 테스트란

1. 실행 속도가 빨라야 한다.

빠른 피드백은 개발 속도를 향상시켜준다. 너무 느리면 테스트를 자주 실행하지 않게 된다.

2. 내부 구현 변경 시 실패하지 않아야한다.

리팩토링할 때 테스트가 깨진다면? 오히려 코드 개선을 방해한다.
자주 변하는 로직과 변하지 않는 로직을 구분해야 한다.

3. 버그를 검출할 수 있어야한다.

소스 코드에 버그가 있어도 검출하지 못한다면 잘못된 테스트이다.
테스트가 기대하는 결과를 구체적으로 명시하지 않으면 버그를 검출할 수 없다.

4. 테스트의 결과가 안정적이어야 한다.

특정 환경에서만 실패하거나, 실행할때마다 결과가 달라지는 테스트는 신뢰할 수 없다.
외부 환경의 영향을 최소화 해서 동일한 결과를 최대한 보장할 수 있는게 중요하다.

5. 의도가 명확히 드러나야 한다.

가독성이 좋아야 한다. 테스트 코드를 보고 한 눈에 어떤 내용을 테스트하는지 파악할 수 있어야한다.

## 테스팅 ROI(투자 수익률)

테스트 코드 작성과 유지보스는 비용이다.

비용 대비 효과가 충분해야한다.

커버리지 100%를 목표로 하는것은 비효율적이다.

복잡한 어플리케이션의 경우 적절한 선을 잘 찾아서 테스트 정도를 조절하는 것이 중요하다.
