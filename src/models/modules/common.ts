import { handleActions, createAction } from 'redux-actions';

interface UIState {
  testData: string;
}

type UpdateUIStatePayload = UIState;

const updateState = createAction<UpdateUIStatePayload>('UPDATE_STATE');

export const actions = {
  updateState,
};

export type Actions = { [K in keyof typeof actions]: ReturnType<typeof actions[K]> };

const uiState = handleActions<UIState, UpdateUIStatePayload>(
  {
    [updateState.toString()]: (state, action: Actions['updateState']) => {
      return {
        ...state,
        ...action.payload,
      }
    }
  },
  {
    testData: 'test',
  }
);

export const reducers = {
  uiState,
};
