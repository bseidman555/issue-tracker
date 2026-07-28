import { default as nextAuthMiddleware } from 'next-auth/middleware';

export function proxy(req: any) {
    return nextAuthMiddleware(req);
}

export const config = {
    matcher: [
        '/issues/new',
        '/issues/edit/:id+'
    ]
};