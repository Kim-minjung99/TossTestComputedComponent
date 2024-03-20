import './App.css';
import FrameworkSelect from './ReactFramework/FrameworkSelect';
import { Suspense } from 'react';
import ErrorBoundaryCustom from './components/ErrorBoundary/ErrorBoundaryCustom';
import {ErrorBoundary} from 'react-error-boundary';

// TODO : 스텝 순서대로 따라가는 로직이라고 생각하고 하나의 흐름을 퍼럼이라고 생각하고
// 스텝의 흐름을 훅으로 직접 만들어보자.
// AsyncComponent를 이용하여 굳이 에러시에 발생하는 컴포넌트에 대해 신경쓸 필요 없다. 커스텀으로 만들어두면 되기 때문이다.
// SuspenseLoadComponent : 이로써 로딩중일때 보여주기를 원하는 컴포넌트를 지정할 수 있다.
// 근데 FE에 Exception처리가 미흡하다는게 무슨 소린지 모르겠네 좀더 알아봐야 할듯. 그사람은 아마 Errorboundary를 클래스로 만들었을테니.. 
function App() {
  
  return(
    <Suspense fallback={<div>Loading</div>}>
      <FrameworkSelect/>
    </Suspense>
    // <ErrorBoundary FallbackComponent={ErrorBoundaryCustom}>
    //   <Suspense fallback={<div>Now Loading...</div>}>
    //   </Suspense>
    // </ErrorBoundary>
  );
}

export default App;
