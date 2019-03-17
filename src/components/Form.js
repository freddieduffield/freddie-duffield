import React from 'react';

class Form extends React.Component {
  state = {
    value: 'hello'
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <>
        <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="hello">Say Hello</option>
            <option value="bye">Say Bye</option>
            <option value="nothing">Say nothing</option>
          </select>
        </form>

        {this.state.value === 'bye' && (
          <div>
            🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤
          </div>
        )}
      </>
    );
  }
}

export default Form;
