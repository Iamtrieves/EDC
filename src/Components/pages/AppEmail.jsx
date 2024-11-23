import EmailBackIcon from "/src/assets/images/email-back-icon.svg";
import ArchiveIcon from "/src/assets/images/email-archive-icon.svg";
import TrashIcon from "/src/assets/images/email-recycle-icon.svg";
import InboxIcon from "/src/assets/images/email-inbox-icon.svg";
import ElipsisIcon from "/src/assets/images/email-menu-icon.svg";
import StarIcon from "/src/assets/images/star-icon.svg";
import LightStarIcon from "/src/assets/images/light-star-icon.jpeg";
import EventLogo from "/src/assets/images/event-logo.jpeg";
import ArrowEmoji from "/src/assets/images/arror-emoji.jpeg";
import SmileEmoji from "/src/assets/images/smile-face-emoji.jpeg";
import Emojis from "/src/assets/images/emojis.jpeg";
import { Link } from "react-router-dom";
const AppEmail = () => {
  return (
    <div className="bg-[#101215] text-white">
      <header>
        <nav className="h-[7vh] flex items-center justify-between fixed w-full z-10 px-5 bg-[#101215]">
          <section className="size-5">
            <Link to="/">
              <img
                src={EmailBackIcon}
                alt="Email Navigation"
                className="size-full object-contain"
              />
            </Link>
          </section>
          <section className="flex items-center gap-[1.308125rem]">
            <section className="size-6">
              <img
                src={ArchiveIcon}
                alt="Archive Icon"
                className="size-full object-contain"
              />
            </section>
            <section className="size-6">
              <img
                src={TrashIcon}
                alt="Recycle Icon"
                className="size-full object-contain"
              />
            </section>
            <section className="size-5">
              <img
                src={InboxIcon}
                alt="Inbox Icon"
                className="size-full object-contain"
              />
            </section>
            <section className="size-5">
              <img
                src={ElipsisIcon}
                alt="Menu Icon"
                className="size-full object-contain"
              />
            </section>
          </section>
        </nav>
      </header>
      <main className="pt-[7vh] z-0 p-4">
        <section className="flex gap-2 min-h- mt-[1.5rem] text-[1.25rem] text-white mb-[1.25rem] items-center justify-between">
          <section className="w-[85%]">
            Your EDC Las Vegas Receipt Order #12345678
          </section>
          <section className="">
            <section className="size-6">
              <img
                src={StarIcon}
                alt="Star Icon"
                className="size-full object-contain"
              />
            </section>
          </section>
        </section>
        <section className="border mb-[1.0625rem] border-[#bbbcc3] text-[#bbbcc3] text-sm text-center w-[3rem]  rounded-[3px]">
          Inbox
        </section>
        <section className="flex gap-2.5 ">
          <section className="p-2 rounded-[50%] size-8 flex justify-center items-center bg-gray-500">
            EV
          </section>
          <section className="flex justify-between w-full">
            <section>
              <section className="text-white font-semibold">
                EDC Las Vegas{" "}
                <span className="inline-block text-[0.6875rem] font-normal ml-[2px]">
                  {/* {formData.purchaseDate.split("•").pop()} */}
                </span>
              </section>
              <section
                className="text-sm text-[#bbbcc3]"
                //   onClick={() => setShowEmailInfo((prevState) => !prevState)}
              >
                to me{" "}
                <span className="inline-block ml-[0.4rem] size-3">
                  <img
                    src={EmailBackIcon}
                    alt="Caret Icon"
                    className="size-full object-contain transition-[all_0.35s_ease-in-out] -rotate-90"
                  />
                </span>
              </section>
            </section>
            <section className="size-24">
              <img src={Emojis} alt="" />
            </section>
          </section>
        </section>
        <section className="mt-[-2rem] bg-[#2d343b]">
          <img src={EventLogo} alt="" />
          <section className="p-3 flex gap-2 flex-col">
            <div className="text-xl">Order #12345678</div>
            <div className="text-sm">
              Your order with EDC Las Vegas has been successfully processed.
            </div>
            <h1 className="text-md font-semibold">Manage your Order</h1>
            <p className="text-sm">
              Log into your account using your email as your username, or visit
              our support site for more assistance.
            </p>
            <section className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <div className="size-4">
                  <img src={SmileEmoji} alt="" />
                </div>
                <div className="text-[0.75rem] underline text-blue-600">
                  Log in to My Account
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="size-4">
                  <img src={SmileEmoji} alt="" />
                </div>
                <div className="text-[0.75rem] underline text-blue-600">
                  support.frontgatetickets.com
                </div>
              </div>
            </section>
            <section className="mt-4">
              <span className="text-sm">Questions about your order?</span>{" "}
              <span className="text-sm underline text-blue-600">
                Contact Us!
              </span>
            </section>
            <section className="bg-blue-300 p-3 w-full text-gray-600">
              <h1>Your Information</h1>
              <div className="grid grid-cols-[6fr_4fr] gap-3">
                <div className="border-r border-gray-400">
                  <div>
                    <h5>Billing Address</h5>
                    <p>Amy Lwin</p>
                    <span className="text-sm underline text-blue-800 pr-5">
                      Contact number of who stole the meat from the cooking pot
                    </span>
                  </div>
                </div>
                <div>
                  <div>
                    <h5>Billing Address</h5>
                    <p>Amy Lwin</p>
                    <span className="text-sm underline max-w-[10%] text-blue-800">
                      Contact Contact number of who stole the meat from the
                      cooking pot
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="bg-[blue] mt-4 p-2">
          <div>slgajsdkafnasfjkasdfanxdgjn,asdfn</div>
        </section>
      </main>
    </div>
  );
};

export default AppEmail;
