import React from "react";
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import Table from "./components/Table/Table";
import SearchResults from "./components/SearchResults/SearchResults";
import employees from './employee.json';

class App extends React.Component {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ascending" 
  }

  handleInputChange = event => {
    event.preventDefault();
    let query = event.target.value.toLowerCase();
    const filteredEmployees = employees.filter(result =>
      result.name.toLowerCase().toString().includes(query) ||
      result.birthday.toLowerCase().toString().includes(query) ||
      result.email.toLowerCase().toString().includes(query) ||
      result.phone.toLowerCase().toString().includes(query) 
    );

    this.setState({ employees: filteredEmployees })
  }

  // get sort order here
  compareSortASC(a, b) {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  };
  compareSortDESC(a, b) {
    if (a.name > b.name) return -1;
    if (b.name > a.name) return 1;
    return 0;
  };
  handleSortClick = (event) => {
    const sortOrderNow = this.state.sortOrder === "descending" ? "ascending" : "descending";
    this.setState({ sortOrder: sortOrderNow })
    let sortedEmployees = "";
    if (this.state.sortOrder === "ascending") {
      sortedEmployees = this.state.employees.sort(this.compareSortASC);
    } else if (this.state.sortOrder === "descending") {
      sortedEmployees = this.state.employees.sort(this.compareSortDESC);
    }
    this.setState({ employees: sortedEmployees })
  }

  compareSortASCbday(a, b) {
    if (Date.parse(a.birthday) > Date.parse(b.birthday)) return 1;
    if (Date.parse(b.birthday) > Date.parse(a.birthday)) return -1;
    return 0;
  };
  compareSortDESCbday(a, b) {
    if (Date.parse(a.birthday) > Date.parse(b.birthday)) return -1;
    if (Date.parse(b.birthday) > Date.parse(a.birthday)) return 1;
    return 0;
  };
  handleSortClickBday = (event) => {
    const sortOrderNow = this.state.sortOrder === "descending" ? "ascending" : "descending";
    this.setState({ sortOrder: sortOrderNow })
    let sortedEmployees = "";
    if (this.state.sortOrder === "ascending") {
      sortedEmployees = this.state.employees.sort(this.compareSortASCbday);
    } else if (this.state.sortOrder === "descending") {
      sortedEmployees = this.state.employees.sort(this.compareSortDESCbday);
    }
    this.setState({ employees: sortedEmployees })
  }

  compareSortASCphone(a, b) {
    if (a.phone > b.phone) return 1;
    if (b.phone > a.phone) return -1;
    return 0;
  };
  compareSortDESCphone(a, b) {
    if (a.phone > b.phone) return -1;
    if (b.phone > a.phone) return 1;
    return 0;
  };
  handleSortClickPhone = (event) => {
    const sortOrderNow = this.state.sortOrder === "descending" ? "ascending" : "descending";
    this.setState({ sortOrder: sortOrderNow })
    let sortedEmployees = "";
    if (this.state.sortOrder === "ascending") {
      sortedEmployees = this.state.employees.sort(this.compareSortASCphone);
    } else if (this.state.sortOrder === "descending") {
      sortedEmployees = this.state.employees.sort(this.compareSortDESCphone);
    }
    this.setState({ employees: sortedEmployees })
  }

  compareSortASCemail(a, b) {
    if (a.email > b.email) return 1;
    if (b.email > a.email) return -1;
    return 0;
  };
  compareSortDESCemail(a, b) {
    if (a.email > b.email) return -1;
    if (b.email > a.email) return 1;
    return 0;
  };
  handleSortClickEmail = (event) => {
    const sortOrderNow = this.state.sortOrder === "descending" ? "ascending" : "descending";
    this.setState({ sortOrder: sortOrderNow })
    let sortedEmployees = "";
    if (this.state.sortOrder === "ascending") {
      sortedEmployees = this.state.employees.sort(this.compareSortASCemail);
    } else if (this.state.sortOrder === "descending") {
      sortedEmployees = this.state.employees.sort(this.compareSortDESCemail);
    }
    this.setState({ employees: sortedEmployees })
  }

  render() {
    return (
      <>
        <Header />
        <SearchInput
          name="search" value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <table className="table table-striped">
          <Table 
          handleSortClick={this.handleSortClick}
          handleSortClickBday={this.handleSortClickBday}
          handleSortClickPhone={this.handleSortClickPhone}
          handleSortClickEmail={this.handleSortClickEmail} />
          <tbody>
          {this.state.employees.map(individual =>
            <SearchResults
              name={individual.name}
              image={individual.image}
              phone={individual.phone}
              email={individual.email}
              birthday={individual.birthday}
              id={individual.id}
              key={individual.id}
            />)}
        </tbody>
        </table>
      </>
    );
  }
}

export default App;