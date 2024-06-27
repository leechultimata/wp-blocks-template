import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import styles from "./style.module.scss"

registerBlockType('my-blocks/text-block', {
    attributes:{
        text: {
            type: "string",
        }
    },
     edit: function({ attributes, setAttributes }){
        return(
                <div className={styles.textBlock}>
                    <TextControl
                        value={ attributes.text }
                        onChange={ ( val ) => setAttributes( { text: val } ) }
                    />
               </div>
        )
     },
     save: function(){
        return null
     }
 });
 