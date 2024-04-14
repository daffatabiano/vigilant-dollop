import SupportingFacilites from '@/components/SupportingFacilities';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { useState } from 'react';

export default function FAQ() {
    const [selectedKey, setSelectedKey] = useState(new Set(['1']));
    return (
        <section className="mt-6 p-3 bg-secondary">
            <SupportingFacilites
                title="Travel Freedom FAQs"
                desc="Frequently Asked Questions about To Ravel Find Freedom"
            />
            <Accordion>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Accordion 1"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus at eveniet optio architecto necessitatibus! Deserunt
                    voluptatum hic voluptates culpa, reprehenderit quisquam in
                    ipsam facere aliquid iusto inventore iste numquam molestias.
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Accordion 2"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores veniam iste impedit repellendus! Tempore placeat
                    earum molestias quam. Natus distinctio nostrum totam ipsum
                    provident eveniet nemo nobis quibusdam magnam aliquam.
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Accordion 3"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus explicabo nemo consequuntur eaque autem perspiciatis.
                    Inventore voluptates rem totam ipsam atque officia, possimus
                    fugiat repellendus ducimus vitae neque quibusdam dolores.
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="Accordion 4"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus explicabo nemo consequuntur eaque autem perspiciatis.
                    Inventore voluptates rem totam ipsam atque officia, possimus
                    fugiat repellendus ducimus vitae neque quibusdam dolores.
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label="Accordion 5"
                    title="Accordion 5"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus explicabo nemo consequuntur eaque autem perspiciatis.
                    Inventore voluptates rem totam ipsam atque officia, possimus
                    fugiat repellendus ducimus vitae neque quibusdam dolores.
                </AccordionItem>
            </Accordion>
        </section>
    );
}
