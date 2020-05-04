import React, { Component } from "react";
import { MemeGeneratorComponent } from "./MemeGeneratorComponent";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      listMemeImg: [],
      randomImg: "http://i.imgflip.com/1bij.jpg",
    };
    this.addTextToImg = this.addTextToImg.bind(this);
    this.generateImg = this.generateImg.bind(this);
  }

  /*componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        return this.setState({ listMemeImg: memes });
      });
  }*/

  async componentDidMount() {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const jSonResponse = await response.json();
      const { memes } = jSonResponse.data;
      this.setState({ listMemeImg: memes });
    } catch (error) {
      console.error(error);
    }
  }

  addTextToImg(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generateImg(event) {
    const randomNum = Math.floor(Math.random() * this.state.listMemeImg.length);
    const selectedImg = this.state.listMemeImg[randomNum].url;
    this.setState({ randomImg: selectedImg });
  }

  render() {
    return (
      <MemeGeneratorComponent
        topText={this.state.topText}
        addImg={this.addTextToImg}
        bottomText={this.state.bottomText}
        genImg={this.generateImg}
        imgSrc={this.state.randomImg}
        addTextToImg={this.addTextToImg}
      />
    );
  }
}

export default MemeGenerator;

/* this is the API endpoint "https://api.imgflip.com/get_memes"
the response is response.data.memes(array) an object with a data prop that
holds a memes props which is an array
   this is the default img "http://i.imgflip.com/1bij.jpg"

form has a className of meme-form
div with the meme className of meme
there are 2 h2 one with the name of top the other with the name of bottom
inside the meme div(that's the text inside the img)
*/
