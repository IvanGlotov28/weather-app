import a01d from '../icons/01d.png'
import a01n from '../icons/01n.png'
import a02d from '../icons/02d.png'
import a02n from '../icons/02n.png'
import a03d from '../icons/03d.png'
import a03n from '../icons/03n.png'
import a04d from '../icons/04d.png'
import a04n from '../icons/04n.png'
import a09d from '../icons/09d.png'
import a09n from '../icons/09n.png'
import a10d from '../icons/10d.png'
import a10n from '../icons/10n.png'
import a11d from '../icons/11d.png'
import a11n from '../icons/11n.png'
import a13d from '../icons/13d.png'
import a13n from '../icons/13n.png'
import a50d from '../icons/50d.png'
import a50n from '../icons/50n.png'
import aunknown from '../icons/unknown.png'


const imgSrc = (data) => {
  let imgSrc
  switch (data) {
    case '01d':
      imgSrc = a01d
      break
    case '01n':
      imgSrc = a01n
      break
    case '02d':
      imgSrc = a02d
      break
    case '02n':
      imgSrc = a02n
      break
    case '03d':
      imgSrc = a03d
      break
    case '03n':
      imgSrc = a03n
      break
    case '04d':
      imgSrc = a04d
      break
    case '04n':
      imgSrc = a04n
      break
    case '09d':
      imgSrc = a09d
      break
    case '09n':
      imgSrc = a09n
      break
    case '10d':
      imgSrc = a10d
      break
    case '10n':
      imgSrc = a10n
      break
    case '11d':
      imgSrc = a11d
      break
    case '11n':
      imgSrc = a11n
      break
    case '13d':
      imgSrc = a13d
      break
    case '13n':
      imgSrc = a13n
      break
    case '50d':
      imgSrc = a50d
      break
    case '50n':
      imgSrc = a50n
      break
    case 'unknown':
      imgSrc = aunknown
      break

    default:
      console.log('err')
  }

  return imgSrc
}

export default imgSrc
