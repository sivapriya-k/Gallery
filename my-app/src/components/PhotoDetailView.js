import React, {Component} from 'react';
import './PhotoDetailView.css';
import leftArrow from "../img/left-arrow.svg";
import rightArrow from "../img/right-arrow.svg";

class PhotoDetailView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex : this.props.index
        }
    }

    render() {
        const styles = {
            backgroundImage: `url(${this.props.images[this.state.currentIndex].url})`
        };

        return (
            <div className="photo-detail-container" onClick={this.props.closeDetail}>
                <div className="detail-view" style={styles}>
                    <span className="img-caption">{this.props.images[this.state.currentIndex].caption}</span>
                </div>
                <div className="photo-nav">
                    {this.state.currentIndex !== 0 && <div className="detail-left-arrow" onClick={this.handleLeftNav}><img src={leftArrow}/></div>}
                    {this.state.currentIndex !== this.props.images.length-1 && <div className="detail-right-arrow" onClick={this.handleRightNav}><img src={rightArrow}/></div>}
                </div>
            </div>
        )
    }

    handleLeftNav = (e) => {
        e.stopPropagation();
        let index = this.state.currentIndex;
        index = index - 1;
        this.setState({currentIndex : index});
    };

    handleRightNav = (e) => {
        e.stopPropagation();
        let index = this.state.currentIndex;
        index = index + 1;
        this.setState({currentIndex : index});
    }


}

export default PhotoDetailView