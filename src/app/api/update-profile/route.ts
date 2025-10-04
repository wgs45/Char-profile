import { NextResponse } from "next/server";

let user: any = {
  name: "Anna Smith",
  email: "anna.smith@example.com",
  interests: "coding",
};

export async function POST(req: Request) {
  const body = await req.json();
  user = { ...user, ...body }; // update fields
  return NextResponse.json(user);
}
