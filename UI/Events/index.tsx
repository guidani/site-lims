import EventCard from '@/components/EventCard';
import styles from './Events.module.css'
export default function Events() {
  return (
    <section id="eventos">
      <div className="container mx-auto">
        <h2 className="title_h2 mb-4">Eventos</h2>
        <div className={styles.cardsContainer}>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
        <div className={styles.sectionFooter}>
          <a href="#" className="">
            <span>Descubra mais projetos</span>
          </a>
        </div>
      </div>
    </section>
  );
}
