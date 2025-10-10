import { NextResponse } from "next/server";
import { getDb } from "@/libs/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    body.userid = 1;
    const db = await getDb();

    await db
      .collection("users")
      .updateOne({ userid: 1 }, { $set: body }, { upsert: true });

    return NextResponse.json(body);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 },
    );
  }
}
