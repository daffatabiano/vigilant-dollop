import { Accordion, AccordionItem } from '@nextui-org/react';
import { useState } from 'react';
import SupportingFacilites from 'src/components/SupportingFacilities';

export default function FAQ() {
    const [selectedKey, setSelectedKey] = useState(new Set(['1']));
    return (
        <section className="mt-6 p-3 bg-primary">
            <SupportingFacilites
                title="Travel Freedom FAQs"
                desc="Frequently Asked Questions about To Ravel Find Freedom"
            />
            <Accordion>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Apa itu To Ravel Find Freedom?"
                >
                    TRFF (To Ravel Find Freedom) is the right solutions to rest
                    your mind and make comfort your brain with best facility and
                    of course with best your vehicle’s dreams choice!
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Bagaimana cara kerja animasi kendaraan?"
                >
                    Animasi kendaraan kami didesain secara interaktif untuk
                    memberikan visualisasi perjalanan yang dinamis dan
                    menghibur, mencakup semua jenis kendaraan terkini.
                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Apa saja fitur unik yang ditawarkan?"
                >
                    Kami menawarkan pencarian destinasi yang dipersonalisasi,
                    pemesanan mudah, dan rekomendasi perjalanan yang disesuaikan
                    dengan preferensi Anda, semuanya disajikan dengan animasi
                    yang menawan.
                </AccordionItem>
                <AccordionItem
                    key="4"
                    aria-label="Accordion 4"
                    title="Apakah platform ini mudah digunakan?"
                >
                    Ya, To Ravel Find Freedom didesain untuk kenyamanan
                    pengguna, dengan navigasi yang intuitif dan proses pemesanan
                    yang cepat dan aman.
                </AccordionItem>
                <AccordionItem
                    key="5"
                    aria-label="Accordion 5"
                    title="Bagaimana saya bisa mendapatkan bantuan?"
                >
                    Tim dukungan pelanggan kami siap membantu Anda 24/7 dengan
                    pertanyaan atau masalah yang mungkin Anda miliki selama
                    menggunakan platform kami.
                </AccordionItem>
            </Accordion>
        </section>
    );
}
