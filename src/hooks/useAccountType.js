import { useEffect, useState } from "react";

const useAccountType = (email) => {
  console.log(email, "hook");
  const [userCheck, setUserCheck] = useState({});
  useEffect(() => {
    if (email) {
      fetch(`https://recyclezone.vercel.app/admin/${email}`)
        .then((res) => res.json())
        .then((data) => setUserCheck(data));
    }
  }, [email]);

  return { userCheck };
};

export default useAccountType;
