import FillCardContent from './FillCardContent';

export default function CardBody({ txt }: any) {
    return (
        <div className="pt-4">
            <FillCardContent txt={txt} />
        </div>
    );
}
