import { setToast } from '../redux/slice/toastShow';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useAuth() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const onLogin = async (url: any, options: any, headers: any) => {
        try {
            setIsLoading(true);
            const resp = await axios.post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                options,
                headers
            );
            localStorage.setItem('token', resp.data.token);
            setIsLoading(false);
            dispatch(
                setToast({ message: 'Login successful!', type: 'success' })
            );
            router.push('/');
        } catch (error) {
            setIsLoading(false);
            dispatch(setToast({ message: 'Login failed!', type: 'error' }));
        }
    };

    const onLogout = async (url: any, callback: any) => {
        try {
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                {
                    headers: {
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            );
            if (url === 'logout') {
                localStorage.removeItem('token');
                callback(response);
            } else if (url === 'user') {
                callback(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return { onLogin, onLogout, isLoading };
}
