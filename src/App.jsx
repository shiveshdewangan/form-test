import React, { Component } from "react";
import { schema } from "./schema";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    birth_date: "",
    gender: "",
    contact_info: ""
  };

  handleChange = e => {
    console.log(e.target.name, e.target.value);
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted", this.state);
  };

  render() {
    console.log("state", this.state);
    const colors = ["Blue", "Red", "Green", "Yellow"];
    const sizes = ["Small", "Medium", "Large", "XL", "XXL", "3XL"];

    return (
      <>
        {/* <form onSubmit={this.onSubmit}>
          <ul>
            <li>
              <label>Name:</label>
              <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label>Observation:</label>
              <textarea
                name="observation"
                value={this.state.observation}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <label>Desired color:</label>
              <select
                name="color"
                value={this.state.color}
                onChange={this.handleChange}
              >
                {colors.map((color, i) => (
                  <option key={i} value={color.toLowerCase()}>
                    {color}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <label>T-shirt Size:</label>
              {sizes.map((size, i) => (
                <label key={i}>
                  {size}
                  <input
                    name="size"
                    value={size.toUpperCase()}
                    checked={this.state.size === size.toUpperCase()}
                    onChange={this.handleChange}
                    type="radio"
                  />
                </label>
              ))}
            </li>
            <li>
              <label>
                I accept the agreement
                <input
                  name="acceptedAgreement"
                  type="checkbox"
                  value={this.state.acceptAgreement}
                  onChange={this.handleChange}
                />
              </label>
            </li>
          </ul>
          <button type="submit">Submit</button>
        </form> */}
        <form onSubmit={this.handleSubmit}>
          <ul>
            {schema.map(({ type, label, name, values }) => {
              if (type === "text") {
                return (
                  <li>
                    <label>{label}</label>
                    <input
                      type={type}
                      name={name}
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </li>
                );
              }
              if (type === "date") {
                return (
                  <li>
                    <label>{label}</label>
                    <input
                      type={type}
                      name={name}
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </li>
                );
              }
              if (type === "radio") {
                return (
                  <li>
                    <label>{label}</label>
                    {values.map(value => {
                      return (
                        <>
                          <label>{value}</label>
                          <input
                            type={type}
                            name={name}
                            onChange={this.handleChange}
                            checked={this.state.name === name.toUpperCase()}
                            value={value.toUpperCase()}
                          />
                        </>
                      );
                    })}
                  </li>
                );
              }
              if (type === "tel") {
                return (
                  <li>
                    <label>{label}</label>
                    <input
                      type={type}
                      name={name}
                      onChange={this.handleChange}
                      value={this.state.name}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default App;
