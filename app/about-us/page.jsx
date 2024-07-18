import styles from '../../styles/about.module.css';
import Link from 'next/link';

const Route = ['apple', 'banana', 'strawberry'];

export default function AboutUs() {
    return (
        <div className={styles.about}>
            <h1>About us ! </h1>
            {Route.map((route, idx) => (
                <li key={idx}>
                    <Link href={`/${route}`} prefetch={false}>
                        {route}
                    </Link>
                </li>
            ))}
        </div>
    );
}
