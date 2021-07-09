import React, { useState, useRef } from "react";
import styled from "styled-components";

interface Props {
  name?: string;
  imgname?: string;
}

const Button = styled.button`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  border: 0;
  padding: 12px 10px;
  border-radius: 12px;
  color: #fff;
  font-weight: 400 !important;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgba(193, 255, 213, 0.3);
  cursor: pointer;
  img {
    width: 20px;
    border-radius: 50%;
  }
  &:focus {
    box-shadow: 0px 0px 3px 1px rgba(117, 240, 157, 0.5);
    outline: none;
  }
`;

const Row: React.FC<Props> = ({ name, imgname }) => {
  return (
    <>
      <Button>
        {name}
        <img src={"images/" + imgname + ".png"} alt="icon"></img>
      </Button>
    </>
  );
};

export default Row;
