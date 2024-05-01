// import { NextRequest, NextResponse } from 'next/server';

// export default function middleware(req: NextRequest) {
//     // let token = '';
//     if (typeof window === 'undefined') {
//         // const token = sessionStorage.getItem('token');
//         const token = req?.session?.get('token');
//         console.log(token, 'token');
//         // token += localStorage.getItem('token');
//         if (!token) {
//             return NextResponse.redirect(new URL('/auth/login', req.url));
//         }
//     } else {
//         return NextResponse.next();
//     }
// }
 
// export const config = {
//     matcher: [
//         '/profile/:path*',
//         '/Dashboard/:path*',
//         '/destination/Activity/:path*',
//         '/destination/DiscountPage/:path*',
//         '/destination/Categories/:path*',
//     ],
// };
