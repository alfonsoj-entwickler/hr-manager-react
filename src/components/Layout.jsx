import { Outlet, Link, useLocation } from "react-router-dom"

function Layout() {
    const location = useLocation();
    return (

        <div className="md:flex md:min-h-screnn">
            <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">HR - Customers</h2>

                <nav className="mt-10">
                    <Link 
                        className={`${location.pathname === '/' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-4 hover:text-blue-300`} to="/">Customers</Link>
                    <Link 
                        className={`${location.pathname === '/customers/new' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-4 hover:text-blue-300`} to="/customers/new">Add a new customer</Link>
                </nav>
            </aside>
            <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;