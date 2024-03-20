import {SelectPropsType} from "./selectPropsType/SelectPropsType";
import Dropdown from "./SelectElement/Dropdown";
import {useState} from "react";
//import Dropdown from 
// NOTE: Dropdown.Item처럼 이 dot으로 연결된 컴포넌트는 구조가 어떻게 되어있을까?
// NOTE: Dropdown이라는 const객체를 import해와서 객체 접근처럼 사용하는 방식이다. 즉 dropdown.trigger, menu, item등은 dropdown컴포넌트 안에 정의되어 있는 것이다.
// NOTE: 참고 레퍼런스 : https://hansolbangul.tistory.com/30


function Select(selectElement: SelectPropsType) {

    const [isOpen, setIsOpen] = useState(false);
    console.log("isOpen", !isOpen);
    console.log("selectElements:::", selectElement);

    return (
        
        <Dropdown>
            <Dropdown.Trigger asElement={selectElement.trigger} onClick={()=>{setIsOpen(!isOpen)}}/>
            {
                isOpen &&
                <Dropdown.Menu>
                    {
                        selectElement.options.map((itemOption, index)=>{
                            return (<Dropdown.Item key={index} onClick={()=>{selectElement.onClick(itemOption.name)}}>{itemOption.name}</Dropdown.Item>)
                        })
                    }
                </Dropdown.Menu>
            }
        </Dropdown>
    );
}

// TODO: Assign object to a variable before exporting as module default 이란
// export할거를 하나의 오브젝트로 묶어서 익스포트하라는 소리임.
// 참고 레퍼런스 : https://webaura.tistory.com/entry/ReactJS-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B2%BD%EA%B3%A0-Assign-object-to-a-variable-before-exporting-as-module-default#google_vignette

export default Select;