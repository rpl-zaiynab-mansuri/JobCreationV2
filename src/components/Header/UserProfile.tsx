
import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div className="flex gap-4 self-stretch my-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e47edf4f3fdf9410efaee09708af6f58e2bec8ddfb6897bdbb3134f18a147d32?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e"
        alt="Notification Icon"
        className="object-contain shrink-0 my-auto w-6 aspect-square"
      />
      <div className="flex gap-1.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a89eafa051a0dd07216ad49e8302d0a521c673a107b3f9961e00cbf47512775?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e"
          alt="User Avatar"
          className="object-contain shrink-0 w-9 rounded-2xl aspect-square"
        />
        <div className="my-auto">Amanda</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ace2734c86d0d6b6afdddf7da883f60829155fb6cb0a2c2a810176e9eec756?placeholderIfAbsent=true&apiKey=868bd20bc6d8476891a5b686a1313f9e"
        alt="Dropdown Arrow"
        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
      />
    </div>
  );
};

export default UserProfile;
