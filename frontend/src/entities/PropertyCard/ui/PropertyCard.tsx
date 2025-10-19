import { BlockElementLayout } from "../../../shared/components/BlockElementLayout";
import type { IPropertyCardProps } from "../model";
import css from './index.module.scss';

export const PropertyCard: React.FC<IPropertyCardProps> = ({
  img,
  title='',
  lotNumber,
  price,
  square,
  storey,
  pricePerSquareMeter
}) => {
  return (
    <div className={css.property_card} aria-label={title}>
      <div className={css.property_card_content}>
        <div className={css.property_card_img_wrapper}>
          {img ? (
            <img src={img} alt={`Фото квартиры по адресу ${title}`} loading="lazy" />
          ) : (
            <span className={css.error_upload_img}>Не удалось загрузить изображения</span>
          )}
        </div>

        <div className={css.property_card_information_wrapper}>
          <BlockElementLayout title={title} titleSize="small">
            <span className={css.lot_info}>
              Лот № {lotNumber}
            </span>
            <div className={css.property_card_information}>
              <div className={css.price_info}>
                <span className={css.price}>
                  {price} &#8381;
                </span>
                <span className={css.price_per_square_meter}>
                  {pricePerSquareMeter} &#8381; за м&sup2;
                </span>
              </div>
              <div className={css.square_and_storey}>
                <span className={css.square}>
                  Площадь {square} м&sup2;
                </span>
                <span className={css.storey}>
                  Этаж {storey}
                </span>
              </div>
            </div>
          </BlockElementLayout>
        </div>
        <div className={css.property_card_button_wrapper}>
          <button className={css.property_card_button}>
            Назначить просмотр
          </button>
        </div>
      </div>
    </div>
  )
}
