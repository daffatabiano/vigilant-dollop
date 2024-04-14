import AccordionItems from './elements/AccordionItems';

export default function AccordionFAQ() {
    return (
        <div className="accordion mx-5" id="accordionExample">
            <AccordionItems
                id="1"
                qa="What is To Ravel Find Freedom ?"
                answer="To Ravel Find Freedom is a platform that allows you to search for your dream vehicle."
            />
            <AccordionItems
                id="2"
                qa="What is To Ravel Find Freedom ?"
                answer="To Ravel Find Freedom is a platform that allows you to search for your dream vehicle."
            />
            <AccordionItems
                id="3"
                qa="What is To Ravel Find Freedom ?"
                answer="To Ravel Find Freedom is a platform that allows you to search for your dream vehicle."
            />
        </div>
    );
}
