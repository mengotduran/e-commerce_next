import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_section">
        <div className="section_1 gen">
          <h2>Nos adresses</h2>
          <h3>holistic hospital yaounde</h3>
          <p>odza messamedongo apres le commissariat</p>
          <h3>holistic hospital Douala</h3>
          <p>
            logpom : Entrée école papyrus jusqu au stade njoh. a cote de la
            paroisse catholique saint barthelemy
          </p>
          <p>bonamoussadi : centre commercial de sagnily espace g9</p>
          <h3>holistic hospital west region</h3>
          <p>Mbouda : Galim Par Bagam. Rue Du Marche</p>
        </div>
        <div className="section_2 gen">
          <h2>Information</h2>
          <div className="link_div gen">
            <Link href="#" className="links">Home</Link>
            <Link href="#" className="links">A propos</Link>
            <Link href="#" className="links">Nos Therapie</Link>
            <Link href="#" className="links">pathologie</Link>
            <Link href="#" className="links">Actualites</Link>
            <Link href="#" className="links">contact</Link>
            <Link href="#" className="links">Galerie</Link>
          </div>
          <button>boutique</button>
        </div>
        <div className="section_3 gen">
          <h2>nos contact</h2>
          <div className="contacts gen">
            <Link href="#" className="links">+237 677 76 01 19</Link>
            <Link href="#" className="links">+237 694 15 22 04</Link>
            <Link href="#" className="links">+237 695 16 29 29</Link>
            <Link href="#" className="links">+237 695 16 29 29</Link>
            <Link href="#" className="links">+237 675 89 89 74</Link>
          </div>
          <h2>ouverture</h2>
          <div className="days gen">
            <span>Samedi 8H -13H</span>
            <span>Lundi a vendredi 8H -18H</span>
            <span>Dumanche 8H -13H sur RDV</span>
          </div>
        </div>
        <div className="section_4 gen">
            <BsFacebook />
            <SlSocialInstagram />
            <ImWhatsapp />
        </div>
      </div>
    </footer>
  );
};
