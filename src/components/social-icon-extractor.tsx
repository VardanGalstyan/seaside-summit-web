import { BsLinkedin, BsTwitterX, BsWikipedia } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  facebook: ImFacebook2,
  instagram: RiInstagramFill,
  linkedin: BsLinkedin,
  youtube: FaYoutube,
  x: BsTwitterX,
  wikipedia: BsWikipedia,
};

/**
 * Ensures Social Media Icons  dinamically render.
 */
export const SocialIcons = ({
  title,
  classnames = "",
}: {
  title: string;
  classnames?: string;
}) => {
  const IconComponent = iconMap[title?.toLowerCase()];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={classnames} />;
};
