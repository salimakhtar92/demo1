import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url: string, instantCall: boolean = false) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [callFlag, setCallFlag] = useState<boolean>(instantCall);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log({response});
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (callFlag) {
      fetchData();
      setCallFlag(false);
    }
  }, [url]);

  return {data, loading, error, fetchData};
};

export default useFetch;