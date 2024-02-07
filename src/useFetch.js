/*

ignore this unless ur schiz
*/

import { useState, useEffect } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const updateData = (updatedBlog) => {
    setData(updatedData => updatedBlog)
  }
  useEffect(() => {

    
    const abortController = new AbortController();
  
    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch data for resource')
        }
        return res.json()
      })
      .then(data => {
        setIsPending(false)
        setData(data)
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setError(err.message)
          setIsPending(false)
        }
      })
    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error, updateData}
}

export default useFetch;