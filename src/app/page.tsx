import Contact from "./contact/page"
import Home from "./home/page"
import Intro from "./intro/page"
import Qualification from "./qualification/page"
import Work from "./work/page"
import BlogSection from "./blog/page"

export default function App(){
    return (
        <main style={{
            height: '100vh',
            overflowY: 'scroll',
        }}>
            <Home />
            <Intro />
            <Work/>
            <Qualification/>
            <Contact/>
            {/* <BlogSection /> */}
        </main>
    )
}