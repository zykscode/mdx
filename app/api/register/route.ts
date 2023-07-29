import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt'

import { db } from '#/lib/db';

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, email, password } = body;
  console.log('im the api herere', password, firstName, body);
  if (!email || !password) {
    return new NextResponse('Missi fields', { status: 400 });
  }

  const exist = await db.user.findUnique({
    where: {
      email,
    },
  });

  if(exist){
    throw new Error ('Email already exists')
  }
  const hashedPassword = await bcrypt.hash(password,10)

  const user = await db.user.create({
    data:{
      email,hashedPassword, name:firstName+ ' '+ lastName
    }
  })

  return NextResponse.json(user)
}
