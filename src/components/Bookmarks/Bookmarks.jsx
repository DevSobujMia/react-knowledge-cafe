import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3">
      <div className='bg-[#6047EC] bg-opacity-10 text-[#6047EC] font-semibold my-8 ml-4 p-4 border border-[#6047EC] rounded-lg'>
         <h3 className="text-xl text-center">Spent time on read : {readingTime} min</h3>
      </div>
       <div className="min-h-screen h-auto bg-gray-300 ml-4 py-8 rounded-lg">
         <h2 className="text-2xl font-semibold ml-4">Bookmarked Blogs : {bookmarks.length}</h2>
         {
            bookmarks.map((bookmark, index) => <Bookmark key={`${bookmark.id}-${Date.now()}-${index}`} bookmark={bookmark}></Bookmark>)
         }
       </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks