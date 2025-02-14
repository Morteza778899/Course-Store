import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import styled from "styled-components";
import { useState } from "react";
import BoxShop from "./BoxShop";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Div = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f2184f;
  ul.social-media {
    direction: rtl;
    li {
      a {
        .media-icon {
          width: 28px;
          height: 28px;
          color: white;
        }
      }
    }
  }
  .search-user {
    input.text-for-search {
      width: 220px;
      height: 25px;
      direction: rtl;
      font-size: 18px;
      padding-inline: 5px;
      background-color: rgb(255, 254, 254, 0.5);
      color: #cecece;
      border: none;
      border-bottom: 2px solid white;
      opacity: 0.5;
      transition: all 0.2s;
      :focus {
        outline: none;
        border-bottom: 2px solid aqua;
        opacity: 1;
      }
    }
    .media-icon {
      color: white;
      width: 20px;
      transition: all 0.3s;
      :hover {
        color: #2b2b2b;
        cursor: pointer;
      }
    }
    .log,
    .user-name {
      max-width: 150px;
      margin-inline: 5px;
      color: white;
      cursor: pointer;
      &.active {
        color: #062568;
      }
    }

    .shop-container {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      .box-shop {
        position: absolute;
        width: auto;
        height: auto;
        max-height: 320px;
        right: 0px;
        top: 40px;
        background-color: white;
        box-shadow: 1px 1px 10px #c0c0c0;
        z-index: 10;
      }
    }
  }
`;
const TopHeader = () => {
  const [shopHidden, setShopHidden] = useState(false);
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <>
      <Div className="top-header">
        <div className="h-100 container">
          <div className="h-100 d-flex justify-content-between align-items-center">
            <ul className="social-media list-inline m-0">
              <li className="list-inline-item ">
                <a>
                  <LinkedInIcon className="media-icon" />
                </a>
              </li>
              <li className="list-inline-item ">
                <a>
                  <InstagramIcon className="media-icon" />
                </a>
              </li>
              <li className="list-inline-item ">
                <a>
                  <GoogleIcon className="media-icon" />
                </a>
              </li>
              <li className="list-inline-item ">
                <a>
                  <TwitterIcon className="media-icon" />
                </a>
              </li>
              <li className="list-inline-item ">
                <a>
                  <FacebookIcon className="media-icon" />
                </a>
              </li>
            </ul>
            <div className="h-100 search-user d-flex align-items-center">
              <input className="text-for-search" type="text" />
              <SearchIcon className="media-icon mx-1 ms-3" />

              {user.userId ? (
                <>
                  <NavLink to="/logout" className="log text-decoration-none">
                    خروج
                  </NavLink>
                  {user.isAdmin && (
                    <>
                      <span className="text-white mx-1">|</span>
                      <NavLink to="/dashboard" className="user-name text-decoration-none">
                        داشبورد
                      </NavLink>
                    </>
                  )}
                  <span className="text-white mx-1">|</span>
                  <NavLink to="/profile" className="user-name text-decoration-none">
                    {user.fullname}
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/register" className="log text-decoration-none">
                    ثبت نام
                  </NavLink>
                  <span className="text-white mx-1">|</span>
                  <NavLink to="/login" className="user-name text-decoration-none">
                    ورود
                  </NavLink>
                </>
              )}

              <AccountCircleIcon className="media-icon mx-1" />

              <div
                className="shop-container"
                onMouseEnter={() => setShopHidden(true)}
                onMouseLeave={() => setShopHidden(false)}
              >
                <LocalGroceryStoreIcon className="media-icon shop-icon mx-1" />
                {shopHidden ? (
                  <div className="box-shop">
                    <BoxShop />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};
export default TopHeader;
