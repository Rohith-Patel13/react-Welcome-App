// Write your code here
import './index.css'

import {Component} from 'react'

/*
directly modifying this property doesn't trigger a re-render 
of the component. React doesn't recognize that the component's 
internal data has changed, so the UI doesn't update accordingly. 
In order to ensure that the UI reflects the updated button text, 
you need to use React's state management(state and setState())

State: In React, state is an object that holds data that can 
change over time. When state changes, React knows that it needs 
to update the UI to reflect the new state.

setState(): setState() is a method provided by React that 
allows you to update the state of a component. When you call 
setState(), React knows that the state has changed, and it 
schedules a re-render of the component with the updated state.
*/

class Welcome extends Component {
  state = {text: 'Subscribe'}

  triggerOnclickEvent = () => {
    this.setState(prevState => ({
      text: prevState.text === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))
  }

  render() {
    const {text} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          type="button"
          className="btnStyle"
          onClick={this.triggerOnclickEvent}
        >
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
