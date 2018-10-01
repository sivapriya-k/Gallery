import React, {Component} from 'react';
import PhotoDetailView from './PhotoDetailView';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';
import './PhotoGallery.css';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detailView : false
        }
    }

    render() {

        return (
            <div>
            <div className="photo-grid">

                <div className="row">
                    <div className="col-md-6">
                        <img className="image" src={this.props.images[0]} onClick={this.showDetail}/>
                    </div>
                    <div className="col-md-6">
                        <img className="image" src={this.props.images[1]} onClick={this.showDetail}/>
                    </div>
                </div>
                <div className="row action-row">
                    <div className="left-arrow" onClick={this.handleLeftClick}><img src={leftArrow}/></div>
                    <div className="right-arrow" onClick={this.handleRightClick}><img src={rightArrow}/></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="image" src={this.props.images[2]} onClick={this.showDetail}/>
                    </div>
                    <div className="col-md-6">
                        <img className="image" src={this.props.images[3]} onClick={this.showDetail}/>
                    </div>
                </div>
            </div>
                {this.state.detailView && <PhotoDetailView closeDetail={this.closeDetail}/>}
            </div>
                )
    }

    handleLeftClick = () => {
    };

    handleRightClick = () => {
    };

    showDetail = () => {
        this.setState({detailView : true});
    };

    closeDetail = () => {
        this.setState({detailView : false});
    }
}

export default PhotoGallery