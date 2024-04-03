import Header from '../../components/elements/Header';
import Icons from '../../components/elements/SvgIcons';
import home from '@/styles/home.module.css';

export default function PartnerSections() {
    return (
        <>
            <section className={home.section}>
                <Header
                    style={home['section-header']}
                    text="Trusted by Leading Travel Partners Worldwide"
                />
                <div className={home['section-icons']}>
                    <Icons.MasterCard style={home['section-icon']} />
                    <Icons.ApplePay style={home['section-icon']} />
                    <Icons.VisaCard style={home['section-icon']} />
                    <Icons.GooglePay style={home['section-icon']} />
                    <Icons.Paypal style={home['section-icon']} />
                    <Icons.Amazon style={home['section-icon']} />
                </div>
                <Header
                    style={home['section-header']}
                    text="Also with Local Travel Partners "
                />
                <div className={home['section-icons']}>
                    <Icons.ShopeePay style={home['section-icon']} />
                    <Icons.Tokopedia style={home['section-icon']} />
                    <Icons.Lazada style={home['section-icon']} />
                    <Icons.Tiktok style={home['section-icon']} />
                    <Icons.OVO style={home['section-icon']} />
                    <Icons.BCA style={home['section-icon']} />
                </div>
            </section>
        </>
    );
}
