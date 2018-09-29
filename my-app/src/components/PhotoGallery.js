import React, {Component} from 'react';
import './PhotoGallery.css';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let imgUrls = [
            'https://source.unsplash.com/3Z70SDuYs5g/800x600',
            'https://source.unsplash.com/01vFmYAOqQ0/800x600',
            'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
            'https://source.unsplash.com/t20pc32VbrU/800x600'
            ];

        return (
            <div className="photo-grid">
                <div className="row">
                    <div className="col-md-6">
                        <img className="image" src={imgUrls[0]} />
                    </div>
                    <div className="col-md-6">
                        <img className="image" src={imgUrls[1]} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="image" src={imgUrls[2]} />
                    </div>
                    <div className="col-md-6">
                        <img className="image" src={imgUrls[3]} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PhotoGallery