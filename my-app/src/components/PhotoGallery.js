import React, {Component} from 'react';
import PhotoDetailView from './PhotoDetailView';
import leftArrow from '../img/left-arrow.svg';
import rightArrow from '../img/right-arrow.svg';
import './PhotoGallery.css';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            detailView : false,
            indices : [0,1,2,3],
            detailIndex : 0
        };
        this.totalImageCount = this.props.images.length;
    }

    render() {

        return (
            <div>
                <div className="photo-grid">

                    <div className="row">
                        <div className="col-md-6">
                            <img className="image" src={this.props.images[this.state.indices[0]].url} onClick={this.showDetail.bind(this,this.state.indices[0])}/>
                        </div>
                        <div className="col-md-6">
                            <img className="image" src={this.props.images[this.state.indices[1]].url} onClick={this.showDetail.bind(this,this.state.indices[1])}/>
                        </div>
                    </div>
                    <div className="row action-row">
                        {this.state.indices[0] !== 0 && <div className="left-arrow" onClick={this.handleLeftClick}><img src={leftArrow}/></div>}
                        {this.state.indices[3] !== this.totalImageCount -1 && <div className="right-arrow" onClick={this.handleRightClick}><img src={rightArrow}/></div>}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="image" src={this.props.images[this.state.indices[2]].url} onClick={this.showDetail.bind(this,this.state.indices[2])}/>
                        </div>
                        <div className="col-md-6">
                            <img className="image" src={this.props.images[this.state.indices[3]].url} onClick={this.showDetail.bind(this,this.state.indices[3])}/>
                        </div>
                    </div>
                </div>
                {this.state.detailView && <PhotoDetailView images={this.props.images} index={this.state.detailIndex} closeDetail={this.closeDetail}/>}
            </div>
         )
    }

    handleLeftClick = () => {
        let currentIndices = this.state.indices;
        currentIndices = currentIndices.map(index => (index - 4) % this.totalImageCount);
        this.setState({indices: currentIndices});
    };

    handleRightClick = () => {
        let currentIndices = this.state.indices;
        currentIndices = currentIndices.map(index => (index + 4) % this.totalImageCount);
        this.setState({indices: currentIndices});
    };

    showDetail = (imageIndex) => {
        this.setState({detailView : true, detailIndex: imageIndex});
    };

    closeDetail = () => {
        this.setState({detailView : false});
    }
}

export default PhotoGallery