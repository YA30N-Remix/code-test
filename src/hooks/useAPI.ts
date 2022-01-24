import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { Task, UserObj, Transaction, DeletedTransaction } from '../types';

const useAPI = () => {
  
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
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        method: 'Post',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(userobj)
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

  const deleteTransaction = useCallback(async (id: string): Promise<DeletedTransaction> => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/delete/${id}`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
      });

      if (response.status !== 200) {
        toast(`API request failed`, { type: 'error' });

        return {
          id: '',
          deleted: false
        };
      }
      debugger;
      return await response.json();
    } catch (e) {
      console.log(e); 
      toast(`API request failed`, { type: 'error' });
    }

    return {
      id: '',
      deleted: false
    };
  },[]);

  return {
    getTasks,
    Login,
    getTransaction,
    deleteTransaction
  };
};

export default useAPI;
