import Head from 'next/head';
import A from './A';

const MainContainer = ({ children, keywords }) => {
    return (
        <>
        <Head>
            <meta keywords={"AlexChi, " + keywords}></meta>
            <title>Main Page</title>
        </Head>
        <nav className="nav">
            <A href={"/"} text="Main Page" />
            <A href={"/users"} text="List of users" />
        </nav>
        <div>
            {children}
        </div>
        </>
    )
};

export default MainContainer;