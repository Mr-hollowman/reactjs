import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';

const Goods  = (props) => {
    const [boards, setBoards] = useState({});
    const [images, setImages] = useState([]);
    const {id}  = useParams();
    const [isWishAdd, setIsWishAdd] = useState(false);
    const [wishCount, setWishCount] = useState(0); 
  
    const wishAddHandler = () => {
      setIsWishAdd(!isWishAdd);
    }
  
    
        alert("찜 목록에 추가되었습니다.")
        console.log(boards)
        console.log("count+1")
      } else if (isWishAdd) {
        setWishCount(wishCount -1)
        fetch(`https://27.96.131.85:8443/api/likeBoards/${boards.id}`, {
          credentials: 'include',
          method: "DELETE",
          body: JSON.stringify({
            "liked": false
          })
        })
        alert("찜 목록에서 삭제되었습니다.")
        console.log(boards)
        console.log("count-1")
      }
    }    
    
  
    useEffect(() => {
      (async function () {
        const response = await axios.get(`https://27.96.131.85:8443/api/boards/${id}`, {
          withCredentials: true,
        });
        const boards = response.data;
        const images = boards.boardImages;
        console.log(response.data);
  
        // 게시글 정보 state에 저장
        setBoards(boards);
        setImages(images);
  
      })();
    }, []);
  
      return(
        <div id="goods">
          <p className="goodsTitle">상품 정보</p>
          <div className="images_container">
            {
              images.map((images) => {
                return (
                  <img className="goodsImages"
                  src={`https://27.96.131.85:8443/api/images/${images.id}`} />
                )
              })
            }
          </div>
         
          <div className="goodsContext">  
            <div className="goodsBoardTitle">
              {boards.title}
            </div>
            
            <div className="goodsName">
              상품 : {boards.goodsName}
            </div>
  
            <div className="goodsPrice">
              가격 : {boards.price} 원
            </div>
  
            <div className="goodsWriter">
              판매자 : {boards.writer}
            </div>
            
            <div className="goodsText">
            {boards.content}
            </div>
  
            <div className="goodsBtn">
              <span className="zzimBtn">
                <button className="btn btn-primary" type="submit" onClick={wishCountHandler}>찜 하기</button>
              </span>
              <button className="btn btn-primary" type="submit">판매자와 대화</button>
            </div>
          </div>
        </div>
      );
  };
  
  export default Goods;