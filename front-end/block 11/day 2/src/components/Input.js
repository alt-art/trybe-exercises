import React from "react";

class Input extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          type={this.props.type}
          className="form-control"
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
          maxLength={this.props.maxLength}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default Input;
