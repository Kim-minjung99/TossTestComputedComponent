Toss FE 과제
============
![image](https://github.com/Kim-minjung99/TossTestComputedComponent/assets/73487648/6eafa417-ef76-42e6-8025-3a31ea5d3ab9)

토스 프론트엔드 사전과제 프로젝트입니다.
---


## 개발환경
- node.js v20.11.1



## 설치 및 실행

### 의존성 패키지 설치
```tsx
npm install
```


### 개발 환경 실행
```tsx
npm start
```
기본 http://localhost:3000/ 로 접속


### 프로덕션 환경 실행
```tsx
### 빌드
npm build
```

---

## 구성 및 선정 이유
- React v18.2.0 : React v18.2.0의 개선된 최적화 기능 사용을 효율성있게
  사용하기 위하여 선정했습니다.
- ESLint : 통일된 코드 스타일, 일정한 규칙에 맞는 코드 퀄리티를 유지할 수 있도록 하기 위하여 선정했습니다.
- Code Spell Checker : 코드 작성 시, human error을 사전에 방지하고 가독성 있는 코드를 위하여 선정했습니다.
- comment anchors : 파일단위, 혹은 워크스페이스 단위로 주석을 하이라이팅하여 전반적인 주석의 현황을 쉽게 파악하기 위하여 선정했습니다.

### 디렉터리 구조
```tsx
cmd tree로 구조 보기

```
## 기능 
- 클라이언트, 프론트 쪽이라면 스크린샷이나 gif 파일로 기능을 어필하는게 좋습니다.

## 구현내용 
- 해당 기능에 대하여 설명 하기, 기능에 대해 왜 그런 기술을 사용하였는지 설명하기
- ex.
```tsx
필터 기능, 검색 기능, 무한 스크롤 기능을 각각 useFilter, useSearch, useInfiniteScroll으로 커스텀 훅을 작성하여 모듈화하고 재사용성을 높였습니다.
useFilter: 커스텀 훅은 필터 기능을 구현하기 위해 사용됩니다. 필터 상태와 필터 액션 함수를 반환하여 필터 기능을 구현할 수 있습니다. 필터 상태는 활성화된 필터 정보와 해당 필터에 따른 콜백 함수를 포함하고 있습니다.
useSearch: 커스텀 훅은 검색 기능을 구현하기 위해 사용됩니다. 검색 상태와 검색 액션 함수를 반환하여 검색 기능을 구현할 수 있습니다. 검색 완료된 키워드 정보와 해당 키워드에 따른 콜백 함수를 포함하고 있습니다.
useInfiniteScroll: 커스텀 훅은 무한 스크롤 기능을 구현하기 위해 사용됩니다. 콜백 함수를 전달하여 페이지 스크롤이 맨 아래에 도달할 때마다 해당 콜백 함수가 호출됩니다. 스크롤 이벤트의 불필요한 연속 호출을 제어하기 위해 debounce 함수를 사용하여 호출을 지연시킵니다.
화면 컴포넌트는 AppBar, AppFilterBar, AppFilterArea, AppSearchArea, ProductList 으로 구성되어 있으며, 각 컴포넌트는 필요에 따라 세분화하여 구현되었습니다.

### 진짜 중요한거
렌더링 최적화, 응집도, 추상화, 시각화 등을 많이 신경썼다는 것을 어필하기 위해 기능상에서
~~~ 이런걸 썼는데 이는 최적화/응집도/추상화/시각화를 살리기 위함이었다 언급!!!!

```

## 트러블 슈팅
- 과제하면서 부딪혔던 문제와 이를 어떻게 해결했는지에 대한 내용을 담습니다.
- 왜 그렇게 해결했는지에 대한 나름의 타당한 이유도 넣는 것이 좋습니다.

## 사전과제를 하며 배운 점 및 느낀점
- 이부분은 나중에 없애긴 했지만 또 다른 어필 포인트라고 생각하여 넣었습니다. 실제로 저는 사전과제 하면서 많이 배웠고, 제가 제출할 정도로 구현한 것이 너무 뿌듯하여 넣기도 했습니다.

## 과제를 하며 공부한 내용
- 저는 과제하면서 찾아보는 내용, 링크 등을 항상 마크다운에 복붙 혹은 정리해뒀는데 그걸 그냥 copy & paste 했습니다

