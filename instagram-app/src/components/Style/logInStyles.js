import styled from 'styled-components';

export const LogInWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: lightgrey;
    margin: 5% 25%;
    border: 1px solid grey;
    border-radius: 25px;
    box-shadow: 10px 10px 64px 0px rgba(0,0,0,1);
    opacity: .8;
`

export const Button = styled.button`
    margin: 2%;
`

export const H1 = styled.h1`
    font-size: 2em;
    font-weight: bold;
    padding: 0;
    margin: 1% 0 3%;
    color: grey;
`

export const H3 = styled.h3`
    font-size: 1.5em;
    font-weight: bold;
    padding: 0;
    margin: 2% 0;
`
export const CommentWrapper = styled.div`
    padding: 2%;
`

export const PostButtons = styled.div`
    margin-bottom: 2vh;
    width: 10%
    display: flex;
    justify-content: space-between;
`

export const PostLikes = styled.p`
    margin: 0;
`

export const Timestamp = styled.h3`
    font-size: 2vh;
    color: lightgrey;
    font-weight: 300;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 2%;
`

export const NewCommentForm = styled.div`
    border: none;
    background: none;
    width: 100%;
    height: auto;
    padding: 2% 0;
    .newComment {
        border: none;
        background: none;
        width: 100%;
        height: auto;
        padding: 2% 0;
    }

    ::placeholder { 
        color:   lightgrey;
      }
`

export const SingleComment = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1% 0;
    align-items: baseline;
    padding-left: 2%;
    > p {
        padding-left: 5%;
        width: 100%;
    }
`

export const PostsPageWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    height: 11vh;
    background: white;
    border-bottom: 1px solid rgba(211, 211, 211, 0.387);
`

export const CardContainerWrapper = styled.div`
    margin-top: 12vh;
`

export const CardsWrapper = styled.div`
    width: 100%;
    margin: 2% 0;
    border: 1px solid lightgrey;
    border-radius: 5px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.15);

    &:hover {
        box-shadow: 10px 10px 5px 0px rgba(25, 213, 255, 0.612);
    }

    .userThumb {
        height: 4vh;
        border-radius: 100%;
        padding-right: 2%;
    }
      
    .postImg {
    width:100%;
    height: auto;
    }
      
    .userThumb:hover {
    filter: brightness(1.45) contrast(3) grayscale(0.17) hue-rotate(72deg) saturate(3) sepia(0.04) ;
    }
`

export const PostHead = styled.h1`
    margin: 0;
    display: flex;
    font-size: 3vh;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    padding-left: 3%;
`
export const SearchBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;


`
export const SearchBarLogos = styled.div`
    width: 100%;
    display: flex;
    align-content: center;
    padding-left: 2%;

    .fa-instagram {
        padding: 0 8% 0 1%;
        border-right: 1px solid grey;
    }

    .instagram {
        height: 6vh;
        padding-left: 5%;
    }
`

export const SearchInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;

    > input {
        width: 16vw;
      }
`

export const SearchBarButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 2%;
    align-content: flex-end;
    
    .far {
        padding: 0 5%;
    }
`

