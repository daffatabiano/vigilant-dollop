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
            console.log(error?.response?.data?.message);
        }
    };

    return { data, getData };
}
