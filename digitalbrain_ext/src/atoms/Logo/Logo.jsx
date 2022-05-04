import React from 'react';
import PropTypes from 'prop-types';
import './logo.scss';

import loading_image from "../../assets/images/loading_image.png";

export default class LazyImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        error: false
      };
    }
  
    componentDidMount() {
      const img = new Image();
      img.onload = () => {
        this.setState({
          loaded: true
        });
        // this.props.onLoadUpper();
      };
      img.onerror = () => {
        this.setState({
          error: true
        });
      };
      img.src = this.props.src;
    }
  
    render() {
      if (this.state.error) {
        return <img
          id={this.props.id}
          className={this.props.className}
          style={this.props.style}
          src={this.props.unloadedSrc}
          alt={this.props.alt} />
      } else if (!this.state.loaded) {
        return <img
          id={this.props.id}
          className={this.props.className}
          style={this.props.style}
          src={this.props.unloadedSrc}
          alt={this.props.alt} />
      }
      return <img
        id={this.props.id}
        className={this.props.className}
        style={this.props.style}
        src={this.props.src}
        alt={this.props.alt} />
    }
}


export class Logo extends React.Component {
    render() {
        return (
            <LazyImage
                id={this.props.id}
                className="digitalbrain-any-logo"
                unloadedSrc={loading_image}
                src={this.props.src}
                alt={this.props.alt}
            />
        )
    }
}


Logo.propTypes = {
    id: PropTypes.string,
    unloadedSrc: PropTypes.any,
    src: PropTypes.any,
    alt: PropTypes.string,
};


Logo.defaultProps = {
};

