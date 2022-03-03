import React, { Fragment } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    console.log('WILL MOUNT', this.state.data);
    this.setState({
      data: [1, 2, 3],
    });
    console.log('WILL MOUNT', this.state.data);
  }

  componentDidMount() {
    console.log('DID MOUNT- BEFORE SETSTATE ', this.state.data);
    this.setState({
      data: [11, 12, 13],
    });
    console.log('DID MOUNT - AFTER SETSTATE ', this.state.data);
  }

  componentDidUpdate() {
    console.log('DID UPDATE - BEFORE SETSTATE ', this.state.data);
    if (this.state.data.length > 1)
      this.setState({
        data: this.state.data.slice(1),
      });
    console.log('DID UPDATE - AFTER SETSTATE ', this.state.data);
  }

  handleClick = () => {
    console.log('CLICK FUNCTION - BEFORE SETSTATE ', this.state.data);
    this.setState({ data: [9, 8, 7] });
    console.log('CLICK FUNCTION - AFTER SETSTATE ', this.state.data);
  };

  render() {
    return (
      <Fragment>
        {console.log('INSIDE RENDER :- ', this.state.data)}
        {this.state.data.map((item) => item)}
        <br />
        <input
          type='text'
          onChange={() => {
            this.setState({ data: [3, 2, 1] });
          }}
        />
        <button onClick={this.handleClick}> Click</button>
      </Fragment>
    );
  }
}

export default App;
