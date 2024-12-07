// app/sign-in/page.tsx
'use client';

import { useAuth, RedirectToSignIn } from '@clerk/nextjs';
import { SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      // Redirect to the protected page if already signed in
      router.push('/protected');
    }
  }, [isSignedIn, router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <SignIn redirectUrl="/protected" />
    </div>
  );
}
