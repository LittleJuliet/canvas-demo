import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReduxState } from '../../../../models';
import styles from './index.module.css';

interface Props {}
interface State {}

class LineWidth extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount(): void {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(10, 10);
      ctx.lineTo(100, 10);
      ctx.closePath();
      ctx.strokeStyle = '#000';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(10.5, 20.5);
      ctx.lineTo(100.5, 20.5);
      ctx.closePath();
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <canvas className={styles.canvas} width={500} height={500}>No Support.</canvas>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({});

export default connect(mapStateToProps)(LineWidth);
