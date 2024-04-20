import axios from 'axios';
import { useState } from 'react';

export default function useGet() {
    const [data, setData] = useState<any>([]);
    const getData = async (data: any) => {
        try {
            const response = await axios.get(
                `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${data}`,
                {
                    headers: {
                        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    },
                }
            );
            setData(response.data.data);
        } catch (error: any) {
            setData(error?.response?.data?.message);
        }
    };

    const getDataUser = async () => {
        try {
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
            setData(res.data.data);
        } catch (err: any) {
            setData(err?.response?.data?.message);
        }
    };

    return { data, getData, getDataUser };
}
