import {OfferType} from '../../types/offers';
import {AppRoute} from '../../constants';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

type CardProps = {
  card: OfferType;
  onChangeCard: (cardId: number, sign: boolean) => void;
  pageType: string;
};

function CardScreen(props:CardProps): JSX.Element {
  const {card, onChangeCard, pageType} = props;
  const [settingPage, setSettingPage] = useState({
    widthImg: '260',
    heightImg: '200',
    addClassName: ''
  });

  useEffect(() => {
    switch (pageType) {
      case AppRoute.Main:
        setSettingPage({
          widthImg: '260',
          heightImg: '200',
          addClassName: ''
        });
        break;
      case AppRoute.Favorites:
        setSettingPage({
          widthImg: '150',
          heightImg: '110',
          addClassName: 'favorites'
        });
        break;
    }}, [pageType]);

  return (
    <article
      className={`${settingPage.addClassName ? 'favorites__card' : 'cities__card'} place-card`}
      onMouseEnter={() => {onChangeCard(card.id, true);}}
      onMouseLeave={() => {onChangeCard(-1, false);}}
    >
      {card.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : '' }
      <div
        className={`${settingPage.addClassName ? 'favorites__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}
      >
        <a href="/">
          <img className="place-card__image" src={card.previewImage} width={settingPage.widthImg} height={settingPage.heightImg} alt="Place" />
        </a>
      </div>
      <div className={`${settingPage.addClassName ? 'favorites__card-info ' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${card.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon " width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * Math.round(card.rating)}%`}}></span>
            <span className="visually-hidden">{card.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${card.id}`} style={{padding: 20}}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.typeOffer}</p>
      </div>
    </article>
  );
}

export default CardScreen;
