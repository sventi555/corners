import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from './cube.module.css';

export default function Cube({ title, href, filepath, transition }) {
  return (
    <div>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ...transition }}>
        <Link href={ href }><motion.img whileHover={{ scale: 1.05 }} src={ filepath }></motion.img></Link>
      </motion.div>
      <p className={ styles.caption }>{ title }</p>
    </div>
  );
}
