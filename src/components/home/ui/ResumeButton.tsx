import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem]"
      href={"https://drive.google.com/file/d/1w7UPaOtsYxORl6FYxoyfe4vnMM14BLaD/view?usp=sharing"}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
