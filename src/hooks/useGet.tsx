import axios from 'axios';
import { useRouter } from 'next/router';
import { resolve } from 'path';

export default function useGet() {
    const router = useRouter();
    const get = async (url: string) => {
        try {
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k',
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    },
                }
            );
            router.push('/login');
            router.reload();
            resolve();
            alert('logout success');
            return response.data;
        } catch (error: any) {
            alert(error?.response?.data?.message);
        }
    };
    return { get };
}
