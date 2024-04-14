import home from '@/styles/home.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <section>
            <hr className="border-secondary border-2 my-5 mx-2" />
            <div className={`${home['footer']}`}>
                <div>
                    <ul>
                        <li className="text-dark-emphasis font-bold">Fitur</li>
                        <li className="text-dark">Paket Wisata</li>
                        <li className="text-dark">Pemesanan Tiket</li>
                        <li className="text-dark">Asuransi Perjalanan</li>
                        <li className="text-dark">Panduan Wisata</li>
                        <li className="text-dark">Bantuan 24/7</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-dark-emphasis font-bold">Produk</li>
                        <li className="text-dark">Domestik</li>
                        <li className="text-dark">Internasional</li>
                        <li className="text-dark">Kuliner</li>
                        <li className="text-dark">Petualangan </li>
                        <li className="text-dark">Keluarga</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-dark-emphasis font-bold">
                            Tentang
                        </li>
                        <li className="text-dark">Kisah Kami</li>
                        <li className="text-dark">Karir</li>
                        <li className="text-dark">Media</li>
                        <li className="text-dark">Sustainability</li>
                        <li className="text-dark">FAQ</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="text-dark-emphasis font-bold">Sosial</li>
                        <li className="text-dark">Facebook</li>
                        <li className="text-dark">Instagram</li>
                        <li className="text-dark">Twitter</li>
                        <li className="text-dark">Youtube</li>
                        <li className="text-dark">LinkedIn</li>
                    </ul>
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
