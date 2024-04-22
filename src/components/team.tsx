import { BlockType, HeaderType, ImageType } from "@/lib/types";
import { SocialIcons } from "./social-icon-extractor";
import SectionWrapper from "@/ui/wrappers/section-wrapper";
import SectionTitle from "@/ui/section-title";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberType {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  social: string;
  socialUrl: string;
  image: ImageType;
}

export interface TeamPropTypes extends BlockType {
  header: HeaderType;
  teamMembers: TeamMemberType[];
}

const Team = ({ data }: { data: TeamPropTypes }) => {
  const { header, teamMembers } = data;

  return (
    <SectionWrapper>
      <SectionTitle title={header?.title} />
      <div className="flex items-center flex-grow gap-1 sm:gap-6 w-full justify-center">
        {teamMembers.map((item) => {
          const fullName = item.firstName + " " + item.lastName;

          return (
            <div key={`${item.id}-${item.firstName}`}>
              <div className="aspect-[3/2] w-full max-w-60">
                <Image
                  className="object-cover"
                  src={item.image.url}
                  width={item.image.width}
                  height={item.image.height}
                  alt="logo-team-member"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs sm:text-sm font-bold my-1">
                  {fullName}
                </span>
                <span className="text-[10px] sm:text-xs text-darkGray font-semibold">
                  {item.title}
                </span>
                <Link href={item.socialUrl} target="blank">
                  <SocialIcons classnames="text-darkGray" title={item.social} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Team;
