import styles from "./PageDescription.module.css";

export default function PageDescription({ title, subtitle, description }) {
  return (
    <div className={styles.PageDescription}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className={styles.Divider}></div>
      <span>{description}</span>
    </div>
  );
}
