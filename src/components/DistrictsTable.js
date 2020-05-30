import React from "react";
import "./DistrictsTable.css";

const DistrictsTable = ({ districts }) => {
  const districtInfo = [];

  for (const name in districts) {
    districtInfo.push({
      ...districts[name],
      name,
    });
  }

  districtInfo.sort((a, b) => {
    return b.confirmed - a.confirmed;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {districtInfo.map((district, index) => {
          return (
            <tr key={index}>
              <td>{district.name}</td>
              <td>{district.confirmed}</td>
              <td>{district.active}</td>
              <td>{district.recovered}</td>
              <td>{district.deceased}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DistrictsTable;
