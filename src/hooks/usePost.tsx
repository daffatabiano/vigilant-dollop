import { setCredential } from '@/redux/slice/authSlice';
import { showModal } from '@/redux/slice/modalShow';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function usePost() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const post = async (url: string, options: any, headers: any) => {
        try {
            setIsLoading(true);
            await axios.post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                options,
                headers
            );
            setIsLoading(false);
            alert('Login Success');
            router.push('/');
            // router.push('/menu');
        } catch (error: any) {
            setIsLoading(false);
            alert('error');
        }
    };
    return { post, isLoading };
}
