import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { GalleryWrap } from './ImageGallery.styled'

export function ImageGallery({ gallery, onSelect }) {
    return (
        
        <GalleryWrap >
            {gallery.map(item => <ImageGalleryItem onSelect={onSelect} key={item.id} gallery={item} />)}
        </GalleryWrap>
        
       
    )
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  })).isRequired,
  onSelect: PropTypes.func,
};
