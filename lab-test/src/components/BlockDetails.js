import React from "react";
import "../App.css";

function BlockDetails(props) {
  return (
    <div>
      <h1 class="display-1">Block Details</h1>
      <br />
      <table class="table table-bordered">
        <tr>
          <th>
            <h2>Address</h2>
          </th>
          <td>
            <h3>{props.address}</h3>
          </td>
        </tr>

        <tr>
          <th>
            <h2>Balance</h2>
          </th>
          <td>
            <h3>{props.balance}</h3>
          </td>
        </tr>

        <tr>
          <th>
            <h2>Gas used</h2>
          </th>
          <td>
            <h3>{props.gasUsed}</h3>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default BlockDetails;
