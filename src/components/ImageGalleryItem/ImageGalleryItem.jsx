import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImg } from '../ImageGalleryItem/ImageGalleryItem.styled'


export function ImageGalleryItem({gallery, onSelect}) {
    const { webformatURL, tags } = gallery
    return (
       
        <GalleryItem >
            <GalleryItemImg onClick={() => {onSelect(gallery)}} src={webformatURL} alt={ tags } />
        </GalleryItem>
    )
}
 

ImageGalleryItem.propTypes = {
  gallery: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};