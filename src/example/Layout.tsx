import Github from '@/assets/github-mark-white.svg';
import { Link, Outlet } from 'react-router-dom';
import Canvas from './Canvas';

const Layout = () => {
    return (
        <>
            <div className='layout'>
                <a target='_blank' href='https://github.com/whatisjery/post-fluid-distortion'>
                    <img className='icon' src={Github} alt='icon' />
                </a>

                <nav className='nav'>
                    <Link to='/'>example 1</Link>
                    <Link to='/example2'>example 2</Link>
                    <Link to='/example3'>example 3</Link>
                    <Link to='/example4'>example 4</Link>
                </nav>
            </div>

            <Canvas />
            <Outlet />
        </>
    );
};

export default Layout;
