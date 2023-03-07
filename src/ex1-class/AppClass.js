import React from "react";
import ContentClass from "./ContentClass";
import FooterClass from "./FooterClass";
import HeaderClass from "./HeaderClass";

//rcc

class AppClass extends React.Component {

    render(){
        return (
            <>
                <HeaderClass />
                <ContentClass />
                <hr/>
                <FooterClass />
            </>
            );
    }
}

export default AppClass;




