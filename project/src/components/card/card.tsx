import {OfferType} from '../../types/offers';
import {AppRoute} from '../../constants';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {generatePath } from 'react-router';
import {getCurrentPoint} from '../../store/offers-data/offers-data';

type CardProps = {
  card: OfferType;
  pageType: string;
};

function CardScreen(props:CardProps): JSX.Element {
  const {card, pageType} = props;
  const dispatch = useAppDispatch();

  const [settingPage, setSettingPage] = useState({
    widthImg: '260',
    heightImg: '200',
    className: ''
  });

  useEffect(() => {
    switch (pageType) {
      case AppRoute.Main:
        setSettingPage({
          widthImg: '260',
          heightImg: '200',
          className: 'cities'
        });
        break;
      case AppRoute.Favorites:
        setSettingPage({
          widthImg: '150',
          heightImg: '110',
          className: 'favorites'
        });
        break;
      case AppRoute.Property:
        setSettingPage({
          widthImg: '260',
          heightImg: '200',
          className: 'near-places'
        });
        break;
    }}, [pageType]);


  return (
    <article
      className={`${settingPage.className}__card place-card`}
      onMouseEnter={() => dispatch(getCurrentPoint({offer: card, isAction:true}))}
      onMouseLeave={() => dispatch(getCurrentPoint({offer: card, isAction: false}))}
    >
      {card.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : '' }
      <div
        className={`${settingPage.className}__image-wrapper place-card__image-wrapper`}
      >
        <a href="/">
          <img className="place-card__image" src={card.previewImage} width={settingPage.widthImg} height={settingPage.heightImg} alt="Place" />
        </a>
      </div>
      <div className={`${settingPage.className === 'favorites' ? 'favorites__card-info ' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${card.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon " width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {`${settingPage.className === 'near-places' ? 'In' : 'To'} bookmarks`}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * Math.round(card.rating)}%`}}></span>
            <span className="visually-hidden">{card.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={generatePath(`${AppRoute.Property}/:id`, { id: card.id.toString()})}
            onClick={() => dispatch(getCurrentPoint({offer: card, isAction:false}))}
          >{card.title}
          </Link>
        </h2>
        <p className="place-card__type">{card.typeOffer}</p>
      </div>
    </article>
  );
}

export default CardScreen;
