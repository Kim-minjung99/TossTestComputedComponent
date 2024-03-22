import { useMemo, useState } from 'react';
import useSWR from 'swr';

function FrameworkSelect() {
    // 선택된 element
    var [selectedValue, setSelectedValue] = useState("");
    var [userState, setUserState] = useState([]);
    
    const url = "https://jsonplaceholder.typicode.com/users";
    
    const fetcher = async (url: string) => {
        console.log("url", url);
        await fetch(url).then(res=>res.json());
    };

    const {data: userData} = useSWR(url, fetcher, {suspense:true});

    
    console.log('data::',userData);
    // const userData: UserType[] = [
    //     {
    //         id: 1,
    //         name: "minjung",
    //         username: "userName",
    //         email: "email"
    //     }
    // ]
    
    // const {data: queryResult, isLoading: todoDataIsLoading, error : todoDataError} = useSWR(url);

    // trigger러 전달한 InputButton과 Select요소는 서로에 대한 존재를 분리시켜두었기 때문에 알지 못한다.
    // 이렇게 알지 못하는게 좋은것이다.
    // 서로의 존재를 모르기 때문에 서로의 변경점이 생겨도 상관이 없기 때문이다.

    // NOTE: 선택한 요소에 대해 상태값으로 저장하고 이를 표출시키는 로직이 필요하다.
    // 미리 작은 컴포넌트 단위로 어떠한 형태로 나타낼 것인지, 또한 이벤트 핸들러는 무엇인지 고민하고 이를 최상단에서
    // 어떻게 관리할 것인지 고민한다.
    // NOTE - 지금 형태는 Select컴포넌트를 사용할 공간에서 선택된 요소에 대해 핸들링 할 것이므로 최상단 파일에서
    // 상태를 정의한다.
    // 또한 그 상태를 핸들링할 setState를 전달하여 state를 업데이트한다.
    // NOTE - 만약에 예를 들어 Dropdown.Item요소에 대하여 상세 내역을 보고싶은 경우 onChange를 사용해야하는데
    // 이같은 경우는 Item컴포넌트에서 어떻게 정의를 할건지, 커스터마이징 hooks를 사용할 것인지 고민해야한다.

    const selectLabel = "selected된 Label입니다.";
    return (
        // <Select
        //     label={selectLabel}
        //     trigger={<InputButton triggerSelectedValue={selectedValue}></InputButton>}
        //     value={selectedValue}
        //     options={userData}
        //     onClick={setSelectedValue}
        // />
        <div>
            {"please"}
        </div>
    )
}
export default FrameworkSelect;