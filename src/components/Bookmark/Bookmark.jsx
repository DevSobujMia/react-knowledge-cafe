import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

  return (
    <div className='bg-slate-200 px-4 py-5 m-5 rounded-lg'>
        <h3 className='text-lg font-semibold font-sans leading-7'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark