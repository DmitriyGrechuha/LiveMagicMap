import React from 'react';
import './App.css';
import mapImage from './images/bg-map.png';
import MapLinkPolotsk from './components/MapLink/MapLinkPolotsk';
import MapLinkVitebsk from './components/MapLink/MapLinkVitebsk';
import MapLinkMogilev from './components/MapLink/MapLinkMogilev';
import MapLinkMinsk from './components/MapLink/MapLinkMinsk';
import MapLinkGrodno from './components/MapLink/MapLinkGrodno';
import MapLinkGomel from './components/MapLink/MapLinkGomel';
import MapLinkBrest from './components/MapLink/MapLinkBrest';
import CarouselMainPage from './components/Carousel';

function App() {
  return (
    <div className="App">
      <div className="map">
        <img src={mapImage} className="mapImage" alt=" " />
        <MapLinkPolotsk />
        <MapLinkVitebsk />
        <MapLinkMogilev />
        <MapLinkMinsk />
        <MapLinkGrodno />
        <MapLinkGomel />
        <MapLinkBrest />
      </div>
      <div className="articleBlock">
        <article className="articleMainPage">
          Человек издревле стремился к путешествиям. Его интерес к изучению
          окружающего мира постепенно расширялся от места его обитания до
          соседних территорий. С рождением кораблестроения человек смог
          расширить горизонты своих путешествий до открытия новых территорий,
          стран и материков. Благодаря упорству и любознательности было
          совершено много открытий путешественниками, имена которых вошли в
          историю.
        </article>
        <article className="articleMainPage">
          На сегодняшний день путешествия не потеряли своей актуальности,
          несмотря на то, что на Земле почти не осталось мест, куда не ступала
          нога человека. И любой желающий может себе позволить отправиться,
          пусть и в небольшое, но интересное путешествие, например, по своей
          стране, и взглянуть на привычные вещи по новому.
        </article>
        <CarouselMainPage />
      </div>
    </div>
  );
}

export default App;
