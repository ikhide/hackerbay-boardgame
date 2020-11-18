import React from "react";
import styled from "styled-components";

function Square(props) {
  function renderMatrix() {
    return props.data.map((item, i) => <Box key={i}>{item}</Box>);
  }
  return <Container>{renderMatrix()}</Container>;
}

const Container = styled.div`
  display: flex;
`;

const Box = styled.div`
  text-align: center;
  width: 37px;
  height: 37px;
  border: 1px solid;
`;

export default Square;
