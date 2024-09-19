import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; 

const Table = () => {
  const data = [
    {
      donor: 'Jimmy, Testington',
      panels: '3 Panel, 12 Panel U CUP',
      barcode: '179620409',
      source: 'medicaid',
      date: '07/18/2023',
      amount: '$0.00',
      observedBy: 'Chavan Vishal',
      status: 'Unable to Donate',
    },
    {
      donor: 'Jimmy, Testington',
      panels: '3 Panel, 12 Panel U CUP',
      barcode: '1501691893',
      source: 'Self Pay',
      date: '07/18/2023',
      amount: '$7.00',
      observedBy: 'Chavan Vishal',
      status: 'Refused',
    },
    {
      donor: 'Jimmy, Testington',
      panels: '3 Panel, 12 Panel U CUP',
      barcode: '1937334336',
      source: 'Self Pay',
      date: '07/18/2023',
      amount: '$0.00',
      observedBy: 'Chavan Vishal',
      status: 'Duplicate/Error',
    },
    {
      donor: 'TestMishraa, Ramakrishnaa',
      panels: '4th Panel, 3 Panel',
      barcode: '1796557961',
      source: 'Self Pay',
      date: '07/18/2023',
      amount: '$5.00',
      observedBy: 'Chavan Vishal',
      status: 'Insufficient Donation',
    },
    {
      donor: 'TestMishraa, Ramakrishnaa',
      panels: 'BA, 4th Panel',
      barcode: '1729320465',
      source: 'medicaid',
      date: '07/18/2023',
      amount: '$5.00',
      observedBy: 'Chavan Vishal',
      status: 'Approved',
    },
    {
      donor: 'Jimmy, Testington',
      panels: 'BZO, BZ2',
      barcode: '1182496815',
      source: 'Self Pay',
      date: '07/18/2023',
      amount: '$7.00',
      observedBy: 'Mashalkar Rohit',
      status: 'Approved',
    },
  ];

  return (
    <div className="w-full p-6 bg-white border rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Date: 06/01/2023 - 7/19/2023</h2>
        <div className="flex space-x-4">
          <button className="flex items-center justify-center px-4 py-2 text-white bg-teal-500 rounded-full">
            <FaSearch className="mr-2" /> SEARCH
          </button>
          <button className="flex items-center justify-center px-4 py-2 text-teal-500 bg-teal-100 rounded-full">
            <FaFilter className="mr-2" /> FILTERS <span className="ml-2 p-1 bg-teal-500 text-white rounded-full">3</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Donor</th>
              <th className="px-4 py-2">Panels</th>
              <th className="px-4 py-2">Barcode</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount($)</th>
              <th className="px-4 py-2">Observed By</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } border-b`}
              >
                <td className="px-4 py-2 text-teal-500 underline cursor-pointer">
                  {row.donor}
                </td>
                <td className="px-4 py-2">{row.panels}</td>
                <td className="px-4 py-2 text-teal-500 underline cursor-pointer">
                  {row.barcode}
                </td>
                <td className="px-4 py-2">{row.source}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.amount}</td>
                <td className="px-4 py-2">{row.observedBy}</td>
                <td className="px-4 py-2">{row.status}</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 rounded-full text-teal-500">
                    •••
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
