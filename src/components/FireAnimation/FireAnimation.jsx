import styles from './FireAnimation.module.scss';

const FireAnimation = () => {
  return (
    <div className={styles.Fire}>
      {[...Array(50)].map((_, index) => {
        const animationDelay = `${Math.random() * 2}s`;
        const leftPosition = `calc((50% - 5px) * ${index / 50})`;

        return (
          <div
            key={index}
            className={styles.FireParticle}
            style={{ animationDelay, left: leftPosition }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireAnimation;