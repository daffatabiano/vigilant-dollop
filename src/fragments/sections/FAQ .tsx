import SupportingFacilites from '@/components/SupportingFacilities';
import AccordionFAQ from '@/components/Accordion';

export default function FAQ() {
    return (
        <section className="mt-5">
            <SupportingFacilites
                title="Travel Freedom FAQs"
                desc="Frequently Asked Questions about To Ravel Find Freedom"
            />
            <AccordionFAQ />
        </section>
    );
}
