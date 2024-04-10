import Image from "next/image";
export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white flex justify-between md:py-4 md:px-8 px-3 py-3 border-0 border-b-2">
      <div className="flex justify-center items-center">
        <Image
          height={56}
          width={56}
          src="/images/oronium.png"
          className="w-14"
          alt=""
        />
        <h3 className="text-lg font-semibold leading-6 mr-1">Oronium</h3>
        <h3 className="hidden md:block text-lg font-semibold leading-6">
          E-Commerce Store
        </h3>
      </div>
      <div className="flex  flex-1 justify-end items-center gap-4">
        <button className="flex justify-center gap-1.5 px-3 items-center  bg-[#C63E4A] p-2 h-12 rounded-lg text-xs text-white">
          <Image
            height={14}
            width={14}
            src="/images/play.png"
            className="h-3.5  object-contain"
            alt=""
          />
          <p className="hidden md:block">Preview Store</p>
        </button>
        <button className="h-12 min-w-11 rounded-lg  bg-gray-200 p-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14.9997 19C14.9997 20.6569 13.6566 22 11.9997 22C10.3429 22 8.99972 20.6569 8.99972 19M13.7962 6.23856C14.2317 5.78864 14.4997 5.17562 14.4997 4.5C14.4997 3.11929 13.3804 2 11.9997 2C10.619 2 9.49972 3.11929 9.49972 4.5C9.49972 5.17562 9.76772 5.78864 10.2032 6.23856M17.9997 11.2C17.9997 9.82087 17.3676 8.49823 16.2424 7.52304C15.1171 6.54786 13.591 6 11.9997 6C10.4084 6 8.8823 6.54786 7.75708 7.52304C6.63186 8.49823 5.99972 9.82087 5.99972 11.2C5.99972 13.4818 5.43385 15.1506 4.72778 16.3447C3.92306 17.7056 3.5207 18.3861 3.53659 18.5486C3.55476 18.7346 3.58824 18.7933 3.73906 18.9036C3.87089 19 4.53323 19 5.85791 19H18.1415C19.4662 19 20.1286 19 20.2604 18.9036C20.4112 18.7933 20.4447 18.7346 20.4629 18.5486C20.4787 18.3861 20.0764 17.7056 19.2717 16.3447C18.5656 15.1506 17.9997 13.4818 17.9997 11.2Z"
                stroke="#545454"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <Image
          height={48}
          width={48}
          src="/images/Avatar.png"
          className="w-12 h-12"
          alt=""
        />
      </div>
    </header>
  );
};
