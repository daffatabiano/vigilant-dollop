import axios from 'axios';

export default function usePost() {
    const post = async (url: any, body: any) => {
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
            return resp;
        } catch (err: any) {
            console.log(err?.response.data.message);
        }
    };
    return { post };
}
