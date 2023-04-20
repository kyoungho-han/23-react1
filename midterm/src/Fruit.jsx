import React from "react";

export default class Fruit extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          text: "",
        };
        
      }
      changeTextApple = () => {
        this.setState({
          text: "사과.",
        });
      };
      changeTextOrange = () => {
        this.setState({
          text: "오렌지.",
        });
      };
      changeTextBanana = () => {
        this.setState({
          text: "바나나.",
        });
      };
      render() {
        return (
          <div>
            <h1>어떤 과일을 좋아하나요? {this.state.text}</h1>
            <button onClick={this.changeTextApple}>사과</button>
            <button onClick={this.changeTextOrange}>오렌지</button>
            <button onClick={this.changeTextBanana}>바나나</button>
          </div>
        );
      }
}