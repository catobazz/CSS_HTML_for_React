import React from 'react';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
        <Box>
            {/*<Text> AAAAAAAAAAAaaaaa ddddd </Text>*/}
            <div>
                <Button > See more </Button>
                <Button > Save </Button>
            </div>

        </Box>


    </div>
  );
}

export default App;

// const Text = styled.text`
//   color: rgb(171, 179, 186);
//   font-family: Inter,serif;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 20px;
//   //letter-spacing: 0%;
//   text-align: left;
// `

const Button = styled.button`
  border-radius: 5px;
  width: 86px;
  height: 30px;
`
const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
