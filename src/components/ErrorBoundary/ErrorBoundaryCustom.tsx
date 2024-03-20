// 각 파트별로 error시 발생할 수 있는 JSX를 만들어 에러시 보여줄 수 있다.
// error : 에러문구, resetErrorBoundary : 에러시 다시 재시도하는 함수
import { FallbackProps } from "react-error-boundary";

function ErrorBoundaryCustom({error, resetErrorBoundary}: FallbackProps){
    // 리듀서로 각 파트별 (은행, 페이먼츠, 증권 등) 에러커스텀 페이지를 구분하면 어떨까?
    // const whatisPart: "은행|페이먼츠|증권" = reducer() ...
    // const = ... if(whatisPart === "은헹") return <은행에러커스텀><button onClick={resetErroBoundary...}>{error}</></button> ...


    return(
        <div>
            {error}
            <button onClick={resetErrorBoundary}> 다시시도 </button>
        </div>
    );
}
export default ErrorBoundaryCustom;