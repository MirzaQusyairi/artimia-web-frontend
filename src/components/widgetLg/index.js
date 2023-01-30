import React from "react";
import "./index.css";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/10146088/pexels-photo-10146088.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Uhuy Beut Abiez</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.50</td>
          <td className="widgetLgStatus">
            <Button type={"Approved"}></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/10146088/pexels-photo-10146088.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Uhuy Beut Abiez</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.50</td>
          <td className="widgetLgStatus">
            <Button type={"Pending"}></Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/10146088/pexels-photo-10146088.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Uhuy Beut Abiez</span>
          </td>
          <td className="widgetLgDate">2 June 2021</td>
          <td className="widgetLgAmount">$122.50</td>
          <td className="widgetLgStatus">
            <Button type={"Declined"}></Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
