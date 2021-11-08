import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';


export default function ImageGallery({ data, onImageClick }) {
    return (
        <ul className={s.ImageGallery}>
            {data.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                        onImageClick={onImageClick}
                    />
                )
            })}
        </ul>
    );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })),
  onImageClick: PropTypes.func,
};

