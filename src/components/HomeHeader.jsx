import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5 mt-3">
            <div className="flex gap-4">
                <a href="https://www.gmail.com "  target="_blank" className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer font-bold">
                 Gmail
                </a>
                <a href="#" onClick={() => alert("Work in Progress") } className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer font-bold">
                Images
                </a>
            
            </div>

            <ProfileIcon />
        </header>
    );
};

export default HomeHeader;
