import { useStepper } from "../../contexts";

export const AccountSetup = () => {
  const { userData, setUserData } = useStepper();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Username
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            name="username"
            placeholder="Username"
            value={userData["username"] || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Email
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            name="email"
            placeholder="Email"
            value={userData["email"] || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            name="password"
            placeholder="Password"
            value={userData["password"] || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Confirm Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={userData["confirmPassword"] || ""}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
