import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

import { useSelector, actions, useDispatch } from '../store';
import useQuery from '../hooks/useQuery';
import useAPI from '../hooks/useAPI';

import './Data.scss';
import { Link } from 'react-router-dom';

const Data: FC = () => {
  const { getTransaction } = useAPI();
  const dispatch = useDispatch();
  const { query, setQuery } = useQuery();
  const userobjs = useSelector((state) => state.userobjs);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
  return (
    <main className="Data">
      <h1>Data</h1>
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody> 
                      restaurants.map((item, index) => (
                        <tr key={item.id}>
                          <th scope="row">{index + 1}</th>
                          <td className="text-center">{item.name}</td>
                          <td className="text-center">{item.address}</td>
                          <td className="text-center">{item.phoneNumber}</td>
                          <td className="text-center">{item.managerName}</td>
                          <td className="text-center">{item.website}</td>
                          <td className="text-center">{item.slug}</td>
                          <td className="text-center">
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1"
                            >
                              <i className="fa fa-map"></i>
                            </a>
                              <Link
                                to={`/dashboard/restaurant/edit/${item.id}`}
                                onClick={() => prepareEditRestaurant()}
                                className="p-1"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>

                              <Link
                                to={`/dashboard/restaurant/${item.id}/menu`}
                                className="p-1"
                              >
                                <i className="fa fa-bars"></i>
                              </Link>

                              <span
                                className="cursor-pointer p-1"
                                onClick={() => {deleteRestaurant(item.id);}}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </span>
                          </td>
                        </tr>
                      ))
                    )
                  </tbody>
                </table>
              </div>
              </main>
  );
};

export default Data;
