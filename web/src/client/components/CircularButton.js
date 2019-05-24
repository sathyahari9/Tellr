import {Component} from "react";
import React from "react";
class CircularButton extends Component {

    constructor(props) {
        super(props);

        //for multiple choice buttons
        this.state = {
            selected: this.props.selected,
            color: this.props.color,
            colorSelected:this.props.colorSelected,  //if the button can be selected
            circular: this.props.circular == null ? true : this.props.circular,
        };
    }
    
    select = ()=>{
        this.setState({selected:true})
    }

    unSelect=()=>{
        this.setState({selected:false})
    }

    render() {
        return (
          <div>
              <div  className={!this.state.selected ? "circular_button " + this.state.color : "circular_button " + this.state.colorSelected } id={this.props.id}
                   style={{
                       height: this.state.circular ? (this.props.radius) : this.props.height,
                       width: this.state.circular ? (this.props.radius) : this.props.width,
                       borderRadius: this.props.radius,
                       marginLeft: this.props.marginLeft,
                       marginRight: this.props.marginRight,
                       marginBottom: this.props.marginBottom,
                       marginTop: this.props.marginTop,
                       margin: this.props.margin,
                       visibility: this.props.visibility,
                       display: this.props.display,
                       left: this.props.left,
                       float: this.props.float,
                       flexGrow: this.props.flexGrow,
                       flexShrink: this.props.flexShrink,
                       position: this.props.position,
                       paddingRight: this.props.paddingRight
                   }}
                   onClick={this.props.onClick}>
                    {this.props.hasText || this.props.hasText==null?
                  <div className={"button_label"}
                       style={{
                           fontSize: this.props.fontSize || "1rem",
                           verticalAlign: "middle",
                           height: this.props.fontSize,
                           fontWeight:this.props.fontWeight
                       }}>
                      {!this.props.barShape ? (this.props.mini ?
                          <img src={this.props.image} style={{width: "20px", height: "20px"}}/> :
                          <img src={this.props.image} style={{display:'block',margin:'0 auto'}}/>) :
                          <img src={this.props.image}
                               style={{height: this.props.fontSize,fontWeight:this.props.fontWeight,position: "relative", top: "13%"}}/>}
                      {this.props.barShape ? <span style={{fontSize:this.props.fontSize || '40px',fontWeight:this.props.fontWeight}} > {this.props.text} </span> : this.props.text}
                  </div>
                    :<div></div>}
                   
              </div>
          </div>
        )
    }

}

export default CircularButton;
