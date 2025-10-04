import { useState } from "react";
import Image from "next/image";
import image_1 from "@/assets/images/anime_pfp.jpg";

type Props = {
  initialName: string;
  initialEmail: string;
  initialInterests: string;
  onUpdate: (data: { name: string; email: string; interests: string }) => void;
};

export default function ProfileEdit({
  initialName,
  initialEmail,
  initialInterests,
  onUpdate,
}: Props) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [interests, setInterests] = useState(initialInterests);

  async function handleUpdate() {
    const res = await fetch("/api/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, interests }),
    });

    const updatedUser = await res.json();
    onUpdate(updatedUser);
  }

  return (
    <div className="container mx-auto w-4/5 mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit profile</h1>
      <Image
        src={image_1}
        alt="user-profile"
        className="w-80 h-72 mb-4 rounded-md shadow"
      />

      <div className="mb-2">
        <label className="font-semibold">Name: </label>
        <input
          className="border rounded-md p-2 ml-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <hr className="m-96 my-3" />

      <div className="mb-2">
        <label className="font-semibold">Email: </label>
        <input
          className="border rounded-md p-2 ml-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <hr className="m-96 my-3" />

      <div className="mb-2">
        <label className="font-semibold">Interests: </label>
        <input
          className="border rounded-md p-2 ml-2"
          type="text"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </div>
      <hr className="m-96 my-3" />

      <button
        onClick={handleUpdate}
        className="w-40 h-12 bg-green-500 hover:bg-green-600 text-white rounded-md mt-4"
      >
        Update Profile
      </button>
    </div>
  );
}
