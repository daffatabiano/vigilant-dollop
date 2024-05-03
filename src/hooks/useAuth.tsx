import axios from 'axios';
import { useState } from 'react';

export default function useAuth() {
    const [loading, setLoading] = useState<any>(false);
    const [prompt, setPrompt] = useState<any>('');
    const onLogin = async (url: any, option: any) => {
        try {
            setLoading(true);
            const resp = await axios.post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                option,
                {
                    headers: {
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                        'Content-Type': 'application/json',
                    },
                }
            );
            setLoading(false);
            return resp;
        } catch (error: any) {
            setPrompt(error.response.data.message);
            setLoading(false);
        }
    };

    const onLogout = async (url: any, callback: any) => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
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
            } else if (url === 'all-user') {
                callback(response.data.data);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return { onLogin, onLogout, loading, prompt };
}
