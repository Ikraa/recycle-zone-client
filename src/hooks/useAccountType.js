import { useEffect, useState } from "react";

const useAccountType = (email) => {
  console.log(email, "hook");
  const [userCheck, setUserCheck] = useState({});
  useEffect(() => {
    if (email) {
      fetch(`https://recycle-zone.onrender.com/admin/${email}`)
        .then((res) => res.json())
        .then((data) => setUserCheck(data));
    }
  }, [email]);

  return { userCheck };
};

export default useAccountType;
