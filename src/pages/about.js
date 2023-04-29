import axios from 'axios';
import { useState } from 'react';
import GetUser from '../../lib/GetUsers';



function About() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

// const {dataN} = GetUsers()

// console.log(dataN)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const res = await axios.post(
    //     '/api/hello',
    //     { data: inputValue },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="h-screen flex flex-col text-white justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" bg-transparent border rounded-md z-40"
      >
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          className="px-2 w-64 focus:outline-none bg-transparent"
        />
        <button
          type="submit"
          className="border-l p-2 cursor-pointer hover:bg-gray-700 rounded-r-md"
        >
          submit
        </button>
      </form>
      <h1 className="text-white mt-4">{message}</h1>
    </div>
  );
}

export default About;

