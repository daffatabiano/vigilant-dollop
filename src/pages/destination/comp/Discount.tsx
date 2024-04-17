export async function getServerSideProps() {
    const res = await fetch(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos',
        {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            },
        }
    );
    const data = await res.json();
    console.log(data.data);
    return {
        props: data.data,
    };
}
export default function Discount(props: { data: any }) {
    const { data } = props;
    return (
        <>
            {data.map((item: any) => (
                <div key={item.id}></div>
            ))}
        </>
    );
}
