import {OfferType} from '../../types/offers';
import {useParams} from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import OfferNearbyList from '../../components/offers-nearby-list/offers-nearby-list';
import Map from '../../components/map/map';
import HeaderMainPage from '../../components/main-page-header/main-page-header';
import {AppRoute, AuthorizationStatus} from '../../constants';
import useScrollToTop from '../../hooks/use-scroll-to-up/use-scroll-to-up';
import {useAppSelector} from '../../hooks';

type PropertyPageProps = {
  offer: OfferType;
  offersForCity: OfferType[];
}


function PropertyPageId ({offer, offersForCity}: PropertyPageProps): JSX.Element {
  const {id, images, isPremium, title, rating, typeOffer, bedrooms, maxAdults, price, goods, host, description} = offer;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const OffersNearby = offersForCity.filter((el) => el.id !== id);
  return (
    <div className="page">
      <HeaderMainPage />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((img) => (
                <div className="property__image-wrapper" key={id}>
                  <img className="property__image" src={img} alt="Studio" />
                </div>
              )
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : '' }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${20 * Math.round(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {typeOffer}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li className="property__inside-item" key={id}>
                      {good}
                    </li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro ? 'Pro' : '' }
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList/>

                {authorizationStatus === AuthorizationStatus.Auth && <CommentForm hotelId={id}/>}

              </section>
            </div>
          </div>
          <section className="property__map">
            <Map city={offer.city} offers={offersForCity} classNameMap={'property'}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferNearbyList
              offersList={OffersNearby}
              pageType={AppRoute.Property}
              cityName={offer.city.name}
            />
          </section>
        </div>
      </main>
    </div>
  );
}


function PropertyPage (): JSX.Element {
  useScrollToTop();
  const params = useParams();
  const offersForCity = useAppSelector((state) => state.offers);
  const offer = offersForCity.find((el) => el.id.toString() === params.id) as OfferType;
  // eslint-disable-next-line no-console
  console.log(offer);
  if (offer) {
    return ( <PropertyPageId offer ={offer} offersForCity={offersForCity} />);
  } else {
    return (<NotFoundScreen />);
  }

}

export default PropertyPage;
