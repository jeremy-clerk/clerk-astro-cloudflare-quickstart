import {clerkMiddleware, createRouteMatcher} from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"])

export const onRequest = clerkMiddleware((auth, context, next) => {
    const {redirectToSignIn, userId} = auth();

    if(!userId && isProtectedRoute(context.request)){
        return redirectToSignIn()
    }

    return next()

});
