import React from "react";
import "./style.css";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["dateofbirth"] = "";
      this.setState({ fields });
      alert("Successful Submission");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (fields["username"].length > 5 && fields["username"].length < 11) {
        if (!fields["username"].match(/^[a-zA-Z0-9]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphanumeic characters only.";
        } else if (fields["username"].match(/^\d/)) {
          formIsValid = false;
          errors["username"] = "*username cannot starts with number.";
        }
      } else {
        formIsValid = false;
        errors["username"] = "*username should be in length range 5-11";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["dateofbirth"]) {
      formIsValid = false;
      errors["dateofbirth"] = "*Please enter your dateofbirth.";
    }

    if (typeof fields["dateofbirth"] !== "undefined") {
      if (!fields["dateofbirth"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["dateofbirth"] = "*Please enter valid dateofbirth.";
      } else if (!(Number(fields["dateofbirth"]) >= 18)) {
        formIsValid = false;
        errors["dateofbirth"] = "*Age should be equal or greater than 18.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  reset = () => {
    this.setState({
      fields: {},
      errors: {}
    });
  };
  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registration page</h3>
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>UserName</label>
            <input
              type="text"
              name="username"
              value={this.state.fields.username}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.username}</div>
            <label>Email ID:</label>
            <input
              type="text"
              name="emailid"
              value={this.state.fields.emailid}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            <label>Date Of Birth:</label>
            <input
              type="text"
              name="dateofbirth"
              value={this.state.fields.dateofbirth}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.dateofbirth}</div>

            <input type="submit" className="button" value="Register" />
            <input
              type="reset"
              className="button"
              value="Reset"
              onClick={this.reset}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
