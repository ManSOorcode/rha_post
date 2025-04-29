import { useQuery } from "@tanstack/react-query";
import {
  getPost,
  getPostByTags,
  getPostTags,
  getSinglePost,
} from "../apis/api";
import { BiDislike, BiLike } from "react-icons/bi";
import { LuEye } from "react-icons/lu";
import { useState } from "react";

const Home = () => {
  const [postTag, setPostTags] = useState("");

  // for all post
  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });

  //   for single post
  const {
    data: singlePost,
    isLoading: singleLoading,
    isError: singleIsError,
    isSuccess: singleSuccess,
    error: singleError,
  } = useQuery({
    queryKey: ["singlePost"],
    queryFn: getSinglePost,
  });

  // for post tags
  const {
    data: postTags,
    isLoading: tagIsLoading,
    isError: tagIsError,
    isSuccess: tagIsSuccess,
    error: tagError,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: getPostTags,
  });

  // for get post by tags
  const {
    data: postByTags,
    isLoading: postByTagIsLoading,
    isError: postByTagIsError,
    isSuccess: postByTagIsSuccess,
    error: postByTagError,
  } = useQuery({
    queryKey: ["postBytags", { postTag }],
    queryFn: getPostByTags(postTag),
  });

  console.log(postByTags, postTag);

  const handlingTags = (tag) => {
    setPostTags(tag);
  };
  return (
    <section className=" ">
      <section className=" bg-[#F2F8F7] pb-20">
        {/* banner */}
        <section className="flex w-full pt-[6rem] gap-4 max-w-7xl mx-auto">
          {/* post */}
          <div className="pr-4">
            <h3 className="text-xl font-semibold">
              <span className="bg-[#00AAA1] text-white ">Feature</span> This
              Months
            </h3>
            <div className="mt-[4rem] grid gap-4 grid-cols-2 overflow-scroll h-[18rem] w-full">
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : isError ? (
                <p>{error}</p>
              ) : (
                data?.posts?.map((post) => (
                  <div key={post.id}>
                    <p className="text-sm bg-green-100 inline-block px-2 py-1">
                      Travel
                    </p>
                    <h4 className="text-2xl font-semibold pb-2">
                      {post.title}
                    </h4>
                    {/* <div className=" bg-gray-600 w-fit h-[8rem]"> </div> */}
                    {/* <img src="" alt="" /> */}
                    <ul className="flex gap-6 items-center pb-2">
                      <li className="flex gap-2 items-center">
                        <BiLike />
                        {post.reactions.likes}
                      </li>
                      <li className="flex gap-2 items-center">
                        <BiDislike />
                        {post.reactions.dislikes}
                      </li>
                      <li className="flex gap-2 items-center">
                        <LuEye />
                        {post.views}
                      </li>
                    </ul>
                    <p className="text-[15px]">{post.body}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* info */}
          <div className="pl-4 ">
            <h3 className="text-xl font-semibold">
              <span className="bg-[#00AAA1] text-white ">Populer</span> Post
            </h3>
            <div className="mt-[4rem] overflow-scroll h-[18rem] w-full">
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : isError ? (
                <p>{error}</p>
              ) : (
                data?.posts?.map((post) => (
                  <div key={post.id}>
                    <p className="text-sm bg-green-100 inline-block px-2 py-1">
                      Travel
                    </p>
                    <h4 className="text-xl pb-2">{post.title}</h4>
                    {/* <div className=" bg-gray-600 w-fit h-[8rem]"> </div> */}
                    {/* <img src="" alt="" /> */}
                    <ul className="flex gap-6 items-center pb-2">
                      <li className="flex gap-2 items-center">
                        <BiLike />
                        {post.reactions.likes}
                      </li>
                      <li className="flex gap-2 items-center">
                        <BiDislike />
                        {post.reactions.dislikes}
                      </li>
                      <li className="flex gap-2 items-center">
                        <LuEye />
                        {post.views}
                      </li>
                    </ul>
                    <p className="text-[15px]">{post.body}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </section>
      {/* recently post */}
      <section className=" w-full pt-[6rem] gap-4 max-w-7xl grid grid-cols-3 mx-auto">
        {/* post */}
        <div className="pr-4 col-span-2">
          <h3 className="text-xl font-semibold">
            <span className="bg-[#00AAA1] text-white ">Recently</span> Posted
          </h3>
          <div className="mt-[4rem] w-full ">
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : isError ? (
              <p>{error}</p>
            ) : (
              data?.posts?.slice(0, 3).map((post) => (
                <div key={post.id}>
                  <p className="text-sm bg-green-100 inline-block px-2 py-1">
                    Travel
                  </p>
                  <h4 className="text-2xl font-semibold pb-2">{post.title}</h4>
                  {/* <div className=" bg-gray-600 w-fit h-[8rem]"> </div> */}
                  {/* <img src="" alt="" /> */}
                  <ul className="flex gap-6 items-center pb-2">
                    <li className="flex gap-2 items-center">
                      <BiLike />
                      {post.reactions.likes}
                    </li>
                    <li className="flex gap-2 items-center">
                      <BiDislike />
                      {post.reactions.dislikes}
                    </li>
                    <li className="flex gap-2 items-center">
                      <LuEye />
                      {post.views}
                    </li>
                  </ul>
                  <p className="text-[15px]">{post.body}</p>
                </div>
              ))
            )}
          </div>
        </div>
        {/* info */}
        <div className="pl-4 ">
          <h3 className="text-xl font-semibold">
            <span className="bg-[#00AAA1] text-white ">Search</span> with Tags
          </h3>
          <div className="mt-[4rem] flex flex-wrap  gap-4 overflow-scroll h-[40rem]">
            {isLoading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : isError ? (
              <p>{error}</p>
            ) : (
              postTags?.map((tag, i) => (
                <div key={i}>
                  {/* <h4 className="text-xl pb-2">{post.title}</h4> */}
                  <button
                    className={`border-[1px] px-2 py-2 rounded-xl cursor-pointer ${
                      postTags === tag.name ? "bg-[#00AAA1] text-white" : ""
                    }`}
                    onClick={() => handlingTags(tag.name)}
                  >
                    {tag.name}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {/* post section with pagination */}
      {/* </section> */}
    </section>
  );
};

export default Home;
