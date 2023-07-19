import { NavLink } from 'react-router-dom';

/**
 * @import advertData du fichier advert.json  
 * advertData est visible depuis la console.
 */
import advertData from '../advert.json'
console.log(advertData)



/**
 * @var string covers - récupère l'URL de l'image de couverture dans la propriété .cover de advertData
 * @var string titles - récupère le titre de l'annonce dans la propriété .title de advertData
 * 
 * @returns image cover with title and gradient 
 */
/*
function Gallery(){
  const covers = advertData.map(advert => advert.cover);
  const titles = advertData.map(advert => advert.title);
  

  return(

    <NavLink to='/Fiche-Logement' className='gallery'>
      {covers.map((cover, index) => (
        <div key={index} className='gallery--card'>
          <img  src={cover} alt={titles[index]} className='gallery--card__image' />
          <div className='gallery--card__gradient'></div>
          <h3 className='gallery--card__title'>{titles[index]}</h3>
        </div>
      ))} 
    </NavLink> 
  );
}


export default Gallery

*/



function Gallery() {
  const covers = advertData.map((advert) => advert.cover);
  const titles = advertData.map((advert) => advert.title);

  return (
    <div className='gallery'>
      {covers.map((cover, index) => (
        <NavLink key={index} to={`/Fiche-Logement/${advertData[index].id}`} className='gallery--card'>
          <img className='gallery--card__image' src={cover} alt={titles[index]} />
          <div className='gallery--card__gradient'></div>
          <h3 className='gallery--card__title'>{titles[index]}</h3>
        </NavLink>
      ))}
    </div>
  );
}

export default Gallery;
