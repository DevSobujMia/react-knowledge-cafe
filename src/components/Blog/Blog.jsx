import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5';

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead, handleRemoveBookmark }) => {
    const { id, title, cover, author, author_img, post_date, reading_time, hashtag } = blog;
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        if (!isBookmarked) {
            handleAddBookmark(blog);
        } else {
            handleRemoveBookmark(id);
        }
        setIsBookmarked(!isBookmarked);
    };

    const markAsRead = () => {
        handleMarkAsRead(reading_time); // Pass the reading time of the blog post to handleMarkAsRead
        handleRemoveBookmark(id); // Also remove the bookmark when marking as read
    };

    return (
        <div>
            <img className='w-[720px] rounded-lg my-8' src={cover} alt="" />
            
            <div className='flex justify-between my-4'>
                <div className='flex gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className=''>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p className='opacity-70'>{post_date}</p>
                    </div>

                </div>
                <div className='mr-3'>
                    <span className='opacity-70 align-middle'>{reading_time} min read</span>
                    <button onClick={toggleBookmark} className='ml-2 text-2xl opacity-70 align-middle'>
                        {isBookmarked ? <IoBookmarkSharp /> : <IoBookmarkOutline />}
                    </button>
                </div>
            </div>
            <div>
                <h2 className="text-3xl"> {title}</h2>
                <p className='my-4 opacity-70'>{hashtag}</p>
                <button onClick={markAsRead} className='underline text-blue-500 font-semibold'>Mark as read</button>

                <hr className='my-6 mr-6' />
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
    handleRemoveBookmark: PropTypes.func.isRequired
};

export default Blog;
