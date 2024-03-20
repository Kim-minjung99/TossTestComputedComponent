// value, trigger은 선택된 요소의 값을 전달해야 하므로 이 것에 대한 형식지정이 필요하다.
// 이 형식은 따로 빼는게 좋겠는가?

// trigger은 요소를 받는 부분이므로 타입을 어떻게 지정해주어야 하는지 찾아봐야한다.

// NOTE 함수의 type화 지정은 어떻게 하는가?
// 이러한 함수를 정의할건데 파라미터를 이 값으로 넣어 void타입으로 돌려주겠다 라는 소리이다.
// NOTE 이를 함수의 "호출 시그니처"라고 부른다
// 뭘로 리턴할지 모르겠는데 객체 만들때 리턴타입 만들면 안됨? 
// 됩니다. 제네릭, 선언 시점이 아닌 생성 시점에 타입을 명시하여 여러 타입을 사용할 수 있도록 하는 기법쓰세요. 
// 한번 선언해두면 다양한 타입에 재사용할 수 있다.

// 나중에 함수를 반환하는 경우 이 문법을 통해 인수나 반환 함수의 타입을 지정할 수 있다.
// 참고 레퍼런스 : https://jinchuu1391.tistory.com/60
// ex. type logFn = (value: string) => void; 
// ex. const result: logFn = (value) => console.log(result);
export type SelectPropsType = {
    label? : string,
    trigger : React.ReactNode,
    value : string|""|string[],
    options : UserType[],
    onClick: (value: string) => void
}

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
}

