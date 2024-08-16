import React, { useEffect, useState } from "react";
import axios from "axios";
import { of } from "rxjs";
import { fromFetch } from "rxjs/fetch";

function DisplayNames() {
  const [namesArr, setNamesArr] = useState([]);
  async function getData() {
    const { data } = await axios.get("/api");
    console.log(data);
    setNamesArr(data);
    // const data$ = fromFetch("/api", {
    //   selector: (response) => {
    //     response.json();
    //   },
    // });
    // data$.subscribe({
    //   next: (data) => setNamesArr(data),
    //   complete: () => {
    //     console.log("completed");
    //   },
    // });
  }

  useEffect(() => {
    getData();
  }, []);

  const countOccurrences = (arr) => {
    const nameCount = {};
    arr.forEach((item) => {
      if (nameCount[item.name]) {
        nameCount[item.name]++;
      } else {
        nameCount[item.name] = 1;
      }
    });
    return nameCount;
  };

  const duplicates = countOccurrences(namesArr);

  return (
    <div className="container mt-4">
      <h2>Elements with Counts</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(duplicates).map(([name, count], index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayNames;
