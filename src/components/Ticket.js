import React, { Component } from "react";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: {
        Iran: ["Tehran", "Shiraz", "Yazd", "Tabriz", "Mashhad"],
        Turkey: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        France: ["Paris", "Lyon", "Marseille", "Toulouse"],
        USA: ["New York", "Los Angeles", "Chicago", "Houston"],
        China: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
        Australia: ["Sydney", "Melbourne", "Brisbane", "Perth"],
      },
      mainCitiesCountry: [],
    };
    this.countryHandler = this.countryHandler.bind(this);
  }
  countryHandler(event) {
    let mainCities = this.state.countries[event.target.value];
    if (event.target.value == -1) {
      this.setState({
        mainCitiesCountry: [],
      });
    } else {
      this.setState({
        mainCitiesCountry: mainCities,
      });
    }
    console.log(this.state.mainCitiesCountry);
  }
  render() {
    return (
      <div className="main-container">
        <div className="sub-container">
          <input
            className="input fname"
            type="text"
            placeholder="First Name ..."
          />
          <input
            className="input lname"
            type="text"
            placeholder="Last Name ..."
          />
          <div className="select-cart">
            <select
              className="selected-list country-list"
              id="country"
              onChange={this.countryHandler}
            >
              <option value="-1">Select the country ...</option>
              <option value="Iran">Iran</option>
              <option value="Turkey">Turkey</option>
              <option value="France">France</option>
              <option value="USA">USA</option>
              <option value="China">China</option>
              <option value="Australia">Australia</option>
            </select>
            <select className="selected-list city-list" id="city">
              {this.state.mainCitiesCountry.length ? (
                this.state.mainCitiesCountry.map((city) => {
                  return <option value={city}>{city}</option>;
                })
              ) : (
                <>
                  {" "}
                  <option value="-1">Select the city ...</option>
                </>
              )}
            </select>
          </div>
        </div>
        <button>Search</button>
      </div>
    );
  }
}
