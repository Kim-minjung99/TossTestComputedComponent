// import { useState } from "react";
// // import SelectWithModal from "../element/SelectWithModal";
// import InputButton from "../element/InputButton";

// function FrameworkModal() {

//     // 선택된 요소
//     const [triggerSelectedValue, setTriggerSelectedValue] = useState([""]);
//     // 선택할 수 있는 요소
//     const [itemList] = useState(["a", "b", "c"]);

//     // TODO: 실제 open api를 호출 및 패치하여 swr을 적용시켜 보자
    

//     console.log("triggerSelectedValue:::", triggerSelectedValue);

//     var addSelectedItem = (addValue: string) => {
//         console.log("helo");
//         setTriggerSelectedValue([
//             ...triggerSelectedValue,
//             addValue
//         ])
//     }

//     /**
//      * label : 라벨
//      * trigger : 이벤트를 발생시킬 트리거 요소
//      * value : 선택된 요소
//      * options : 보여줄 요소들
//      * onClick : Item 요소 선택
//      */

//     return(
//         <SelectWithModal
//             trigger={<InputButton triggerSelectedValue={triggerSelectedValue}></InputButton>}
//             value={triggerSelectedValue}
//             options={itemList}
//             onClick={addSelectedItem}
//         />
//     );
// }
// export default FrameworkModal;