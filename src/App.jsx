import { useState } from 'react';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = (blog) => {
    // Check if the blog is already bookmarked
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === blog.id);

    // If not bookmarked, add it to bookmarks
    if (!isBookmarked) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  const handleRemoveBookmark = (blogId) => {
    // Remove the bookmark with the given blogId
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== blogId);
    setBookmarks(updatedBookmarks);
  };

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <div className='md:flex mx-4'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark} handleRemoveBookmark={handleRemoveBookmark} />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} handleRemoveBookmark={handleRemoveBookmark} />
      </div>
    </div>
  );
}

export default App;
