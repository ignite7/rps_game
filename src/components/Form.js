// React
import React from "react";

export default function Form(props) {
  return (
    <div className="main__form">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="userName" className="main__form-label">
          Username
        </label>
        <input
          onChange={props.onChange}
          type="text"
          className="main__form-input"
          name="userName"
          id="userName"
          value={props.userName && props.userName}
          required
        />
        {props.homeError && (
          <p className="main__form-warning">* Insert username please.</p>
        )}
      </form>
    </div>
  );
}
