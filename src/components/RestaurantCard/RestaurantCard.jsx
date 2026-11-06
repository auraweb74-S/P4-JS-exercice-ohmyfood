import Image from "next/image";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard() {
  return (
    <article className={styles.card}>
      <div className={styles.imageCardRestaurant}>
        <Image
          src="/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
          alt="Plat servi au restaurant La palette du goût"
          fill
          sizes="(max-width: 768px) calc(100vw - 32px), 490px"
          className={styles.restaurantImage}
        />

        <span className={styles.badgeNew}>Nouveau</span>
      </div>

      <div className={styles.contentCardRestaurant}>
        <div className={styles.restaurantInformations}>
          <h3 className={styles.restaurantTitle}>
            La palette du goût
          </h3>

          <p className={styles.restaurantLocation}>
            Ménilmontant
          </p>
        </div>

        <button
          type="button"
          className={styles.favoriteButton}
          aria-label="Ajouter La palette du goût aux favoris"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={styles.heartIcon}
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
    </article>
  );
}