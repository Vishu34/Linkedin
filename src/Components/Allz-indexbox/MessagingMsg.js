import { Accordion, AccordionSummary, Box } from "@mui/material";
import React from "react";
import { BsCalendarEventFill, BsThreeDots } from "react-icons/bs";
import { FaHashtag, FaList, FaRegEdit, FaSearch } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { MessagingDescribe } from "./MessagingDescribe";


export const MessagingMsg = () => {
  return (
    <>
      <section className="fixed bottom-0 right-2 w-[22%] Msg-col2 ">
        <Box>
          <Accordion
            className=" "
            sx={{
              backgroundColor: "#1b1f23",
              color: "white",
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandLess className="text-white icon" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex gap-3 items-center justify-between w-[100%] pr-2 -m-2">
                <div className="flex gap-3 items-center">
                  <img src="vishu.jpg" alt="image" className="image-circle" />
                  <h1 className="head">Messaging</h1>
                </div>
                <ul className="flex items-center gap-3">
                  <li>
                    <BsThreeDots />
                  </li>
                  <li>
                    <FaRegEdit />
                  </li>
                </ul>
              </div>
            </AccordionSummary>
<hr className="horizontal-line"/>

            <Box>
              <ul className=" ">
                <li className="p-2">
                 <div className="items-center flex navsearch  w-[100%] p-3 ">
                 <FaSearch />
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-[100%] bg-none"
                  />
                  <FaList/>
                 </div>
                </li>

                <li>
                  <ul className="flex items-center gap-2 justify-around">
                    <li className="Msg-focused head">Focused</li>
                    <li className="Msg-other head">Other</li>
                  </ul>
                </li>
              </ul>


{/*  message box */}

             <Box className="mt-1 overflow-y-scroll h-[60vh]">
             <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>

              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>

              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
              <div className="Msg-box">
                <ul className="flex gap-3 items-center justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-center
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-circle"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
             </Box>



            </Box>
          </Accordion>
        </Box>


        {/* message descripiton  */}


        <MessagingDescribe/>
      </section>
    </>
  );
};
