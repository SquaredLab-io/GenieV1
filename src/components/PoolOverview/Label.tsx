import Image from "next/image";
import { useMemo } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useAccount } from "wagmi";

interface LabelProps {
  text: string;
  imgSrc?: string;
  link?: string;
}

const Label = ({ text, imgSrc, link }: LabelProps) => {
  const { chain } = useAccount();
  const explororUrl = useMemo(
    () => `${chain?.blockExplorers.default.url}/address/${link}`,
    [chain, link]
  );
  return (
    <div className="inline-flex items-center gap-[10px] px-[10px] text-[#EFEFF0] py-[6px] rounded-[4px] bg-[#16191F] text-sm/5 font-semibold">
      {imgSrc && <Image src={imgSrc} alt="token logo" width={20} height={20} />}
      <span>{text}</span>
      {link && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={explororUrl}
          className="text-[#3D85C6] inline-flex items-center gap-2"
        >
          {link.substring(0, 7)}...
          <HiOutlineExternalLink size={10} color="#3D85C6" />
        </a>
      )}
    </div>
  );
};

export default Label;
