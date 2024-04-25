import axios from 'axios';
import { useRouter } from 'next/router';

export default function useAuth() {
    const onLogin = async (url: any, option: any) => {
        try {
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
            return resp;
        } catch (error: any) {
            console.log(error.response.data.message);
        }
    };

    const onLogout = async (url: any, callback: any) => {
        try {
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
        } catch (error) {
            console.log(error);
        }
    };
    return { onLogin, onLogout };
}
