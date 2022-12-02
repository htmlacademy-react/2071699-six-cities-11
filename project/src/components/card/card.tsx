import {OfferType} from '../../types/offers';
import {AppRoute, AuthorizationStatus} from '../../constants';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {generatePath } from 'react-router';
import {getCurrentPoint} from '../../store/offers-data/offers-data';
import {sendFavorites} from '../../store/api-actions';
import {getFavorites} from '../../store/favotites-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type CardProps = {
  card: OfferType;
  pageType: string;
};

function CardScreen(props:CardProps): JSX.Element {
  const {card, pageType} = props;

  const dispatch = useAppDispatch();
  const offersFavorList = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [isFavorite, setIsFavorite] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentPoint({offer: card, isAction: false}));
  }, [card, dispatch]);


  useEffect(() => {
    if (offersFavorList && offersFavorList.length !== 0) {
      const cardIsFavorite = offersFavorList.filter((offer) => offer.id === card.id).length;
      setIsFavorite(cardIsFavorite !== 0);
    }
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      setIsFavorite(false);
    }
  }, [authorizationStatus, card.id, offersFavorList]);


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

  const handleIsFavotiteClick = () =>{
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const status = isFavorite ? 0 : 1;
      dispatch(sendFavorites({offer: card, status}));
      setIsFavorite(!isFavorite);
    }
    else {
      navigate(AppRoute.Login);
    }
  };


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
        <Link
          to={generatePath(`${AppRoute.Property}/:id`, { id: card.id.toString()})}
          onClick={() => dispatch(getCurrentPoint({offer: card, isAction:false}))}
        >
          <img className="place-card__image" src={card.previewImage} width={settingPage.widthImg} height={settingPage.heightImg} alt="Place" />
        </Link>
      </div>
      <div className={`${settingPage.className === 'favorites' ? 'favorites__card-info ' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
            onClick={handleIsFavotiteClick}
          >
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
