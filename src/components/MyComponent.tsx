import styles from "./MyComponent.module.css";

function MyComponent() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Hey! We're using CSS modules!</h1>
    </section>
  );
}
export default MyComponent;
