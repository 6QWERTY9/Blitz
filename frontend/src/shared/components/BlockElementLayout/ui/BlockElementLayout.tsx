
import clsx from "clsx";
import type { IBlockElementLayoutProps } from "../model";
import css from './index.module.scss';



export const BlockElementLayout: React.FC<IBlockElementLayoutProps> = ({title, paragraph, children, titleSize='large'}) => {
  return (
    <div className={css.block_el_layout}>
      <div className={css.block_el_layout_text_content}>
        <h1 className={clsx(css.title, css[titleSize])}>{title}</h1>
        {paragraph && (
          <p>{paragraph}</p>
        )}
      </div>
      {children}
    </div>
  )
}
