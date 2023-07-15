"use client";
import TopBar from "@/shared/components/TopBar";

const Page = () => {
    return (
        <>
            <TopBar />
            <div className="not_found">
                <div className="not_found__text">Not Found :(</div>
            </div>
        </>
    );
};

export default Page;
