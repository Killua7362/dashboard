import { authMiddleware, clerkClient, redirectToSignIn } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import clerk from '@clerk/clerk-sdk-node';
import axios from 'axios'

export default authMiddleware({
  async afterAuth(auth, req, evt) {
      // not logged in 
      if(auth.sessionClaims === null){
            return redirectToSignIn({ returnBackUrl: req.url });
      }
      // not authorized
      const user = await clerkClient.users.getUser(auth.userId)
      const email = user.emailAddresses[0].emailAddress
      if(email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL){
            await clerkClient.sessions.revokeSession(auth.sessionClaims.sid);
            return redirectToSignIn({ returnBackUrl: req.url });
      }
  }
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 