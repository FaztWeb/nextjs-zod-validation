import { NextResponse } from "next/server";
import { signupSchema } from "@/schemas/auth.schema";

export async function POST(request) {
  const body = await request.json();
  console.log(body);

  const result = signupSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error);
  }

//   guarda datos en la base de datos

  return NextResponse.json(result.data);
}
