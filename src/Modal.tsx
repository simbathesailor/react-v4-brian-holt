// taken from React docs
import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  private el = document.getElementById("modal");
  constructor(props) {
    super(props);
  }
  
  public componentDidMount() {
    this.el = document.createElement("div");
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  public componentWillUnmount() {
   if(modalRoot) {
    modalRoot.removeChild(this.el);
   }
  }

  public render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
