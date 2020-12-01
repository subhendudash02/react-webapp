import React, { Component } from 'react';


class Counter extends Component {
    stuffs = { 
        imageUrl: "https://picsum.photos/200",
        clickUrl: "http://hackclub.tech",
        videoUrl: "https://www.youtube.com/embed/fKopy74weus?controls=1",
    };

    render() {
        
        let imgEle = this.stuffs.imageUrl;
        let linkEle = this.stuffs.clickUrl;
        let videoEle = this.stuffs.videoUrl;

        return (
            <React.Fragment>
                <h1 className = "heading">Pictures</h1>
                <br />
                <div className = "row">
                    <div className = "col-sm-4">
                        <a href = {linkEle}><img src = {imgEle} alt = "1" className = "Photo"></img></a>
                    </div>
                    <div className = "col-sm-4">
                        <a href = {linkEle}><img src = {imgEle} alt = "2" className = "Photo"></img></a>
                    </div>
                    <div className = "col-sm-4">
                        <a href = {linkEle}><img src = {imgEle} alt = "3" className = "Photo"></img></a>
                    </div>
                </div>
                <br />
                <h1 className = "heading">Video</h1>
                <div className = "container-fluid">
                    <div className = "video">
                        <iframe className="videoComp" src={videoEle}></iframe>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;