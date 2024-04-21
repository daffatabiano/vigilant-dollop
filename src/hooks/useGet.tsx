import axios from 'axios';

export default function useGet() {
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
            // setData(response.data.data);
            return response;
        } catch (error: any) {
            console.log(error?.response?.data?.message);
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
            return res;
        } catch (err: any) {
            console.log(err?.response?.data?.message);
        }
    };

    return { getData, getDataUser };
}
