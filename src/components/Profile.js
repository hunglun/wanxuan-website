// Profile.js

import React from 'react';
import './Profile.css'; // Import the CSS file

import pic from '../assets/profile_pic.jpeg';
const VoiceArtistProfile = () => {
  const artist = {
    name: '马正阳',
    bio: '马正阳，北京光合积木文化传播有限责任公司配音演员，月声配音社社长。主要配音作品：电视剧《琅琊榜之风起长林》萧平旌、《延禧攻略》富察·傅恒、《扶摇》长孙无极、《双世宠妃》墨连城；动画作品《天官赐福》花城（三郎）、《少年锦衣卫》袁小棠、《我的三体·罗辑传》罗辑、《凹凸世界》雷德、《黑白无双》三桑无枝；游戏作品《食物语》新风鳗鲞、应山滑肉、《恋与制作人》JOKER、《古剑奇谭二》团子；特摄作品《泽塔奥特曼》夏川遥辉等。2020年12月参加由bilibili出品，猫耳FM联合出品，小梦马文化传媒制作的声音演员竞技节目《我是特优声》，成为SSV特优声。',
    skills: ['Character Voice', 'Narration', 'Commercial Voiceover', 'Audio Editing'],
    photoUrl: pic, // Update with the actual path to the artist's photo
 
  };

  return (
    <div className="profile-container">
      <img src={artist.photoUrl} className="Profile-pic" alt="profile_pic" />
      <h2>{artist.name}</h2>
      <p>{artist.bio}</p>
    </div>
  );
};

export default VoiceArtistProfile;
