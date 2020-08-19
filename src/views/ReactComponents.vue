<template>
  <div class="react-components">
    <h1>This is a react components page</h1>
    <Table :columns="columns" :dataSource="tableData" /><!-- react 组件的 dataSource 之类多词参数不可用短横线命名法表示 -->
    <Graphin :data="data"/>
  </div>
</template>

<script>
import { Table, Divider, Tag } from 'antd';
import Graphin, { Utils } from "@antv/graphin";
import "@antv/graphin/dist/index.css";

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



const Columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  // TODO: 参考 https://github.com/akxcv/vuera/issues/31 解决 render 中 react-jsx 解析的问题
  // render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  // render: tags => (
  //   <span>
  //     {tags.map(tag => {
  //       let color = tag.length > 5 ? 'geekblue' : 'green';
  //       if (tag === 'loser') {
  //         color = 'volcano';
  //       }
  //       return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
  //     })}
  //   </span>
  // ),
}, {
  title: 'Action',
  key: 'action',
  // render: (text, record) => (
  //   <span>
  //     <a href="javascript:;">Invite {record.name}</a>
  //     <Divider type="vertical" />
  //     <a href="javascript:;">Delete</a>
  //   </span>
  // ),
}];

const TableData = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

export default {
  name: 'home',
  data() {
    return {
      columns: Columns,
      tableData: TableData,
      data: Data,
    }
  },
  components: {
    Table,
    Graphin,
  }
}
</script>
