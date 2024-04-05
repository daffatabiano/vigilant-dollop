import home from '@/styles/home.module.css';
export default function AccordionItems({ qa, answer, id }: any) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="true"
                    aria-controls={id}
                >
                    {qa}
                </button>
            </h2>
            <div
                id={id}
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body text-gray-500">{answer}</div>
            </div>
        </div>
    );
}
