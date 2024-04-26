import axios from 'axios';
import { useState } from 'react';

export default function useGet() {
    const [loading, setLoading] = useState<any>(false);
    const getData = async (data: any) => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${data}`,
                {
                    headers: {
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    },
                }
            );
            setLoading(false);
            return response;
        } catch (error: any) {
            console.log(error?.response?.data?.message);
        }
    };

    const getDataUser = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user',
                {
                    headers: {
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

    return { getData, getDataUser, loading };
}
