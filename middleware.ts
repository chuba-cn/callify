import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
]);
 
export default clerkMiddleware((auth, req) => {
    if(protectedRoutes(req)) {auth().protect()} //checks if the current request is going to the protected route, if yes, it will redirect to the login page
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};