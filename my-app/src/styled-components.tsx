
import styled from 'styled-components';
import Loader from './styledcomponentsload';
import Button from './styledcomponentsbutton';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="upper">
          <div className="circles"> 
          <div className="c" />
          <div className="c" />
          <div className="c" />
        </div>
        <div className="browser">
          <div className="chevrons">
            <svg viewBox="0 0 20 20" height={16} width={16} xmlns="http://www.w3.org/2000/svg" data-name={20} id="_20">
              <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" id="Fill" />
            </svg>
            <svg viewBox="0 0 20 20" height={16} width={16} xmlns="http://www.w3.org/2000/svg" data-name={20} id="_20">
              <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" id="Fill" />
            </svg>
          </div>
          <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="7.89" height="7.887" viewBox="0 0 16.89 16.887">
              <path id="Fill" d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z" transform="translate(0.003 0)" />
            </svg>
            STR-AI-VER
             
            <div>
             
            </div>
          </div>
         
          </div>
        </div>
        <div className="down">
           
            <div className="middleblock1">
              <Loader/>
             </div>
            <div style={{margin:"13%"}}>
              <Button jim="Start small" />
              <br></br>
              <br></br>
              <Button jim="Why delay?"/>
            </div>
             <div style={{marginTop:"13%"}}>
              <Button jim="Learn quickly" />
                <br></br>
                <br></br>
              <Button jim="Get started"/>
            </div>
            
        </div>
        </div>
          
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width:60rem;
    height:22rem;
    background: rgba(255,255,255,0.1) ;
    overflow: hidden;
    
    border-radius:24px;
  }
    .upper{
    display:flex;
    }

  .circles,
  .browser {
    height: 30px;
    display: flex;
    align-items: center;
  }

  .circles {
    width: 20%;
    gap: 8px;
    padding: 10px;
  }

  .c {
    width: 09px;
    height: 9px;
    border-radius: 50%;
    box-shadow: inset 2px 2px 5px rgba(235, 235, 235, 0.356);
  }

  .c:first-child {
    background-color: red;
  }

  .c:nth-child(2) {
    background-color: rgb(204, 167, 4);
  }

  .c:last-child {
    background-color: green;
  }

  .browser {
    width: 80%;
    padding: 5px;
    display: flex;
    gap: 10px;
  }

  .chevrons {
    display: flex;
  }

  .search-bar {
    position: relative;
    border: 0.5px solid black;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: rgb(88, 88, 88);
    box-shadow: inset 2px 2px 2px #05050525;
  }
    .down{
    display:flex;
    width:100%;
    height:100%;
    }
   .innerblock{
    width:30%;
   height:40%;
   margin:4%;
   border:100% solid black;
   
   background-color:white;
   }
   .middleblock1{
   width:15%;
   height:40%;
    margin:5%;
   
   }
   .middleblock0,.middleblock2{
   display:flex;
   flex-direction:column;
   gap:auto;
   justify-content:space-between;
   height:40%;
    margin-top:5%;

   }
   
   .final{
   width:30%;
   height:40%;
   margin:5%;
   background-color:black;}
  .search-bar svg {
    position: absolute;
    left: 10px;
  }`;

export default Card;
