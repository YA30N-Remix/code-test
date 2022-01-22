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

  const Login = useCallback(async (): Promise<UserObj[]> => {
    debugger;
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        method: 'Post',
        mode: 'cors',
        credentials: 'include'
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
      debugger;
      toast(`API request failed`, { type: 'error' });
    }

    return [];
  }, []);

  const getTransaction = useCallback(async (): Promise<Transaction[]> => {
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


  return {
    getTasks,
    Login,
    getTransaction
  };
};

export default useAPI;
