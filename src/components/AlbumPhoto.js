import React, { Component } from 'react';
import '../AlbumPhoto.css';
import photos from "../data";

class AlbumPhoto extends Component{

    setContent = (photo,type) =>{
        if(type=="photo"){
            return <img src={photo.img}/>
        }
        else{
            return <div className="DateDiv">
                <div className="InlineBlock">
                    <p>{photo.day}</p>
                    <p>{photo.month}</p>
                </div>
                <img src={photo.img}/>
            </div>
        }

    };


    render() {

        const {photo, type} = this.props;
        const content = this.setContent(photo,type);
        return (
            <div className={(type=="photo")?"Photo":"Date"}>
                {content}
            </div>

        );

    }
}

export default AlbumPhoto;