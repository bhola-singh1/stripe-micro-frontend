
import Image from 'next/image'
import styles from '../styles/Mario.module.css'
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutform';

// const stripePromise = loadStripe('pk_test_51NdtKMSD3RNOdc9sUBe5omnDOEngAI5hOXb0OX3ZQ2IPofVB5klAZvDEMqSoj3zBeCpXO2NnYzmlWmCDSGKoJ5bY00cluk4gh3');

// const options = {
//   mode: 'payment',
//   amount: 1099,
//   currency: 'usd',
//   // Fully customizable with appearance API.
//   appearance: {
//     theme: 'stripe',
//   },
// };

const Mario = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        G'day! I'm Mario, a microfrontend.
      </h1>
      {/* <Elements stripe={stripePromise} options={options}> */}
        <CheckoutForm />
      {/* </Elements> */}
      {/* <Image
        src="https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png"
        alt="Mario"
        width={240}
        height={413}
      /> */}
    </main>
  )
}

export default Mario
