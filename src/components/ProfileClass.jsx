/* eslint-disable react/prop-types */

import React from "react";
import PostDetailSkeleton from "./PostDetailSkeleton";
class ProfileClass extends React.Component {
  // 1. first, constructor is called
  // 2. secondly, render is called
  // 3. lastly, didMount is called
  constructor() {
    super();
    this.state = {
      userInfo: null,
    };
  }
  //componentDidMount is like useEffect, api calls can be made through  componentdidMount
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Aymaan-Shabbir");
    const resData = await data.json();
    console.log(resData);
    this.setState({
      userInfo: resData,
    });
  }
  render() {
    return this.state.userInfo === null ? (
      <PostDetailSkeleton />
    ) : (
      <div className="flex items-center max-w-100 m-10 border justify-center flex-col border-black font-bold font-xl p-2 flex-wrap">
        <img
          src={this.state.userInfo.avatar_url}
          alt=""
          className="w-30 h-30 border-1 rounded-md"
        />
        <h1>Name:{this.state.userInfo.name}</h1>
        <br />
        <h1>Bio:{this.state.userInfo.bio}</h1>
        <br />
        <h1>Node ID:{this.state.userInfo.node_id}</h1>
        <br />
        <h1>Followers: {this.state.userInfo.followers}</h1>
        <br />
      </div>
    );
  }
}
export default ProfileClass;
