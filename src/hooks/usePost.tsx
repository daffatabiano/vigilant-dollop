import axios from 'axios';
import { useState } from 'react';

export default function usePost() {
    const [loading, setLoading] = useState<any>(false);
    const post = async (url: any, body: any) => {
        setLoading(true);
        try {
            const resp = await axios.post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                body,
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
            setLoading(false);
            return resp;
        } catch (err: any) {
            console.log(err?.response.data.message);
            setLoading(false);
        }
    };
    return { post, loading };
}
