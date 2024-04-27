import profile from '../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4 border-b-2'>
            <h2 className="font-bold text-3xl">MERN Stack Developer</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;