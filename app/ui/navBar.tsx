"use client"
import * as React from "react"
//backgroundColor: "rgb(44, 30, 74)",
//ul - backgroundColor: "rgb(44, 30, 74)",

const styles = {
    nav: {
      top: 0,
    },
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
    },
    li: {
      color: "rgb(0, 0, 0)",
      padding: "10px 15px",
    },
    a: {
      textDecoration: "none",
      color: "inherit",
      fontFamily: '"YAEnS2G4JLg 0", -apple-system, BlinkMacSystemFont, sans-serif',
    },
  };
  
  export function Navbar() {
    return (
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          {["SERVICES", "ABOUT US", "DOMAINS", "FAQS","LOGIN"].map(
            (item) => (
              <li key={item} style={styles.li}>
                <a href="#" style={styles.a} draggable="false" role="menuitem">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    );
  }