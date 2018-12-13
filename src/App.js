import React, { Component } from 'react';
import './App.css';
import photos from "./data"
import AlbumPhoto from "./components/AlbumPhoto";



class App extends Component {

    state ={
        selectedPhotoIndex: 0
    }

    SelectPhoto = (index) => (event) => {
        this.setState({selectedPhotoIndex: index});
    };

    setNavigateButtons = () =>{
        let navigateButtonsList = [];
        let isDisabled;
        for(let i=0;i<photos.length;i++){
             /*isDisabled=(i==enableFilter);
             navigateButtonsList.push(<button disabled={isDisabled} onClick={this.props.filterChangeHandle(i)}>{buttonNameList[i]}</button>)*/
            navigateButtonsList.push(<button>{i}</button>);
        }
        return navigateButtonsList;
    };


  render() {
    const navigateButtonsList = this.setNavigateButtons();
    // const dateImage = this.setDateImage();
      let lastday = photos[0].day;
      let lastmonth = photos[0].month;
    return (
      <div className="App">
        <header className="App-header">
          <h1>День в фото</h1>
          <div className="Line">
              <hr/>
          </div>
        </header>
           <div className="Body">
              <div className = "MainPhoto">
                <div className="Img"><img src={photos[this.state.selectedPhotoIndex].img}/></div>
                <div className="LastDate">
                    <p>21</p>
                    <p>сентября</p>
                </div>
              </div>
              <div className="Album">
                  {
                    photos.map((photo,index) => {
                      if(photo.day!=lastday || photo.month!=lastmonth){
                        lastday=photo.day;
                        lastmonth=photo.month;
                        return <AlbumPhoto key={index}
                                           index={index}
                                           photo={photo}
                                           type="date"
                        />
                          {/*<div className="Photo">*/}
                              {/*<p>21</p>*/}
                              {/*<p>сентября</p>*/}
                          {/*</div>*/}




                      }
                      else{
                        return <AlbumPhoto key={index}
                                           index={index}
                                           photo={photo}
                                           type = "photo"
                        />
                      }

                    }

                  )}

              </div>
              <div className="Pages"> Страницы: {navigateButtonsList}</div>
          </div>
      </div>
    );
  }
}

export default App;
