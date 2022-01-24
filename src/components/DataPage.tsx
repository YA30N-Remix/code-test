import React, { FC, ChangeEvent, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { useSelector, actions, useDispatch } from '../store';
import useAPI from '../hooks/useAPI';

import './DataPage.scss';

const DataPage: FC = () => {
  const { getTransaction, deleteTransaction } = useAPI();
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    if (transactions.length) return;

    getTransaction().then((transactions) => {
      debugger;
      dispatch(actions.set({ transactions }));
    });
  }, [getTransaction, deleteTransaction, dispatch, transactions]);

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
              <th className="text-center" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item, index) =>
              item == null ? (
                <tr></tr>
              ) : (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td className="text-center">{item == null ? '' : item.from}</td>
                  <td className="text-center">{item == null ? '' : item.to}</td>
                  <td className="text-center">{item == null ? '' : item.amount}</td>
                  <td className="text-center">{item == null ? '' : item.token}</td>
                  <td className="text-center">{item == null ? '' : item.tokenName}</td>
                  <td>
                    <span
                      className="cursor-pointer p-1"
                      onClick={() => {
                        debugger;
                        deleteTransaction(item.id).then((transactions) => {
                          toast(`Delete Success`, { type: 'success' });
                          getTransaction().then((transactions) => {
                            debugger;
                            dispatch(actions.set({ transactions }));
                          });
                        });
                      }}
                    >
                      <i className="fa fa-trash text-danger"></i>
                    </span>
                    <span
                      className="cursor-pointer p-1"
                      onClick={() => {
                        alert(item.from);
                      }}
                    >
                      <i className="fa fa-card text-default"></i>
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default DataPage;
