import React from "react"
import Styled from "styled-components"

const Conatiner = Styled.div`
    width:100vh;
    hegith:100vw;
    display:flex;
    justify-content: center;
    font-size:32px;
    margin-top:20px;
`;

export default () =>
 <Conatiner>
     <span role="img" aria-label="Loading" >
     ⏰
     </span>
</Conatiner> 

