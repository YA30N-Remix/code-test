import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { useSelector, actions, useDispatch } from '../store';
import useQuery from '../hooks/useQuery';
import useAPI from '../hooks/useAPI';

import './DataPage.scss';
import { Link } from 'react-router-dom';

const DataPage: FC = () => {
  const { getTransaction } = useAPI();
  const dispatch = useDispatch();
  const { query, setQuery } = useQuery();
  const transactions = useSelector((state) => state.transactions);
 
  useEffect(() => {
    if (transactions.length) return;

    getTransaction().then((transactions) => {
      dispatch(actions.set({ transactions }));
    });
  }, [getTransaction, dispatch, transactions]);


  return (
    <main className="DataPage">
      <h1>DataPage</h1>
  
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
                      <th className="text-center" scope="col">
                        Id
                      </th>
                      <th className="text-center" scope="col">
                      from
                      </th>
                      <th className="text-center" scope="col">
                      to
                      </th>
                      <th className="text-center" scope="col">
                      amount
                      </th>
                      <th className="text-center" scope="col">
                      token
                      </th>
                      <th className="text-center" scope="col">
                      tokenName
                      </th> 
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody> 
                 {transactions.map((item, index) => (
                        <tr key={item.id}>
                          <th scope="row">{index + 1}</th>
                          <td className="text-center">{item.from}</td>
                          <td className="text-center">{item.to}</td>
                          <td className="text-center">{item.amount}</td>
                          <td className="text-center">{item.token}</td>
                          <td className="text-center">{item.tokenName}</td> 
                          <td className="text-center">{item.tokenName}</td> 
                          <td className="text-center"> 
                              <Link
                                to={`/dashboard/restaurant/edit/${item.id}`}
                                onClick={() => {}}
                                className="p-1"
                              >
                                <i className="fa fa-id-card text-warning"></i>
                              </Link>
 
                              <span
                                className="cursor-pointer p-1"
                                onClick={() => {}}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              </main>
  );
};

export default DataPage;
