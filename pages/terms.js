import React, { useState, useEffect, useContext } from "react";
//INTRNAL IMPORT
import { UserCard } from "../Components/index";
import Style from "../styles/terms.module.css";
import { ChatAppContect } from "../Context/ChatAppContext";

const terms = () => {
  const { userLists, addFriends } = useContext(ChatAppContect);
  return (
    <div className={Style.termsContainer}>
      <div className={Style.alluser_info}>
        <h1>TERMS OF USE</h1>
      </div>
      <div className={Style.termsContent}>
        <div className={Style.translucentBox}>
          {/* Place your terms and conditions content here */}
          {/* For example: */}
          <p>
            These terms and conditions govern your use of our chat application.
            By using our application, you accept these terms and conditions in
            full. If you disagree with these terms and conditions or any part
            of these terms and conditions, you must not use our application.
          </p>
          <h1>Decentralized Chat Community Guidelines</h1>
  <p>Welcome to our decentralized chat platform! This space is built on the principles of open communication and user empowerment. To ensure a positive and respectful environment for everyone, please follow these basic rules:</p>

  <h2>General User Conduct</h2>
  <ul>
    <li>Treat others with respect and avoid:</li>
      <ul>
        <li>Offensive language</li>
        <li>Harassment</li>
        <li>Bullying</li>
        <li>Hate speech</li>
      </ul>
    <li>Do not engage in any illegal activity or promote illegal actions.</li>
    <li>Respect the privacy of others and avoid sharing private information without consent.</li>
    <li>Refrain from spamming, unsolicited advertising, or commercial messages.</li>
    <li>Report any violation of these rules to the community moderators.</li>
  </ul>

  <h2>Content Moderation</h2>
  <p>We believe in freedom of expression, but certain content is harmful and unacceptable:</p>
  <ul>
    <li>Hate speech</li>
    <li>Violent content</li>
    <li>Pornography</li>
    <li>Copyrighted material without permission</li>
  </ul>
  <p>Moderators will review reported content and take appropriate action, including:</p>
  <ul>
    <li>Removing content</li>
    <li>Banning users</li>
  </ul>

  <h2>Additional Considerations</h2>
  <p>Please remember:</p>
  <ul>
    <li>Your account security is your responsibility. Use strong passwords and be cautious about sharing personal information.</li>
    <li>This platform may have age restrictions. Ensure you meet the age requirement for participation.</li>
    <li>The platform has data retention and privacy policies. Please familiarize yourself with them.</li>
    <li>For any disputes between users, a community-based mediation process is available.</li>
  </ul>

  <p>By following these rules, we can create a thriving and inclusive decentralized chat community for everyone.</p>

        </div>
      </div>
    </div>
  );
};

export default terms;
