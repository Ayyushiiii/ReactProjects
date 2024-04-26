import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Ayyushiiii").then((response) =>
  //       response.json().then((data) => setData(data))
  //     );
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl grid justify-items-center">
      Github followers : {data.followers}
      <img
        src={data.avatar_url}
        alt="Github profile image"
        className="m-2 w-1/4  "
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Ayyushiiii");
  return response.json();
};
