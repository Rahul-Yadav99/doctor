

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
    return(
        <div className="bg-[#E9E7EF] min-h-screen">
            <aside
                className="bg-white  h-full fixed top-0 left-0 "
            style={{
                width: 300
            }}
            >

            </aside>
            <section
            style={{
                marginLeft : 300
            }}
            >
                <nav className={"bg-white p-4 shadow"}>
                    <div className={"flex gap-5"}>
                        <button className={"p-3 rounded-full hover:bg-gray-200 "}>
                            <i className="ri-menu-5-line text-2xl font-semibold  "></i>
                        </button>
                        <button className={"flex gap-5 ml-2 items-center justify-center py-1.5 px-1.5 rounded-full hover:bg-gray-200 "}>
                            <i className="ri-global-fill text-2xl font-semibold"></i>
                            <h5 className={"font-semibold  text-gray-500 flex items-center justify-center "}>Go To Website</h5>
                        </button>
                    </div>
                    <div></div>
                </nav>
                <h1 className={"text-5xl font-bold"}>Rahul</h1>
            </section>
        </div>
    )
}
export default Layout