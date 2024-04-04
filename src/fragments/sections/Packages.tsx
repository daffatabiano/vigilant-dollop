import SupportingFacilites from '@/components/SupportingFacilities';
import ButtonGroup from '@/components/elements/Button/GroupButton';
import Card from './CardHome';
export default function Packages() {
    return (
        <>
            <SupportingFacilites
                title="Explore Package's"
                desc="Choose the plan that fits your adventure needs."
            />
            <ButtonGroup b1="Monthly" b2="Yearly" />
                <Card/>
        </>
    );
}
