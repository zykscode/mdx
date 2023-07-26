import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
        username: { label: 'Username', type: 'text', placeholder: 'John Doe' },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          password: 'etc',
          name: 'James',
          email: 'felsal@yahoo.com',
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
    // EmailProvider({
    //   from: env.SMTP_FROM,
    //   sendVerificationRequest: async ({ identifier, url, provider }) => {
    //     const user = await db.user.findUnique({
    //       where: {
    //         email: identifier,
    //       },
    //       select: {
    //         emailVerified: true,
    //       },
    //     })

    //     const templateId = user?.emailVerified
    //       ? env.POSTMARK_SIGN_IN_TEMPLATE
    //       : env.POSTMARK_ACTIVATION_TEMPLATE
    //     if (!templateId) {
    //       throw new Error("Missing template id")
    //     }

    //     const result = await postmarkClient.sendEmailWithTemplate({
    //       TemplateId: parseInt(templateId),
    //       To: identifier,
    //       From: provider.from as string,
    //       TemplateModel: {
    //         action_url: url,
    //         product_name: siteConfig.name,
    //       },
    //       Headers: [
    //         {
    //           // Set this to prevent Gmail from threading emails.
    //           // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
    //           Name: "X-Entity-Ref-ID",
    //           Value: new Date().getTime() + "",
    //         },
    //       ],
    //     })

    //     if (result.ErrorCode) {
    //       throw new Error(result.Message)
    //     }
    //   },
    // }),
  ],
  debug: process.env.NODE_ENV === 'development',
};
