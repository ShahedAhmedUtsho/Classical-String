import { FetchContext } from '@/Provider/FetchProvider';
import React, { useContext } from 'react';

const useFetch = () => {
   const a = useContext(FetchContext) ;
   return a
};

export default useFetch;