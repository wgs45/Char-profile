"use client";

import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import { useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  interests: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("/api/get-profile");
      const data = await res.json();
      setUser(data);
    }
    fetchUser();
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return isEditing ? (
    <ProfileEdit
      initialName={user.name}
      initialEmail={user.email}
      initialInterests={user.interests}
      onUpdate={(updatedUser) => {
        setUser(updatedUser);
        setIsEditing(false);
      }}
    />
  ) : (
    <ProfileView
      name={user.name}
      email={user.email}
      interests={user.interests}
      onEdit={() => setIsEditing(true)}
    />
  );
}
