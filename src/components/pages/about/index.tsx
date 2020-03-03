import * as React from "react";
import PageHeader from "Components/common/PageHeader";

const About: React.FC = () => {
    React.useEffect(() => {
        const a: any = document.getElementsByName("description")[0];
        a.content = "This is about page"
    }, [])
    
    return (
        <div className="about-container">
            <PageHeader title="About" />
        </div>
    );
};

export default About;