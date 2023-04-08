import { ICardItem } from '../../types/interfaces';
import likeIcon from '../../assets/icons/heart.svg';
import viewIcon from '../../assets/icons/view.svg';
import crossIcon from '../../assets/icons/cross.svg';
import downloadIcon from '../../assets/icons/download.svg';
import styles from './FullCardItem.module.scss';

interface IFullCard {
  card: ICardItem,
  close: () => void,
}

const FullCardItem = ({ card, close }: IFullCard): JSX.Element => {
  const [date] = new Date(card.created_at).toISOString().split('T');

  return (
    <div className={styles.wrapper} onClick={close}>
      <div className={styles.card}>
        <div className={styles.card__photo}>
          <img src={card.urls.small} alt={card.alt_description} className={styles.card__photo_img}/>
        </div>
        <div className={styles.card__description}>
          <div className={styles.card__description_detailed}>{card.description}</div>
          <div>Created at:
            <span className={styles.card__description_detailed}> {date}</span>
          </div>
          <div>Description:
            <span className={styles.card__description_detailed}> {card.alt_description}</span>
          </div>
          {card.tags_preview && card.tags_preview.length ? (
            <div>Tags:
              {card.tags_preview && card.tags_preview.map((value) => (
                <span
                  className={styles.card__description_detailed}
                  key={value.title}> {value.title},
                </span>
              ))}
            </div>
          ) : (<></>)}
          <div>Photo from user:
            <span className={styles.card__description_detailed}> {card.user.username}</span>
          </div>
          <div className={styles.card__color}>
            <label>
              <span className={styles.card__color_description}>Color: </span>
              <span className={styles.card__description_detailed}>{card.color}</span>
            </label>
            <input type="color" value={card.color} className={styles.card__color_input} readOnly />
          </div>
          <div className={styles.card__icon_wrap}>
            <div className={styles.card__icon}>
              <img src={likeIcon} alt="like" className={styles.card__icon_like}/>
              <span className={styles.card__description_detailed}>{card.likes}</span>
            </div>
            <div className={styles.card__icon}>
              <img src={viewIcon} alt="view" className={styles.card__likes_view}/>
              <span className={styles.card__description_detailed}> {card.views}</span>
            </div>
            <div className={styles.card__icon}>
              <img src={downloadIcon} alt="downloads" className={styles.card__likes_view}/>
              <span className={styles.card__description_detailed}> {card.downloads}</span>
            </div>
          </div>
          <div onClick={close}>
            <img src={crossIcon} alt="view" onClick={close} className={styles.card__cross}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCardItem;
