import { NextResponse } from "next/server";
import { getDb } from "@/libs/mongodb";

export async function GET() {
  try {
    const db = await getDb();
    const user = await db.collection("users").findOne({ userid: 1 });

    return NextResponse.json(user || {});
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 },
    );
  }
}
