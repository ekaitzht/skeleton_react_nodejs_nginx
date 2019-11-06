import React, { useState, useEffect } from "react";
import axios from "axios";
const Plane = () => {
  // const [hasError, setErrors] = useState(false);
  const [planes, setPlanes] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("api/planes");
        console.log("data", res.data);
        setPlanes(res.data);
      } catch (error) {}
    }
    fetchData();
  }, [planes]);

  return <div>{JSON.stringify(planes)}</div>;
};
export default Plane;

// planes[0] = [['A','B','C','D','E','F']]
