import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button} from '@wordpress/components';
import styles from './style.module.scss';

registerBlockType('my-blocks/image-block', {
      attributes:{
        id: { type: 'number'},
        src: { type: 'string' },
   },
     edit: function({attributes, setAttributes}){
         return (
            <div className={styles.imageBlock}>
               <MediaUploadCheck>
                  <MediaUpload
                     onSelect={ ( media ) => {
                        setAttributes({id:media.id, src: media.url})
                      }
                      }
                     allowedTypes={ [ 'image' ] }
                     value = { attributes.id }
                     render={ ( { open } ) => {
                        return attributes.src 
                                        ? <img onClick={ open } src={ attributes.src } />
                                        : <Button onClick={ open } variant='primary'>Добавить изображение</Button>
                        }
                     }
                  />
            </MediaUploadCheck>
            </div>
         ) 
     },
     save: function(){
        return null;
     }
 });