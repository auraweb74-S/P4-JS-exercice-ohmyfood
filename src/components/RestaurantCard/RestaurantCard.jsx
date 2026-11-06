"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ restaurant }) {

const {
  name,
  location,
  image,
  isNew,
} = restaurant;

const [isLiked, setIsLiked] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageCardRestaurant}>
        <Image
          src={image}
          alt={`Plat servi au restaurant ${name}`}
          fill
          sizes="(max-width: 768px) calc(100vw - 32px), 490px"
          className={styles.restaurantImage}
        />
        {isNew &&(
        <span className={styles.badgeNew}>Nouveau</span>
        )}
      </div>


      <div className={styles.contentCardRestaurant}>
        <div className={styles.restaurantInformations}>
            <h3 className={styles.restaurantTitle}>
            {name}
            </h3>

            <p className={styles.restaurantLocation}>
            {location}
            </p>
        </div>

            <button
            type="button"
            className={styles.favoriteButton}
            onClick={() => setIsLiked((currentValue) => !currentValue)}
            aria-label={
                isLiked
                ? `Retirer ${name} des favoris`
                : `Ajouter ${name} aux favoris`
            }
            aria-pressed={isLiked}
            >
            <span
                aria-hidden="true"
                className={isLiked ? styles.liked : undefined}
            >
                {isLiked ? "♥" : "♡"}
            </span>
            </button>
      </div>
    </article>
  );
}