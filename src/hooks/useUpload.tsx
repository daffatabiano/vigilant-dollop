import axios from 'axios';
import { useState } from 'react';

export default function useUpload() {
    const [loading, setLoading] = useState<any>(false);
    const upload = async (url: any, body: any) => {
        try {
            setLoading(true);
            const res = await axios.post(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
                body,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            );
            setLoading(false);
            return res;
        } catch (err: any) {
            console.log(err?.response?.data?.message);
            setLoading(false);
        }
    };
    return { upload, loading };
}
