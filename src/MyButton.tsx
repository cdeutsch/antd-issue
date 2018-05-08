import { Button } from "antd";
import { ButtonProps } from "antd/lib/button/button";
import * as classNames from "classnames";
import * as React from "react";

export class MyButton extends React.Component<ButtonProps> {
  render() {
    let { className, ...passthrough } = this.props;

    className = classNames("my-button", className);

    return <Button className={className} {...passthrough} />;
  }
}
