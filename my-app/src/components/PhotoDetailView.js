import React, {Component} from 'react';
import './PhotoDetailView.css';

class PhotoDetailView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images : [
                "https://source.unsplash.com/3Z70SDuYs5g/800x600",
                'https://source.unsplash.com/t20pc32VbrU/800x600'
            ],
            currentIndex : 0
        }
    }

    render() {
        const styles = {
            backgroundImage: `url(${this.state.images[this.state.currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (
            <div className="photo-detail-container" >
                <div className="detail-view" style={styles}>caption</div>
                <button type="button" onClick={this.changePhoto}>next</button>
            </div>
        )
    }

    changePhoto = () => {
        let index = this.state.currentIndex;
        index = index === 0?1:0;
        this.setState({currentIndex : index});
    }


}

export default PhotoDetailView