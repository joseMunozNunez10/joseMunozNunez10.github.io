import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { profileData } from "../../../data/config.js";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href={profileData.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href={profileData.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
