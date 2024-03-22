import { Suspense } from "react";
import ErrorBoundary from "../../ErrorBoundary";
import {AsyncType} from './types/AsyncType' ;

function AsyncComponent({ errorFallback,suspenseFallback,children }: AsyncType){

return (
    <ErrorBoundary fallback={errorFallback}>
        <Suspense fallback={suspenseFallback}>
            {children}
        </Suspense>
    </ErrorBoundary>
    );
}
export default AsyncComponent;