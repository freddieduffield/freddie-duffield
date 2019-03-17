import styled from 'styled-components';

const scrollableArea = styled.div`
  margin-left: 22px;
  float: left;
  height: 300px;
  width: 300px;
  background: blue;
  overflow-y: scroll;
  margin-bottom: 25px;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(left, #96a6bf, #63738c);
    box-shadow: inset 0 0 1px 1px #5c6670;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #eee;
    box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(left, #8391a6, #536175);
  }
`;

export default scrollableArea;
