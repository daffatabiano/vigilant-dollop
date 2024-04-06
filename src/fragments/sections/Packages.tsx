import Card from '@/components/Card';
import SupportingFacilites from '@/components/SupportingFacilities';
import Button from '@/components/elements/Button/Button';
import ButtonGroup from '@/components/elements/Button/GroupButton';
import CardBody from '@/components/elements/CardBody';
import CardHead from '@/components/elements/CardHead';
import PriceCard from '@/components/elements/PriceCard';
import home from '@/styles/home.module.css';
export default function Packages() {
    return (
        <article>
            <SupportingFacilites
                title="Explore Package's"
                desc="Choose the plan that fits your adventure needs."
            />
            <ButtonGroup b1="Monthly" b2="Yearly" />
            <article className={`${home['section-icons-p']}`}>
                <Card>
                    <header>
                        <CardHead
                            textbutton="Starter"
                            desc="Ideal for solo travellers"
                        >
                            <PriceCard price1="$8" price2="$29/month" />
                        </CardHead>
                    </header>
                    <article>
                        <CardBody txt="10 Trip" />
                        <CardBody txt="Basic Support" />
                        <CardBody txt="2GB Storage" />
                        <CardBody txt="Travel Guides" />
                        <CardBody txt="Discount Vouchers" />
                        <CardBody txt="Mobile Access" />
                    </article>
                    <footer>
                        <button className="btn w-100 btn-primary mt-5">
                            Join
                        </button>
                    </footer>
                </Card>
                <Card>
                    <CardHead
                        textbutton="Explorer"
                        desc="Perfect for travel buddies"
                    >
                        <PriceCard price1="$16" price2="$59/month" />
                    </CardHead>
                    <CardBody txt="30 Trips" />
                    <CardBody txt="Prority Support" />
                    <CardBody txt="10 GB Storage" />
                    <CardBody txt="Interactive Maps" />
                    <CardBody txt="Travel Insurance" />
                    <CardBody txt="Global Wi-Fi" />
                    <CardBody txt="Event Access" />
                    <button className="btn w-100 btn-primary mt-5">Join</button>
                </Card>
                <Card>
                    <CardHead
                        textbutton="Globetrotter"
                        desc="Tailored for travel groups"
                    >
                        <PriceCard
                            price1="Contact Us"
                            price2="to make a deal"
                        />
                    </CardHead>
                    <CardBody txt="Unlimited Trips" />
                    <CardBody txt="24/7 Support" />
                    <CardBody txt="100 GB Storage" />
                    <CardBody txt="Custom Itineraries" />
                    <CardBody txt="VIP Perks" />
                    <CardBody txt="Private Transport" />
                    <CardBody txt="Luxury Stays" />
                    <CardBody txt="Exclusive Deals" />
                    <button className="btn w-100 btn-primary mt-5">Join</button>
                </Card>
            </article>
        </article>
    );
}
