import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setShow } from 'src/redux/slice/cardShow';

export default function useDelete() {
    const dispatch = useDispatch();
    const deleteData = async (url: any, options: any) => {
        try {
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
            dispatch(setShow());
            return resp;
        } catch (error) {
            console.log(error);
        }
    };
    return { deleteData };
}
