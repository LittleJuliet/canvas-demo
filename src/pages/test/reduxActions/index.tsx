import { useDispatch } from 'react-redux';
import { actions, useSelector } from '../../../models';

function ReduxActionsDemo() {
  const dispatch = useDispatch();

  const uiState = useSelector((state) => state.uiState);

  function changeTestData() {
    dispatch(actions.common.updateState({ testData: 'isChanged' }));
  }

  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: 'bold' }}>{uiState.testData}</div>
      <button onClick={changeTestData}>改变testData</button>
    </div>
  );
}

export default ReduxActionsDemo;
