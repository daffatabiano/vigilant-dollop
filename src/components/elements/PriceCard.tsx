import home from '@/styles/home.module.css';
export default function PriceCard({ price1, price2 }: any) {
    return (
        <>
            <p className="text-secondary ">
                <span className={`me-1 ${home['section-header']}`}>
                    {price1}
                </span>
                {price2}
            </p>
        </>
    );
}
