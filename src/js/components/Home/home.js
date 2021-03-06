import React from "react";

import Card from 'material-ui/Card';
import Drawer from "material-ui/Drawer";
import LazyLoad from 'react-lazyload';
import Player from "./player/player";
import Toggle from 'material-ui/Toggle';
import ReactTooltip from 'react-tooltip';
import {List, ListItem} from 'material-ui/List';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Article1 from "./articles/1";
import Article2 from "./articles/2";
import Article3 from "./articles/3";
import Article4 from "./articles/4";
import Article5 from "./articles/5";
import Article6 from "./articles/6";
import Article7 from "./articles/7";
import LoadingPage from "./articles/LoadingPage";
import NavBar from "./articles/navBar";
import Footer from "./articles/footer";
import ScrollReveal from 'scrollReveal'

import Faq from "./drawer/faq";
import Menu from "./drawer/menu";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this);
    this.switchAutoPlay = this.switchAutoPlay.bind(this);
    this.state = {
      autoPlay: false,
      playingIndex: 1,
      menuGrain: 0.05,
      menuDisplay: false,
      article3Anim: false,
      article3Text: false,
      article4Anim: false,
      article4Text: false,
      article1Arrow: true,
      article2Main: false,
      pieScroll: [],
      faqDisplay: false,
      navColor: "blue",
      logoUrl: "url(./public/content/images/main/logo.svg)"
    };
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  handleMenu() {
    this.setState({
      menuDisplay: !this.state.menuDisplay
    })
  }

  handleFaqDrawer() {
    this.setState({faqDisplay: !this.state.faqDisplay})
  }

  handleMenu() {
    this.setState({
      menuDisplay: !this.state.menuDisplay
    })
  }

  handleFaqDrawer() {
    this.setState({faqDisplay: !this.state.faqDisplay})
  }

  switchAutoPlay() {
    this.setState({
      autoPlay: true
    });
  }

  switchPlayingIndex(index) {
    this.setState({
      playingIndex: index
    });
  }

  handleScroll(event) {
    const scroll = $(window).scrollTop();

    if (190 < scroll < 200 && !this.state.article2Main) {
      this.setState({
        navColor: "#0F3FD5",
      });
    }

    if (490 < scroll < 500 && !this.state.article3Anim) {
      this.setState({
        navColor: "#FB3F4F",
      });
    }

    if (1090 < scroll < 1100 && !this.state.article4Anim) {
      this.setState({
        navColor: "#FEBE65",
      });
    }
    if (scroll === 1900) {
      this.setState({
        navColor: "#6884FB",
      });
    }
    this.setState({pieScroll: scroll})
  }

  render() {
    return (
      <div className="row" style={{cursor: "url(./public/content/images/main/avatar.jpg) 4 12, auto"}}>

        <div className="col s1 side-right" style={{fontSize: "25px", textAlign: "center", marginTop: "13px"}}>
          Ryme.
        </div>

        <Card className="col s10" style={{ zIndex: 100001 }}>
          <NavBar logoUrl={this.state.logoUrl}
                  navColor={this.state.navColor}/>

          <Article1 article1Arrow={this.state.article1Arrow} />
          <Article2 article2Main={this.state.article2Main}/>
          <Article3 article3Anim={this.state.article3Anim}
                      article3Text={this.state.article3Text}
                      pieScroll = {this.state.pieScroll}/>
          <Article4 article4Anim={this.state.article4Anim}
                    article4Text={this.state.article4Text}
                    pieScroll = {this.state.pieScroll}/>

        </Card>

        <div className="col s1 side-right"></div>
        <main style={{marginTop: "120px"}} className="col s10 push-s1 secondary-article">
          <Article5 />
          <Article6 />
          <Article7 />
        </main>
        <Footer />
      </div>
    );
	}
}
