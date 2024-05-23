import style from './Bienvenue.module.css';

const Bienvenue = ({ firstname, age }) => {
  const nextAge = age + 1

  return (
    <>
      <p className={style.bigbold}>Bienvenue {firstname} sur l'Application React</p>
      <p className={style.coloritalic}>Vous avez {age} ans.</p>
      <p>L'année prochaine, vous aurez {nextAge} ans.</p>
    </>
  );
};

export default Bienvenue;