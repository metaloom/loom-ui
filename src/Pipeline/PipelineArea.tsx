import * as React from "react";
import Paper from "@mui/material/Paper";
import Chart from "../Demo/Chart";
import Deposits from "../Demo/Deposits";
import Orders from "../Demo/Orders";
import Assets from "../Asset/AssetList";
import { Grid, Container, Link } from '@mui/material';
import { styled } from "@mui/system";

import Typography from "@mui/material/Typography";
import "./flow-style.css";
import "react-flow-renderer/dist/theme-default.css";

import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from "react-flow-renderer";

const elements = [
  { id: "1", data: { label: "Node 1" }, position: { x: 250, y: 5 } },
  // you can also pass a React component as a label
  { id: "2", data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: "e1-2", source: "1", target: "2", animated: true },
];

const BasicFlow = () => <ReactFlow style={{height: 400, width: 400, border: "1px solid blue"}} elements={elements} />;


const StyledFlow = styled(BasicFlow)(
  ({ theme }) => `
  //width: 400;
  //height: 400;
  border: "1px solid blue";
`
);


export default function PipelineArea() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <ReactFlowProvider>
          <StyledFlow />
        </ReactFlowProvider>
      </Grid>
    </Container>
  );
}
