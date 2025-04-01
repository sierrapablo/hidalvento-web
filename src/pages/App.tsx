import { Navbar } from '../components/molecules/Navbar';
import { Footer } from '../components/molecules/Footer';
import { tv } from 'tailwind-variants';

const appcontainer = tv({
  base: ""
});

export const App = () => {
  return (
    <div className={appcontainer()}>
      <Navbar />
      <h1>HIDALVENTO REFORMAS</h1>
      <Footer />
    </div>
  );
};
