/* eslint-disable react/prop-types */
import React from "react";
import PostDetailSkeleton from "./PostDetailSkeleton";
import { UserContext } from "../utils/UserContext";

class ProfileClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: null,
      name: "Rashid Imran",
      email: "rashidImran@gmail.com",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Aymaan-Shabbir");
    const resData = await data.json();
    this.setState({
      userInfo: resData,
    });
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return this.state.userInfo === null ? (
      <PostDetailSkeleton />
    ) : (
      <div className="flex items-center max-w-100 m-10 border justify-center flex-col border-black font-bold font-xl p-2 flex-wrap">
        <img
          src={this.state.userInfo.avatar_url}
          alt="Profile"
          className="w-30 h-30 border-1 rounded-md"
        />
        <h1>Name: {this.state.userInfo.name}</h1>
        <br />
        <h1>Bio: {this.state.userInfo.bio}</h1>
        <br />
        <h1>Node ID: {this.state.userInfo.node_id}</h1>
        <br />
        <h1>Followers: {this.state.userInfo.followers}</h1>
        <br />

        {/* dev2 Section */}
        <h1>dev2</h1>
        <h1>Set yourself as a dev</h1>

        {/* Input Fields to Change Data Under dev2 */}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          className="border border-black px-2 py-2 my-2"
          placeholder="Enter Name"
        />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          className="border border-black px-2 py-2 my-2"
          placeholder="Enter Email"
        />

        {/* Only "dev2" Section Uses Updated Context Data */}
        <UserContext.Provider
          value={{ name: this.state.name, email: this.state.email }}
        >
          <UserContext.Consumer>
            {(data) => (
              <div className="flex items-center justify-center flex-col">
                <h1>Name: {data.name}</h1>
                <h1>Email: {data.email}</h1>
              </div>
            )}
          </UserContext.Consumer>
        </UserContext.Provider>
      </div>
    );
  }
}

export default ProfileClass;
