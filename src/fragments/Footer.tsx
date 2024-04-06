import List from '@/components/elements/List';
import home from '@/styles/home.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <section>
            <hr className="border-secondary border-2 my-5 mx-2" />
            <div className={`${home['footer']}`}>
                <div>
                    <List text="Fitur" style="text-secondary" />
                    <List text="Paket Wisata" style="text-black" />
                    <List text="Pemesanan Tiket" style="text-black" />
                    <List text="Asuransi Perjalanan" style="text-black" />
                    <List text="Panduan Wisata" style="text-black" />
                    <List text="Bantuan 24/7" style="text-black" />
                </div>
                <div>
                    <List text="Produk" style="text-secondary" />
                    <List text="Domestik" style="text-black" />
                    <List text="Internasional" style="text-black" />
                    <List text="Kuliner" style="text-black" />
                    <List text="Petualangan" style="text-black" />
                    <List text="Keluarga" style="text-black" />
                </div>
                <div>
                    <List text="Tentang" style="text-secondary" />
                    <List text="Kisah Kami" style="text-black" />
                    <List text="Karir" style="text-black" />
                    <List text="Media" style="text-black" />
                    <List text="Sustainability" style="text-black" />
                    <List text="FAQ" style="text-black" />
                </div>
                <div>
                    <List text="Social" style="text-secondary" />
                    <List text="Facebook" style="text-black" />
                    <List text="Instagram" style="text-black" />
                    <List text="Twitter" style="text-black" />
                    <List text="Youtube" style="text-black" />
                    <List text="LinkedIn" style="text-black" />
                </div>
            </div>
            <footer className="flex items-center mt-1">
                <img src="/images/logo-travel.png" alt="" className="w-20" />
                <div className="lh-base">
                    <h1 className="font-bold text-black">
                        TO RAVEL FIND FREEDOM
                    </h1>
                    <p className="text-secondary">
                        &copy; {year} Daffa Tabiano. All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    );
}
