import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import { db } from '#/lib/db';

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, password } = body;
  if (!email || !password) {
    return new NextResponse('Missing fields', { status: 400 });
  }

  const exist = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    return new NextResponse('Email already exists', { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      hashedPassword,
      name: `${firstName} ${lastName}`,
    },
  });

  return NextResponse.json(user);
}
