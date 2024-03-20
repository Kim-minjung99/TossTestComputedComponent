import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryCustom from "./ErrorBoundary/ErrorBoundaryCustom";

function AsyncComponent({suspenseFallback, children}:{suspenseFallback: React.ReactNode, children: React.ReactNode}){
    
    return(
        <ErrorBoundary FallbackComponent={ErrorBoundaryCustom}>
            <Suspense fallback={suspenseFallback}>
                {children}
            </Suspense>
        </ErrorBoundary>
    );
}
export default AsyncComponent;