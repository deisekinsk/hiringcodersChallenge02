import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Content = styled.div`
    width: 80%;
    margin: auto;
    padding-top: 2%;
    

    section{
        height: 100%;
        width: 100%;

        display: flex;
        
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        align-content: center;
        
        
        text-align:center;
        background: #A69C98;
        border-radius: 12px;

        
        .product-content{
            display:grid;
            
            
            text-align:cener;            
            
            height: 55%;
            padding: 12px;
            border-radius: 12px;
            margin: 3px;       
    
        },

        .Button{
            border-radius: 12px;
        }


    }


`;



/* <palette>
<color name='Moda-1' rgb='73655D' r='114' g='100' b='92' />
<color name='Moda-2' rgb='261E1A' r='38' g='29' b='26' />
<color name='Moda-3' rgb='594B46' r='89' g='74' b='69' />
<color name='Moda-4' rgb='8C817D' r='140' g='128' b='124' />
<color name='Moda-5' rgb='A69C98' r='165' g='156' b='152' />
</palette> */