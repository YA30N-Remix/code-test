import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { Task, UserObj, Transaction } from '../types';

const useAPI = () => {
  debugger;
  const getTasks = useCallback(async (): Promise<Task[]> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      });
      
      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });

        return [];
      }

      return await response.json();
    } catch (e) {
      console.log(e);

      toast(`API request failed`, { type: 'error' });
    }

    return [];
  }, []);

  const Login = useCallback(async (userobj: UserObj): Promise<UserObj[]> => {
    debugger;
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        method: 'Post',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(userobj)
      });
      debugger;
      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });

        return [];
      }
      debugger;
      return await response.json();
    } catch (e) {
      console.log(e);
      toast(`API request failed`, { type: 'error' });
    }

    return [];
  }, []);

  const getTransaction = useCallback(async (): Promise<Transaction[]> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      });

      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });

        return [];
      }

      return await response.json();
    } catch (e) {
      toast(`API request failed`, { type: 'error' });
    }

    return [];
  }, []);

  const deleteTransaction = useCallback(async (id: string): Promise<Transaction[]> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/delete/${id}`, {
        method: 'OPTIONS',
        mode: 'cors',
        credentials: 'include'
      });

      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });

        return [];
      }

      return await response.json();
    } catch (e) {
      console.log(e); 
      toast(`API request failed`, { type: 'error' });
    }

    return [];
  }, []);

  return {
    getTasks,
    Login,
    getTransaction,
    deleteTransaction
  };
};

export default useAPI;
