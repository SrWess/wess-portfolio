import Image from 'next/image';
import ExperienceList from '../../molecules/ExperienceList';
import FloatingSocial from '../../molecules/FloatingSocial';
import HeroText from '../../molecules/HeroText';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <HeroText />
        <ExperienceList />
      </div>

      <FloatingSocial
        linkToAction="/"
        callToAction="Acesse meu GitHub"
        imageSrc="/assets/icons/github-icon.svg"
      />
      <FloatingSocial
        linkToAction="/"
        callToAction="Entre em contato pelo e-mail"
        imageSrc="/assets/icons/gmail-icon.svg"
      />
      <FloatingSocial
        linkToAction="/"
        callToAction="Conecte-se ao meu LinkedIn"
        imageSrc="/assets/icons/linkedin-icon.svg"
      />

      <a href="#sobre" className="hero__scroll">
        <Image
          alt="Rolar para baixo"
          src="/assets/icons/scroll-down.svg"
          width="40"
          height="40"
        />
      </a>
    </section>
  );
}
