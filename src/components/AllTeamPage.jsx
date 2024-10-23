import React from "react";

const AllTeamPage = () => {
  const Card = ({ imageSrc, title, email, role }) => {
    return (
      <div className="rounded-lg shadow-lg bg-white flex flex-col items-center py-8 px-10">
        <img
          className="w-40 h-40 object-cover rounded-full"
          src={imageSrc}
          alt={title}
        />
        <div className="p-4 text-center">
          <h2 className="text-base font-bold mt-3 mb-1">{title}</h2>
          <p className="text-gray-700 text-sm font-semibold mb-3">{role}</p>
          <p className="text-gray-700 text-sm">{email}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Team</h2>
      <div className="mt-10 grid grid-cols-4 gap-8">
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
        <Card
          imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Professional Man"
          role="Admin"
          email="professionalman@gmail.com"
        />
      </div>
    </div>
  );
};

export default AllTeamPage;
