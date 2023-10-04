import { createHeader } from "./header";
import { createFooter } from "./footer";
import { createNavBar } from "./nav-bar";
import { createMainDiv } from "./main-div";
function initialLoad(){   
    createHeader("Flora")
    createNavBar()
    createMainDiv()
    createFooter("Flora Copyright 2023")
}
    
export {initialLoad}