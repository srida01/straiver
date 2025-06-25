import { SignOutButton, SignUpButton } from '@clerk/clerk-react'
const Fall_URL=import.meta.env.VITE_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
const SignUpPageButton = () => {
     return ( <SignUpButton mode="modal" fallbackRedirectUrl={Fall_URL} signInFallbackRedirectUrl={Fall_URL}/>

     );

}
const SignOUTPageButton = () => {
     return ( <SignOutButton />

     );

};


export default SignUpPageButton;
export {SignOUTPageButton}