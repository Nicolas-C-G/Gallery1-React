import React from "react";
import './gallery-1.css';

class Gallery1 extends React.Component {
    slideIndex     = 1;
    maxSlidesIndex = 2;

    setslides(value) {
        
        this.slideIndex = this.slideIndex + value;

        if (this.slideIndex < 0) {
            this.slideIndex = this.maxSlidesIndex;
        }else if (this.slideIndex > this.maxSlidesIndex) {
            this.slideIndex = 0;
        }
        
        let slides = document.getElementsByClassName("slide-block");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[this.slideIndex].style.display = "block";
            
    };

    componentDidMount(){
        this.setslides(1);
    }

    render(){
        const imagePath  = "../images/" + this.props.src;
        const imagePath1 = "../images/" + this.props.src1;
        const imagePath2 = "../images/" + this.props.src2;

        return (
            <div className="gallery-block">
                <div className="slide-block fade">
                    <div class="numbertext">1 / 3</div>
                    <img className="photo-gallery" src={imagePath}/>
                </div>
                <div className="slide-block fade">
                    <div class="numbertext">2 / 3</div>
                    <img className="photo-gallery" src={imagePath1}/>
                </div>
                <div className="slide-block fade">
                    <div class="numbertext">3 / 3</div>
                    <img className="photo-gallery" src={imagePath2}/>
                </div>
                <a className="previous-btn" onClick={() => this.setslides(-1)}>❮</a>
                <a className="next-btn" onClick={() => this.setslides(1)}>❯</a>
            </div>
        )
    }
}

export default Gallery1;