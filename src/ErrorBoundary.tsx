import React, { ErrorInfo } from "react";

/**
 * errorBoundary 컴포넌트 프로퍼티 정의
 * @interface ErrorBoundaryProps
 */
interface ErrorBoundaryProps {
    fallback: JSX.Element;
    children: JSX.Element;
}

interface ErrorBoundaryState {
    hasError : boolean
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {

    // state initialize (초기화)
    // TODO : props type
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    // 에러로부터 파생된 상태 리턴
    // object return
    static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo){
        return {hasError : true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("---------------- error -----------------")
        console.log("error, errorInfo:::", error, errorInfo);
    }




    render(): React.ReactNode {
        if(this.state.hasError){
            return this.props.fallback;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;