import React from "react";
import styled from "styled-components";

const StyleCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
  }
  .card-img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: #333;
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }
  .card-amount {
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;
// const StyleCard = styled.div`
//   position: relative;
// `;
// const CardImage = styled.div`
//   height: 400px;
//   width: 100%;
//   border-radius: 8px;
// `;

// const CardImg = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   border-radius: inherit;
//   object-fit: cover;
// `;
// const CardContent = styled.div`
//   position: absolute;
//   left: 50%;
//   transform: translate(-50%, 50%);
//   width: calc(100% - 36px);
//   bottom: 0;
//   background-color: white;
//   z-index: 10;
//   border-radius: 20px;
//   padding: 20px;
// `;

// const CardTop = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 30px;
// `;

// const CardUser = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 12px;
// `;

// const UserAvatar = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 100rem;
//   object-fit: cover;
//   flex-shrink: 0;
// `;
// const UserName = styled.span`
//   font-weight: 300;
//   font-size: 16px;
//   color: #333;
// `;

// const CardFooter = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const CardTitle = styled.h3`
//   font-size: 18px;
//   font-weight: 500;
//   color: black;
// `;

// const CardAmount = styled.span`
//   font-size: 18px;
//   font-weight: bold;
//   background: linear-gradient(86.88deg, #20e3b2, #2cccff);
//   color: transparent;
//   -webkit-background-clip: text;
//   background-clip: text;
// `;

// const CardMeta = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 12px;
// `;
const Card2 = () => {
  return (
    <StyleCard>
      <div className="card-image">
        <img
          className="card-img"
          src="https://cdn.dribbble.com/userupload/15691806/file/original-2e4ba69324e5f96bcfa38b6465c7f944.png?resize=1504x1128&vertical=center"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png"
              alt=""
            />
            <div className="user-name">@zndrson</div>
          </div>
          <div className="card-meta">
            <img src="/public/coolicon.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="card-footer">
          <div className="card-title">Cosmic Perspective</div>
          <div className="card-amount">12,000 PSL</div>
        </div>
      </div>
    </StyleCard>
  );
};

export default Card2;
