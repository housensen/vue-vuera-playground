import React, { Component } from 'react'
import Graphin, { Utils } from "@antv/graphin";
import { ContextMenu } from "@antv/graphin-components";
import "@antv/graphin-components/dist/index.css";

import "@antv/graphin/dist/index.css";

export default class Demo extends Component {

    render() {

        const Options = [
            {
              key: "deleteNode",
              title: "Delete",
              visible: true,
              iconType: "delete",
              onClick: () => {
                console.log("deleted");
              }
            },
            {
              key: "invertSelect",
              title: "Invert Select",
              iconType: "select",
              visible: true,
              onClick: () => {}
            }
          ];
          
   

        return (
            <Graphin data={this.props.data} layout={this.props.layout}>
            <ContextMenu options={Options}/>
             </Graphin>
        )
          
    }

}