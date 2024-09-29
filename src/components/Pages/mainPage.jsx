import React from "react";
import { Link } from "react-router-dom";
import mapImage from "../../images/mainPage/bg-map-.png";
import MapLinkPolotsk from "../MapLink/MapLinkPolotsk";
import MapLinkVitebsk from "../MapLink/MapLinkVitebsk";
import MapLinkMogilev from "../MapLink/MapLinkMogilev";
import MapLinkMinsk from "../MapLink/MapLinkMinsk";
import MapLinkGrodno from "../MapLink/MapLinkGrodno";
import MapLinkGomel from "../MapLink/MapLinkGomel";
import MapLinkBrest from "../MapLink/MapLinkBrest";
import "../../../src/style/mainPage.css";

function MainPageBuild() {
  return (
    <div className="mainPage">
      <div className="map">
        <img src={mapImage} className="mapImage" alt="img" />
        <Link to="Polotsk">
          <MapLinkPolotsk />
        </Link>
        <Link to="Vitebsk">
          <MapLinkVitebsk />
        </Link>
        <Link to="Mogilev">
          <MapLinkMogilev />
        </Link>
        <Link to="Minsk">
          <MapLinkMinsk />
        </Link>
        <Link to="Grodno">
          <MapLinkGrodno />
        </Link>
        <Link to="Gomel">
          <MapLinkGomel />
        </Link>
        <Link to="Brest">
          <MapLinkBrest />
        </Link>
      </div>
      <div className="articleBlock">
        <div className="titleStick">Live Magic Map</div>
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
          стране, краю или, даже, городу, и взглянуть на привычные вещи по
          новому.
        </article>
        <article className="articleMainPage">
          Добро пожаловать в мир путешествий с интерактивной картой LiveMagicMap
          по нашей небольшой, но такой интересной, разнообразной и гостеприимной
          стране со своей большой историей. Здесь каждый найдет для себя что
          либо по душе.
        </article>
      </div>
    </div>
  );
}

export default MainPageBuild;
