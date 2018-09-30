import React, {Component} from 'react';
import './PhotoDetailView.css';

class PhotoDetailView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fullPhoto" onClick={this.props.closeDetail}>
                <img src="https://source.unsplash.com/3Z70SDuYs5g/800x600" />
            </div>
        )
    }


}

export default PhotoDetailView