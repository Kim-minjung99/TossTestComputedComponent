// Menu, Dropdown, item, Trigger, Modal의 공통적인 타입을 추론해보자..
//  

type DropdownMenuType = {
    label? : string[]|string,
    children : React.ReactNode,
    value?: string,
}

// dropdown을 import 할수 있도록 export해주고 dropdown이라는 객체 안에 item, menu 등을 객체로 넣어서 선택하여 사용할 수 있게 한다.
// 이 dropdown은 정렬되어야 하는 최상단 컨테이너이므로 Direction이라는 명을 주어 flex를 지정해주어야 할 필요가 있다.
export const Dropdown = ({ label, children }: DropdownMenuType) => {
    return (
        <div>
            <div>{label}</div>
            {children}
        </div>
    );
}

// TODO: reactNode가 뭘까?
// 가장 기본적인, 가장 광범위한 사용이 가능한 타입이다, 
// 가능한 타입 : String, Number, boolean, Null, undefined... 
// 이렇게 되면 사람들은 무슨 child가 들어올지 추론이 힘들지 않을까?

Dropdown.Menu = ({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    );
}

// parameter : 트리거 element를 받아들이는 as
// parameter : menu Open 클릭 이벤트
Dropdown.Trigger = ({asElement, onClick} : {asElement: React.ReactNode, onClick: () => void}) => {
    return (
        <div onClick={onClick}>
            {asElement}
        </div>
    );
}

// option을 렌더링 하여 만들어준다.
Dropdown.Item = ({ children , onClick }: { children: string, onClick: (value: string) => void }) => {
    return(
        <div onClick={()=>{onClick(children)}}>
            {children}
        </div>
    );
}

/**
 * @description Modal창 입니다.
 * @param : Item element
 */
Dropdown.Modal = ({children, control, style} :{children: React.ReactNode, control : React.ReactNode, style: object}) => {

    const totStyle = {
        ...style,
        background: "grey"
    }

    return(
        <div style={totStyle}>
            <div>
                {children}
            </div>
            {control}
        </div>
    );
}



export default Dropdown;