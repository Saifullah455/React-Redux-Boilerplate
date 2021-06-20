import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setData } from '../../store/action/index';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.users)}>Get Redux Data</button>
        <button onClick={() => this.props.set_data()}>Set Redux Data</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.reducer.users
})

const mapDispatchToProps = (dispatch) => ({
  set_data: () => dispatch(setData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);