import React from 'react';
import Menu1 from '../Menu1/Menu1';
import memorygame from '../../images/memorygame.PNG';
import SeasonalCuisine from '../../images/SeasonalCuisine.PNG';
import kodflix from '../../images/kodflix.PNG';
import shop from '../../images/shop.PNG';
import blog from '../../images/blog.PNG';
import web from '../../images/web.PNG';
import './projects.css';
import '../Menu1/Menu1.css';

const Projects = () => {

    return (
        <div className="cont">
            <Menu1 />
            <h1>Portfolio</h1>
            <div className="flex-grid">
                <div className="wrap-image">
                    <img className="col a" src={memorygame} alt="memory-game" />
                    <a href="https://github.com/MartaBekyarska/memory-game" className="bottom-left">Code</a>
                </div>
                <div className="wrap-image">
                    <img className="col b" src={SeasonalCuisine} alt="seasonal-cuisine" />
                    <a href="https://github.com/MartaBekyarska/seasonal-cuisine" className="bottom-left">Code</a>
                </div>
                <div className="wrap-image">
                    <img className="col c" src={kodflix} alt="kodflix" />
                    <a href="https://github.com/MartaBekyarska/bekflix" className="bottom-left">Code</a>
                </div>
                <div className="wrap-image">
                    <img className="col d" src={shop} alt="shop" />
                    <a href="https://github.com/MartaBekyarska/GA-shop" className="bottom-left">Code</a>
                </div>
                <div className="wrap-image">
                    <img className="col e" src={blog} alt="blog" />
                    <a href="https://github.com/MartaBekyarska/blog" className="bottom-left">Code</a>
                </div>
                <div className="wrap-image">
                    <img className="col f" src={web} alt="web" />
                    <a href="https://github.com/MartaBekyarska/GA-singleWeb" className="bottom-left">Code</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;