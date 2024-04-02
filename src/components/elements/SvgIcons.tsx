export default function Icons({ children }: any) {
    return <>{children}</>;
}

const Hamburger = ({ style }: any) => {
    return (
        <>
            <svg
                className={`text-gray-800 ${style} dark:text-white`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                />
            </svg>
        </>
    );
};

const Search = ({ style }: any) => {
    return (
        <>
            <svg
                className={`${style} text-gray-800 dark:text-white`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
            </svg>
        </>
    );
};
Icons.Search = Search;
Icons.Hamburger = Hamburger;
