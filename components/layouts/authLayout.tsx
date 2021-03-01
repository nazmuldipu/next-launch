import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/Auth.module.css';

export default function AuthLayout({ children, name }) {
    return (
        <div className={styles.outerBox}>
            <div className="container">
                <div className="row">
                    <div className="offset-md-1"></div>
                    <div className="col-md-10">
                        <div className="row bg-hotelswave">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="offset-md-2 col-md-8 p-3 pt-5">
                                        <Link href="/">
                                            <a>
                                                <Image
                                                    className="clickable"
                                                    src="/images/logo.png"
                                                    width={290}
                                                    height={110}
                                                />
                                            </a>
                                        </Link>
                                        <div className="row">
                                            <div className="col-3 p-0">
                                                <a target="_blank" href="https://www.hotelswave.com/hotels" className={styles.companyLink}>HOTEL</a>
                                            </div>
                                            <div className="col-3 p-0">
                                                <a target="_blank" href="https://www.hotelswave.com/flight" className={styles.companyLink}>FLIGHT</a>
                                            </div>
                                            <div className="col-3 p-0">
                                                <a target="_blank" href="https://www.hotelswave.com/ships" className={styles.companyLink}>SHIPS</a>
                                            </div>
                                            <div className="col-3 p-0">
                                                <a target="_blank" href="https://www.hotelswave.com/address" className={styles.companyLink}>CONTACT</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 bg-light">
                                <div className="bg-light pb-3">
                                    <div className="d-flex">
                                        <Link href="/login">
                                            <a className={'btn flex-fill ' + styles.btnTop + ' ' + (name === 'login' ? styles.active : '')}>Sign in</a>
                                        </Link>
                                        <Link href="/register">
                                            <a className={'btn flex-fill ' + styles.btnTop + ' ' + (name === 'register' ? styles.active : '')}>Register</a>
                                        </Link>
                                    </div>

                                    {/* Children insertion here */}
                                    <main>{children}</main>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>);
}