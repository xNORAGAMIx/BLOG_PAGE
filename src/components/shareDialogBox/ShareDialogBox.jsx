import { Fragment, useContext, useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import {
  AiOutlineShareAlt,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillWechat,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function ShareDialogBox() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const context = useContext(myContext);
  const { mode } = context;

  const currentUrl = window.location.href;
  const [copied, setCopied] = useState(false);

  const handleShare = (shareUrl) => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        setTimeout(() => {
          window.open(shareUrl, "_blank", "noopener,noreferrer");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  // URLs for sharing on different social platforms
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      currentUrl
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      currentUrl
    )}`,
  };

  return (
    <Fragment>
      <div className="ml-auto">
        <AiOutlineShareAlt
          onClick={handleOpen}
          style={{ color: mode === "dark" ? "white" : "white" }}
          size={20}
        />
      </div>
      {/* Dialog  */}
      <Dialog
        className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0"
        open={open}
        handler={handleOpen}
        style={{
          background: mode === "light" ? "#2f3542" : "#2f3542",
          color: mode === "dark" ? "white" : "black",
        }}
      >
        {/* DialogBody  */}
        <DialogBody>
          <div className="flex justify-center flex-wrap  sm:mx-auto sm:mb-2 -mx-2  mt-4 mb-2 ">
            {/* main  */}
            <div className="">
              <div className="flex gap-3">
                {/* Linkedin Icon  */}
                <div className="">
                  <a
                    onClick={() => handleShare(shareUrls.linkedin)}
                    target="_blank"
                  >
                    <AiFillLinkedin
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </a>
                </div>

                {/* Instagram Icon  */}
                <div className="">
                  <a
                    onClick={() => handleShare(shareUrls.twitter)}
                    target="_blank"
                  >
                    <AiFillTwitterCircle
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </a>
                </div>

                {/* Github Icon  */}
                <div className="">
                  <a
                    onClick={() => handleShare(shareUrls.linkedin)}
                    target="_blank"
                  >
                    <AiFillWechat
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </a>
                </div>

                {/* Facebook Icon  */}
                <div className="">
                  <a
                    onClick={() => handleShare(shareUrls.linkedin)}
                    target="_blank"
                  >
                    <AiFillFacebook
                      size={35}
                      style={{
                        color: mode === "dark" ? "white" : "white",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {copied && (
            <div className="px-5 mx-20 text-green-500 mt-2">
              URL copied to clipboard! Opening link in 2 seconds...
            </div>
          )}
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
