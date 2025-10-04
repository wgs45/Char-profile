import Image from "next/image";
import image_1 from "@/assets/images/anime_pfp.jpg";

type Props = {
  name: string;
  email: string;
  interests: string;
  onEdit: () => void;
};

export default function ProfileView({ name, email, interests, onEdit }: Props) {
  return (
    <>
      <div className="container mx-auto w-4/5 mt-10">
        <h1 className="text-2xl font-bold mb-4">User profile</h1>
        <Image
          src={image_1}
          alt="user-profile"
          className="w-80 h-72 mb-4 rounded-md shadow"
        />

        <div className="mb-2">
          <span className="font-semibold">Name: </span>
          <span>{name}</span>
        </div>
        <hr className="w-96 my-3" />

        <div className="mb-2">
          <span className="font-semibold">Email: </span>
          <span>{email}</span>
        </div>
        <hr className="w-96 my-3" />

        <div className="mb-2">
          <span className="font-semibold">Interests: </span>
          <span>{interests}</span>
        </div>
        <hr className="w-96 my-3" />

        <button
          onClick={onEdit}
          className="w-40 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4"
        >
          Edit Profile
        </button>
      </div>
    </>
  );
}
