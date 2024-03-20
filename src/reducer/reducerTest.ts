//import { useReducer } from 'react';

// openMenu는 isOpen, openMenu를 가지고 있다.
// 토스 slash 내용을 그대로 코딩해보기

// open한 메뉴에 대해서 다룰수 있는 요소는 selectbox, navbar등이 있다.

// reducer 함수에서 새로운 상태를 만들 때에는 불변성을 지켜주어야 하기 때문에 위 형태와 같이 spread 연산자를 사용해주었습니다.


// open을 하였는가?
type IsOpenMenuStateType = {
    isOpened : boolean,
}

type OpenedMenuStateType = {
    openedMenu : {
        menuDepth: (0 | 1 | 2) ,
        menuName : ("민" | "새탭" | "김민정" | "Developer" | "Toss"),
    }
}

type OpenMenuStateActionType = {
    // 행위를 정의

    // 메뉴를 여는 행위는 close, open밖에 없다.
    openMenuAction? : ("OPEN_MENU" | "CLOSE_MENU");
    changeMenuDepth? : number,
    changeOpenMenuName : OpenedMenuStateType
}

const testMenu: OpenMenuStateActionType = {
    changeOpenMenuName : {
        openedMenu : {
            menuDepth : 0,
            menuName : "민",
        }
    }
}

console.log("testMenu", testMenu);

var testData : object|string = "Hello";
const canInside : string = "isOpen";
testData = {
    [canInside] : true,
};

console.log("testData",testData);

// function reducer(openMenuState : IsOpenMenuStateType & OpenedMenuStateType, openMenuAction: unknown) {

//     // switch(openMenuAction.type) {
//     //     case 'OPEN_MENU':
//     //             return openMenuState.isOpened = true;
//     // }
// }