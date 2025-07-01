import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../utils/config';
import { clearWishlist, removefromWishlist } from '../../reducers/wishlist/reducer';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../api/cartApi/cartApi';

export default function Wishlist() {
  const product = useSelector((store) => store.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDelete = (id) => {
    dispatch(removefromWishlist(id));
  };



  const moveAllToBag = ()=> {
    if(localStorage.getItem("access_token") != null) {
      product.forEach(el => dispatch(addToCart(el.id)));
      dispatch(clearWishlist())
      navigate('/cart')
      alert('All items moved to cart')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <div className='flex justify-between items-center mx-auto max-w-screen-xl px-4 mt-[30px]'>
        <p className='text-[30px] font-semibold'>Wishlist ({product.length})</p>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4 mt-10'>
        {product?.map((el) => (
          <div
            key={el.id}
            className='relative group flex flex-col border rounded-xl bg-white shadow-md p-4 hover:shadow-xl transition-all duration-300'
          >
            <IconButton
              onClick={() => handleDelete(el.id)}
              className='!absolute top-2 right-2 z-10 transition-transform duration-300 hover:scale-110 hover:text-red-600'
              size='small'
            >
              <DeleteIcon />
            </IconButton>

            <img
              src={`${API}/images/${el.image}`}
              alt={el.productName}
              className='h-[200px] w-full object-contain mb-4'
            />

            <h3 className='text-lg font-semibold mb-2'>{el.productName}</h3>
            <p className='text-red-500 font-bold mb-2'>${el.price}</p>
            <p className='mb-4'>⭐️⭐️⭐️⭐️⭐️ (75)</p>

            <Button
              variant='contained'
              color='primary'
              className='
                absolute bottom-4 left-1/2 transform -translate-x-1/2
                transition-opacity duration-300
                opacity-100 md:opacity-0 md:group-hover:opacity-100
              '
              sx={{
                textTransform: 'none',
                backgroundColor: '#d62828',
                '&:hover': {
                  backgroundColor: '#c9181a',
                },
                fontSize: '14px',
                padding: '6px 16px',
              }}
            >
              Add to Cart
            </Button>
          </div>
        ))}
      </section>
         <button onClick={moveAllToBag}>Move All to Bag</button>
    </>
  );
}
