import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PhotoDetailView from './PhotoDetailView';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';
import './PhotoGallery.css';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detailView : false,
            currentImageIndices : [0,1,2,3],
            detailIndex : 0
        };
        this.totalImageCount = this.props.images.length;
    }

    render() {

        return (
            <div>
                <div className="photo-grid">
                    <div className="row">
                        <div className="col-md-6 col-xs-3">
                            <img className="image" src={this.props.images[this.state.currentImageIndices[0]].url} alt={this.props.images[this.state.currentImageIndices[0]].caption}
                                 onClick={this.showDetail.bind(this,this.state.currentImageIndices[0])} title="click to view"/>
                        </div>
                        <div className="col-md-6 col-xs-3">
                            <img className="image" src={this.props.images[this.state.currentImageIndices[1]].url} alt={this.props.images[this.state.currentImageIndices[1]].caption}
                                 onClick={this.showDetail.bind(this,this.state.currentImageIndices[1])} title="click to view"/>
                        </div>
                    </div>
                    <div className="row action-row">
                        {this.state.currentImageIndices[0] !== 0 && <div className="left-arrow" onClick={this.handleLeftClick}><img src={leftArrow} alt="prev"/></div>}
                        {this.state.currentImageIndices[3] !== this.totalImageCount -1 && <div className="right-arrow" onClick={this.handleRightClick}><img src={rightArrow} alt="next"/></div>}
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xs-3">
                            <img className="image" src={this.props.images[this.state.currentImageIndices[2]].url} alt={this.props.images[this.state.currentImageIndices[2]].caption}
                                 onClick={this.showDetail.bind(this,this.state.currentImageIndices[2])} title="click to view"/>
                        </div>
                        <div className="col-md-6 col-xs-3">
                            <img className="image" src={this.props.images[this.state.currentImageIndices[3]].url} alt={this.props.images[this.state.currentImageIndices[3]].caption}
                                 onClick={this.showDetail.bind(this,this.state.currentImageIndices[3])} title="click to view"/>
                        </div>
                    </div>
                </div>
                {this.state.detailView && <PhotoDetailView images={this.props.images} index={this.state.detailIndex} closeDetail={this.closeDetail}/>}
            </div>
         )
    }

    handleLeftClick = () => {
        let currentIndices = this.state.currentImageIndices;
        currentIndices = currentIndices.map(index => (index - 4) % this.totalImageCount);
        this.setState({currentImageIndices: currentIndices});
    };

    handleRightClick = () => {
        let currentIndices = this.state.currentImageIndices;
        currentIndices = currentIndices.map(index => (index + 4) % this.totalImageCount);
        this.setState({currentImageIndices: currentIndices});
    };

    showDetail = (imageIndex) => {
        this.setState({detailView : true, detailIndex: imageIndex});
    };

    closeDetail = () => {
        this.setState({detailView : false});
    }
}

PhotoGallery.defaultProps = {
    images : []
};

PhotoGallery.propTypes = {
    images : PropTypes.array
};

export default PhotoGallery