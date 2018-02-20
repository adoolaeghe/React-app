import React from "react";
import Player from "../player/player"
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import Slider from 'material-ui/Slider';

const min = 0;
const max = 100;
const power = 12;

function transform(value) {
  return value + 1;
}

function reverse(value) {
  return value - 1;
}

export default class Article7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalNbShares: 4,
      maxNbShares: 100,
      crtSharePrice: 1,
      crtShareValue: 1,
      totalValue: 4,
      initialNbOfShare: 4,
      initialSharePrice: 1,
      priceIncrementor: 4,
      shareIncrementor: 2,
      slider: 1,
    }
  }

  handleSlider = (event, value) => {
    this.setState({slider: transform(value)});
  };

  componentDidMount() {
    Highcharts.chart('container', {
      chart: {
        type: 'line',
      },
      title: {
          text: 'Monthly Average Temperature'
      },
      subtitle: {
          text: 'Source: WorldClimate.com'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
          title: {
              text: 'Temperature (°C)'
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      }, {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }]
    })
  }

  handleSongPartRender() {
    let to_return = [];
    for(let i = 0; i < this.state.slider; i++) {
      to_return.push(
        <div className="article7-info2-content-element"></div>
      )
    }
    return to_return;
  }

  render() {
    return(
      <section className="article7 row"
               style={{backgroundImage: 'url(./public/content/images/main/hash-background.svg)'}}>
        <div className="article7-left col s2">
          <div className="article7-left-label drag">
          </div>
        </div>
        <div className="article7-main col s10">
          <div className="article7-main-visual col s12" style={{position:"relative"}}>
            <Player key={1}/>
            <div id="container" style={{width: "600px"}}>
            </div>
          </div>
          <div className="article7-main-info1 col s12">
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Total Amount</div>
              <div className="col s3 info-val">{this.state.slider}</div>
              <div className="col s4"></div>
            </div>
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Current Share Price</div>
              <div className="col s3 info-val">2.2</div>
              <div className="col s4"></div>
            </div>
          </div>
          <div className="article7-main-info2 col s12">
            <div className="article7-info2-content cols12">
              {this.handleSongPartRender()}
            </div>
            <Slider
              min={min}
              max={max}
              step={max / 100}
              value={reverse(this.state.slider)}
              onChange={this.handleSlider}
            />
          </div>
          <div className="article7-main-info3 col s12">
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Total Amount</div>
              <div className="col s3 info-val">4.5</div>
              <div className="col s4"></div>
            </div>
            <div className="col s6 info-content row">
              <div className="col s5 info-label">Current Share Price</div>
              <div className="col s3 info-val">7.2</div>
              <div className="col s4"></div>
            </div>
          </div>

          <div className="article7-main-info5 col s12 row">
            <div className="col s3 options row">
              <div className="col s12 options-label">
                Initial Number of Share
              </div>
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1">
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1">
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
            <div className="col s1 options-val"></div>
            <div className="col s3 options">
              <div className="col s12 options-label">
                Share incrementor
              </div>
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        disabled={(this.state.shareIncrementor < 1) ? true : false}
                                        onClick={
                                          () => {
                                            this.setState({
                                              shareIncrementor: this.state.shareIncrementor - 1
                                            })
                                          }
                                        }>
                    <ContentRemove />
                  </FloatingActionButton>
                </div>
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        onClick={
                                          () => {
                                            this.setState({
                                              shareIncrementor: this.state.shareIncrementor + 1
                                            })
                                          }
                                        }>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
            <div className="col s1 options-val">
              {this.state.shareIncrementor}
            </div>
            <div className="col s3 options">
              <div className="col s12 options-label">
                Price incrementor
              </div>
              <div className="col s12 options-button">
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        disabled={(this.state.initialNbOfShare < 1) ? true : false}
                                        onClick={
                                          () => {
                                            this.setState({
                                              initialNbOfShare: this.state.initialNbOfShare - 1
                                            })
                                          }
                                        }>
                    <ContentRemove color="red"/>
                  </FloatingActionButton>
                </div>
                <div className="col s6 options-button">
                  <FloatingActionButton mini={true}
                                        backgroundColor="#eae4e1"
                                        onClick={
                                          () => {
                                            this.setState({
                                              initialNbOfShare: this.state.initialNbOfShare + 1
                                            })
                                          }
                                        }>
                    <ContentAdd />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
            <div className="col s1 options-val">
             {this.state.initialNbOfShare}
            </div>
          </div>
        </div>
        <div className="dot-left" id="21"></div>
        <div className="dot-right" id="22"></div>
      </section>
    )
  }
}