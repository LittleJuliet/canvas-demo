import { Component } from 'react';
import styles from './index.module.css';
import { store, actions, ReduxState } from '../../../models';
import { connect } from 'react-redux';

interface IProps {
  uiState: { testData: string };
}

interface IState {}

class ClassRedux extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  changeStore() {
    store.dispatch(actions.common.updateState({ testData: '123' }));
  }

  render() {
    const { testData } = this.props.uiState;
    return (
      <div className={styles.container}>
        <span>{testData}</span>
        <button onClick={this.changeStore}>修改</button>
      </div>
    );
  }
}

export default connect((state: ReduxState) => ({
  uiState: state.uiState,
}))(ClassRedux)
