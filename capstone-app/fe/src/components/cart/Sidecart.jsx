import { React } from 'react';
import { useCart } from 'react-use-cart';
import { useCartContext } from '../../context/CartContext';
import './Sidecart.css';
import { IoClose } from 'react-icons/io5';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { MdOutlinePayment } from 'react-icons/md';

const Sidecart = () => {
  // Open e Close Sidebar
  const { isOpen, toggleSidecart } = useCartContext();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <div
      className={`sidebar ${
        isOpen ? 'sidebar--open' : 'sidebar--closed'
      } col-12 col-md-6 col-sm-12`}
    >
      <div className="btn--box">
        <TbLayoutSidebarLeftCollapseFilled
          onClick={toggleSidecart}
          className="close--sidebar"
          size={30}
        />
      </div>
      <div className="cart--box">
        <h2 className="self--end my-4">Il tuo Carrello</h2>
        {isEmpty && <h3 className="text-center">per ora è vuoto</h3>}
        {isOpen
          ? items.map((item, idx) => (
              <div key={idx} className="card--field">
                <img src={item.photo} alt={item.name} />
                <div className="name--description">
                  <h5>{item.name}</h5>
                  <p>€{item.price}</p>
                </div>
                <div className="wrap--button">
                  <div className="box--button">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="btn tomato"
                    >
                      -
                    </button>
                    <p className="m-0">{item.quantity}</p>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="btn tomato"
                    >
                      +
                    </button>
                  </div>

                  <IoClose
                    className="delete--item"
                    size={22}
                    onClick={() => removeItem(item.id)}
                    style={{ boxShadow: '-moz-initial' }}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="final--btn">
        <button onClick={() => emptyCart()} className="btn clear--btn">
          Svuota carrello
        </button>
        <button className="btn payment">
          <MdOutlinePayment />
          Pay now
        </button>
      </div>
      <div className="sidebar--footer btn">
        <span>Totale ordine:</span>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          € {cartTotal}
        </span>
      </div>
    </div>

    /* <section className="py-4">
          <div className="row">
            <div className="col">
              <h5>
                Cart({totalUniqueItems}) total Items: ({totalItems})
              </h5>
            </div>
          </div>
        </section> */
  );
};
export default Sidecart;
