import { showModal } from '@/redux/slice/modalShow';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

export default function usePost() {
    const dispatch = useDispatch();
    const router = useRouter();
    const post = async (url: string, body: any) => {
        try {
            await axios.post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                body,
                {
                    headers: {
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    },
                }
            );
            alert('Login Success');
            router.reload();

            // router.push('/menu');
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };
    return { post };
}
