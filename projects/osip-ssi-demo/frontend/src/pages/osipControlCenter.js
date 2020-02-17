import React, { useState, useEffect } from 'react';
import '../styles/main.scss';
import axios from '../axios';
import Navigation from '../components/navigation.js'
import { useTable, useSortBy,} from 'react-table'

function MyTable({ columns, data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  }, useSortBy)

  return (
    <table {...getTableProps()} className="highlight credential-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className={column.render('Header')}>
                {column.render('Header')}
                <span>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <i className="fas fa-chevron-down"></i>
                        : <i className="fas fa-chevron-up"></i>
                      : <i className="fas fa-sort"></i>}
                  </span>
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map(
          (row, i) =>
            prepareRow(row) || (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
        )}
      </tbody>
    </table>
  )
}

function StatusCell( { cell: { value } } ) {
  let states =
  {
    credential_received: {
      text: <span>Received eID credential</span>,
      symbol: <i className="fas fa-check"></i>
    },
    no_credential: {
      text: <span>No eID credential</span>,
      symbol: <i className="fas fa-user-times"></i>
    },
    credential_issued: {
      text: <span>Claim issued</span>,
      symbol: <i className="fas fa-thumbs-up"></i>
    },
    declined: {
      text: <span>Claim declined</span>,
      symbol: <i className="fas fa-ban"></i>
    },
    delivered: {
      text: <span>Claim distributed</span>,
      symbol: <i className="fas fa-paper-plane"></i>
    },
    revoked: {
      text: <span>Claim Revoked</span>,
      symbol: <i className="fas fa-exclamation-triangle"></i>
    }
  }

  return (
    <div className="col s4 check">
      {states[value].symbol}
      {states[value].text}
    </div>
  )
}

function RevokeCell( { data, cell: { value, row: { index }, column} } ) {

    const action = () => {
        if (data[index].osipCredential.delivered && !data[index].osipCredential.revoked) {
            return (
                <div className="col s4 checkboxes">
                    <label>
                        <input type="checkbox" name={data[index]._id} className="" id={data[index]._id} onChange={column.handleChange}/>
                        <span/>
                    </label>
                </div>
            )
        } else {
            return ""
        }
    }

    return (action())
}

function ActionCell( { data, cell: { value, row: { index }} } ) {
  const [processed, setProcessed] = useState(0);

  const issueCredential = (e) => {
    const postData = async () => {
      await axios.post(`/osip/issueClaim`,
        {
          "credentialtype": "osipCredential",
          "id": data[index].id
        }
      );
    };
    postData();
    setProcessed(1);
  }

  // console.log(value)
  // console.log(index)
  // console.log(data[index])

  let active = data[index].status == 'credential_received' ? 'active' : 'inactive'
  const decline = (e) => {
    const postData = async () => {
      await axios.post(`/osip/issueClaim`,
        {
          "credentialtype": "osipCredential",
          "id": data[index].id,
          "decline": true
        }
      );
    };
    postData();
    setProcessed(2);
  }

  const action = {
    issued: "",
    pending: (
      <div className="col s4 buttons">
        <Button active={active} type="issue" text="Issue claim" handleClick={issueCredential}/>
        <Button active={active} type="decline" text="Decline" handleClick={decline}/>
      </div>
    )
  }

  const showIssued = (
    <div className="col s4 buttons">
      <Button active="active" type="issue" text="Claim issued!"/>
    </div>
  )

  const showDeclined = (
    <div className="col s4 buttons">
      <Button active="active" type="decline" text="Claim declined!"/>
    </div>
  )

  return (
    [action[value], showIssued, showDeclined][processed]
  )
}

function App() {
  const [requests, setRequests] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selected, setSelected] = useState([]);
  const [revokedActive, setRevokedActive] = useState(false);

  const handleChange = (e) =>{
      let s = selected
      let current = e.target.name
      if (!s.includes(current)) {
          s.push(current)
      } else {
          s.pop(current)
      }
      setSelected(s);
      setRevokedActive(selected.length > 0);
  }
  const columns = React.useMemo(
    () => [
      {
        Header: 'Select',
        accessor: 'revoke',
        Cell: RevokeCell,
        disableSorting: true,
        handleChange,
      },
      {
        Header: 'Request Date',
        accessor: 'created'
      },
      {
        Header: 'Firstname',
        accessor: 'firstname'
      },
      {
        Header: 'Lastname',
        accessor: 'lastname'
      },
      {
        Header: 'Document ID',
        accessor: 'id'
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: StatusCell
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ActionCell,
        disableSorting: true
      }
    ],
    []
  )

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/osip/credentialRecords`)
      setRequests(result.data)
    };
    fetchData();
  }, []);

  let d = requests.map((r) => {
    var d = new Date(r.created);

    r.status = "eIdCredential" in r ? "credential_received" : "no_credential"
    r.status = r.osipCredential.issued ? "credential_issued" : r.status
    r.status = r.osipCredential.declined ? "declined" : r.status
    r.status = r.osipCredential.delivered ? "delivered" : r.status
    r.status = r.osipCredential.revoked ? "revoked" : r.status
    r.action = r.osipCredential.issued ? "issued" : "pending"
    r.action = r.osipCredential.declined ? "issued" : r.action
    r.action = r.osipCredential.revoked ? "issued" : r.action
    r.created = d.toLocaleDateString("de-DE")
    return r
  })

    const revoke = (e) => {
        const postData = async () => {
            await axios.post(`/osip/revokeCredential`,
                {
                    ids: selected
                }
            );
            setSuccess(true)
        };
        postData();
    }

    return (
    <div className="App gray">

      <Navigation text="OSiP Control Center"/>

      <div className="main">
        <h1>OSiP Verified Credentials:</h1>
        <MyTable columns={columns} data={d} />
        { requests.length === 0 ? "No credentials!" : ''}
        { success ? <div style={{textAlign: "right"}} >Successfully revoked!</div> : "" }
        <br/>
        <Button active={revokedActive ? 'active' : 'inactive'} className={`waves-effect waves-light btn secondary-content`} handleClick={revoke} text={"Revoke selected credentials"}></Button>
      </div>
     </div>
  );
}

const Button = (props) => {
  return (
    <button className={`waves-effect waves-light btn secondary-content ${props.type} ${props.active}`} onClick={props.handleClick}>{props.text}</button>
  )
}

export default App;
