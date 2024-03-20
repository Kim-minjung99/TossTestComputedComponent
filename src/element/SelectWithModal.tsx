// import useOpen from "../hooks/useOpen";
// import Dropdown from "./SelectElement/Dropdown";
// import { SelectPropsType } from "./selectPropsType/SelectPropsType";

// /**
//  * @description Modal이 포함된 select UI
//  * @param SelectPropsType 
//  * @returns JSX
//  */
// function SelectWithModal(SelectPropsType: SelectPropsType) {

//     const {isOpen, toggleOpen} = useOpen();

//     return(
//         <Dropdown>
//             <Dropdown.Trigger asElement={SelectPropsType.trigger} onClick={toggleOpen}/>
//             {
//                 isOpen && 
//                 <Dropdown.Modal style={{display: isOpen ? "block" : "none"}}
//                     control = {
//                         <div>
//                             <button type="submit">저장하기</button>
//                             <button type="reset">초기화</button>
//                         </div>
//                     }
//                 >
//                     {
//                         SelectPropsType.options.map((optionElement, index)=>{
//                             return (<Dropdown.Item key={index} onClick={()=>{SelectPropsType.onClick(optionElement)}}>{optionElement}</Dropdown.Item>)
//                         })
//                     }
//                 </Dropdown.Modal>
//             }
//         </Dropdown>
//     );
// }
// export default SelectWithModal;