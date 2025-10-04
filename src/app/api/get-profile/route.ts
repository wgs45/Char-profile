import { NextResponse } from "next/server";

let user: any = {
  name: "Nagomi",
  email: "nagomi_business@example.com",
  interests: "Cosplay",
};

export async function GET() {
  return NextResponse.json(user);
}
