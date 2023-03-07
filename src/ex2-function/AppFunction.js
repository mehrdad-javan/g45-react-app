import React from "react";
//rsf

function Header(){

    return (
        <>
            Header
        </>
    );
}


function Footer(){

    return (
        <>
            Footer
        </>
    );
}




function Content(){

    return (
        <>
            Content: <br/>
            <Welcome name="Test" message="Welcome to my first React App" />
            <br/>
            <Welcome name="ABC" message="Welcome to my first React App" />
        </>
    );
}

function Welcome(props) {

    return(
    <div>
        Hi {props.name}, {props.message}
    </div>
    );

}



function AppFunction(){
    return (
        <>
            <Header />
            <br/>
            <Content />
            <br/>
            <Footer />
        </>
    );
}
export default AppFunction;