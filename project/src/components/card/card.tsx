import {OfferType} from '../../types/offers';
import {AppRoute} from '../../constants';

type CardProps = {
  card: OfferType;
  onChangeCard: (cardId: number, sign: boolean) => void;
  pageType: string;
};

function CardScreen(props:CardProps): JSX.Element {
  const {card, onChangeCard, pageType} = props;
  let SettingPage = {
    widthImg: '260',
    heightImg: '200',
    addClassName: ''
  };
  switch (pageType) {
    case AppRoute.Main:
      SettingPage = {
        widthImg: '260',
        heightImg: '200',
        addClassName: ''
      };
      break;
    case AppRoute.Favorites:
      SettingPage = {
        widthImg: '150',
        heightImg: '110',
        addClassName: 'favorites'
      };
      break;
  }

  return (
    <article
      className={SettingPage.addClassName !== '' ? 'favorites__card place-card' : 'cities__card place-card'}
      onMouseEnter={() => {onChangeCard(card.id, true);}}
      onMouseLeave={() => {onChangeCard(0, false);}}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={SettingPage.addClassName !== '' ? 'favorites__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <a href="/">
          <img className="place-card__image" src={card.photo} width={SettingPage.widthImg} height={SettingPage.heightImg} alt="Place" />
        </a>
      </div>
      <div className={SettingPage.addClassName !== '' ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{card.price}&euro;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
            <span className="visually-hidden">{card.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{card.title}</a>
        </h2>
        <p className="place-card__type">{card.typeOffer}</p>
      </div>
    </article>
  );
}

export default CardScreen;
