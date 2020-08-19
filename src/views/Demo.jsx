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
          
        const Data = {
            nodes: [
              {
                data: {
                  id: "node-0",
                  label: "node-0",
                  properties: [],
                },
                id: 'node-0',
                label: '事件关联用户',
                shape: 'CircleNode',
                style: {
                  nodeSize: 35,
                  icon: "team",
                  primaryColor: "#00DB00"
                }
              }, 
              {
                data: {
                  id: "node-1",
                  label: "node-1",
                  properties: [],
                },
                id: 'node-1',
                label: '事件关联IP',
                shape: 'CircleNode',
                style: {
                  nodeSize: 35,
                  icon: "team",
                  primaryColor: "#FFFF37"
                }
              }, 
              {
                data: {
                  id: "node-2",
                  label: "node-2",
                  properties: [],
                },
                id: 'node-2',
                label: '待处理事件1',
                shape: 'CircleNode',
                style: {
                  nodeSize: 40,
                  primaryColor: "#AE00AE",
                  icon:"message"
                }
              }
              ],
              edges: [
                {
                  label: "关联",
                  source: "node-2",
                  target: "node-0",
                  data: {}
                },
                {
                  label: "关联",
                  source: "node-2",
                  target: "node-1",
                  data: {}
                }
              ]
        }

        return (
            <Graphin data={Data}>
            <ContextMenu options={Options}/>
             </Graphin>
        )
          
    }

}