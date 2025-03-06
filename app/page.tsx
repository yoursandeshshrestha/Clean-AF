'use client';
import { HomeProvider } from "@/core/Home/presentation/di/HomeProvider";
import HomePageComponent from "@/core/Home/presentation/view/HomePageComponent";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-2">Clean Architecture Demo</h1>
        <p className="mb-4">Using picsum.photos API</p>
      </div>
      <HomeProvider dispatch={dispatch}>
        <HomePageComponent />
      </HomeProvider>
    </>
  );
};

export default Page;