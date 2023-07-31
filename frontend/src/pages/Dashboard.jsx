import React from "react";
import TopBar from "../components/navbar/TopBar";
import ProblemsTable from "../components/ProblemsTable/ProblemTable";

function Dashboard() {
  // const[inputs,setInputs] = ({
  //   id:"",
  //   title:"",
  //   difficulty:"",
  //   category:"",
  //   videoId:"",
  //   link:"",
  //   dislikes:0,
  // })

  return (
    <>
      <main className="bg-dark-layer-2 min-h-screen">
        <TopBar />
        <h1
          className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5"
        >
          &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
        </h1>
        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          {/* {loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)} */}
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Difficulty
                </th>

                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Solution
                </th>
              </tr>
            </thead>
            <ProblemsTable />
          </table>
        </div>
        {/* temp form */}
        {/* <form className="p-6 flex flex-col max-w-sm gap-3">
          <input type="text" placeholder="problem" name="id" />
          <input type="text" placeholder="title" name="title" />
          <input type="text" placeholder="difficulty" name="difficulty" />
          <input type="text" placeholder="category" name="category" />
          <input type="text" placeholder="order" name="order" />
          <input type="text" placeholder="videoID?" name="videoID" />
          <input type="text" placeholder="link?" name="link" />
          <button className="bg-white">Save to db</button>
        </form> */}
      </main>
    </>
  );
}

export default Dashboard;
