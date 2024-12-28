/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import classes from "./Header.module.scss";
import dynamic from "next/dynamic";
import { aexir, whtpny, whtpnyPX } from "@/components/Common/Fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
const tabs = [
  { id: "home", label: "home", href: "/" },
  { id: "about", label: "about", changeTo: "in.prgrss", href: "/about" },
  {
    id: "projects",
    label: "projects",
    changeTo: "in.prgrss",
    href: "/projects",
  },
  { id: "contact", label: "contact", changeTo: "in.prgrss", href: "/contact" },
];

const TextReveal = dynamic(() => import("./TextReveal"), {
  ssr: false,
});

const Clock = dynamic(() => import("./Clock"), {
  ssr: false,
});

export default function Header() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(() => {
    const tab = tabs.find((element) => element.href === router.pathname);

    return tab.id;
  });
  return (
    <header className={classes.headerContainer}>
      <Clock className={`${classes.clock} ${whtpnyPX.className}`} />
      {/* https://www.youtube.com/watch?v=kep_Iaxuzy0 */}

      {/* ${activeTab === tab.id && classes.activeTab} */}
      <div className={classes.linkContainer}>
        {tabs.map((tab) => (
          <Link
            href={tab.href}
            key={tab.id}
            onClick={() => {
              window.scrollTo(0, 0, { behavior: "smooth" });
              setActiveTab(tab.id);
            }}
            className={classes.linkWrapper}
            onMouseEnter={() => setActiveTab(tab.id)}
            scroll={false}
          >
            <TextReveal
              originalText={tab.label}
              changeTo={tab?.changeTo}
              animateLeave
              className={`${classes.navText} ${whtpny.className}`}
              velocity={60}
            >
              {activeTab === tab.id && (
                <motion.div
                  style={{ opacity: "0" }}
                  layoutId="active-pill"
                  className={classes.pill}
                  whileHover={{
                    scale: 1.1,
                    opacity: 1,
                  }}
                  whileTap={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                >
                  <div className={classes.blockerL} />
                  <div className={classes.blockerR} />
                  <div className={classes.blockerT} />
                  <div className={classes.blockerB} />
                </motion.div>
              )}
            </TextReveal>
          </Link>
        ))}
      </div>
      <p className={`${classes.accent} ${aexir.className}`}>///////</p>
    </header>
  );
}
