import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShow } from 'src/redux/slice/cardShow';

export default function useDelete() {
    const [loading, setLoading] =useState<any>(false);
    const dispatch = useDispatch();
    const deleteData = async (url: any, options: any) => {
        try {
            setLoading(true);
            const resp = await axios.delete(
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
            setLoading(false);
            dispatch(setShow());
            return resp;
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return { deleteData, loading };
}
