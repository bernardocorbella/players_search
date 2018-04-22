import React from 'react';
import PropTypes from 'prop-types';

import { POSITIONS } from '../../app';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', position: '', age: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFormData() {
    return this.state;
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { filterPlayers } = this.props;
    const formData = this.getFormData();

    filterPlayers(formData);
  }

  render() {
    return (
      <form className="flex flex-wrap flex-nowrap-l" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="w-100 w-25-l pa3 mb2 mb0-l mr3-l"
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          pattern="[A-Za-z]+"
          title="Name"
          placeholder="Name"
        />
        <select
          className="w-100 w-25-l pa3 mb2 mb0-l mr3-l"
          title="Position"
          name="position"
          value={this.state.position}
          onChange={this.handleInputChange}
        >
          <option value="">Position</option>
          {POSITIONS.map((p, index) => (
            <option key={index} value={p}>
              {p}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="w-100 w-25-l pa3 mb2 mr3-l mb0-l"
          min="18"
          max="40"
          title="Age"
          name="age"
          value={this.state.age}
          onChange={this.handleInputChange}
          placeholder="Age"
        />
        <input type="submit" className="w-100 w-25-l pa3 mb2 mb0-l" value="Search" />
      </form>
    );
  }
}

Form.propTypes = {
  filterPlayers: PropTypes.func
};
