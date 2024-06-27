import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from "./style.module.scss"

registerBlockType('my-blocks/two-cols', {
     edit: function(){
        return(
                <div className={styles.twoCols}>
                    <InnerBlocks
                        template = {
                           [
                              ['core/column',{allowedBlocks:['my-blocks/text-block', 'my-blocks/image-block'], templateLock: false}],
                              ['core/column',{allowedBlocks:['my-blocks/text-block', 'my-blocks/image-block'], templateLock: false}],
                           ]
                        }
                        templateLock="all"
                     />
               </div>
        )
     },
     save: function(){
        return <InnerBlocks.Content />
     }
 });
 