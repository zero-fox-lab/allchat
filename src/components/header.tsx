import * as React from "react";
import { Link } from "wouter";

function Header() {
    return (
        <header>
            <nav>
                <Link href="/">index</Link>
            </nav>
        </header>
    );
}

export default Header;