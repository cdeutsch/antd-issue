import { Button } from "antd";
import * as React from "react";

export class MyThingWithRef extends React.Component {
  render() {
    const inputRef = React.createRef<HTMLAnchorElement>();
    // const inputRef = React.createRef<Button>();
    // const inputRef = React.createRef<MyThingWithRef>();

    return <Button ref={inputRef} />;
  }
}
